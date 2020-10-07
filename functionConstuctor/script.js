// создание конструктора es5
function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(this.name); // this это объект

        function testthis(){
            console.log(this.id, id); // а тут уже this = undefind
        }
        testthis();
    };
}

User.prototype.exit = function(){
    console.log(`User ${this.name} exit.`);
};

const ivan = new User('Ivan', 29);
ivan.hello();
ivan.exit();
const margo = new User('Margo', 19);

console.log(ivan, margo);

// контекст вызова
/*
1 - this с use strict = undefind
2 - this без use strict = window
3 - this в объекте это сам объект
4 - this в конструкторах и классах - это новый экхемпляр объекта
5 - Ручная привязка this: call, apply, bind

 */
function showThis(a, b) {
    console.log(this); // this = window (с use strict = undefind)

    function sum(){
        console.log(this); // this = undefind
        return a + b;
    }
}

const obj = {
    a: 20,
    b: 15,
    sum: function(){
        console.log(this); // this в объекте это объект

        function showOut() {
            console.log(this); // this = undefind
        }
    }
};

function sayName(surname){
    console.log(this);
    console.log(this.name + surname);
}

const user2 = {
    name: 'John',
    //surname: 'Bon'
};

sayName.call(user2, 'Smith');
sayName.apply(user2, ['Smith']);

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));

// Пример с html button

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
});

const obj2 = {
    num: 5,
    sayNumber: function() {
        // стрелочные функции берут контекст у родителся т.е. this объект в данном примере
        const say = () => {
            console.log(this); // this объект
            const say2 = () => {
                console.log(this.num); // this.num это поле объекта
            };
            
            say2();
        };

        say();
    }
};

obj2.sayNumber();

const double2 = a => a * 2;

// Классы

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    getArea (){
        return this.height * this.width;
    }
}

const square = new Rectangle(2, 3);

console.log(square.getArea());

class ColoredReactangleWhithText extends Rectangle{
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showText(){
        console.log(this.text);
    }
}

const div = new ColoredReactangleWhithText(5, 4, 'Hello!', 'red');
div.showText();
console.log(div.getArea());