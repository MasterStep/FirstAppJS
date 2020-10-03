'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.warapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

const div = document.createElement('div');
div.classList.add('black');
document.body.append(div);
wrapper.append(div);
wrapper.prepend(div);