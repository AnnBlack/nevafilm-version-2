// 'use strict';
var i = 0
var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');

    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
});

var subNav = document.querySelectorAll(".main-nav__sub-menu");
var subNavToggle = document.querySelectorAll(".main-nav__item-icon");

for (i; i < subNavToggle.length; i++) {
  var navOperator = function subNavIn() {
    if (!subNavIn.classList.contains('main-nav__sub-menu--opened')) {
      subNavIn.classList.remove('main-nav__sub-menu--closed');
      subNavIn.classList.add('main-nav__sub-menu--opened');
    } else {
      subNavIn.classList.add('main-nav__sub-menu--closed');
      subNavIn.classList.remove('main-nav__sub-menu--opened');
    }
  };
navOperator.x = i;
navOperator.subNavIn = subNav[i];
subNavToggle[i].addEventListener('click', navOperator, false);
};

// var navOperator = function subNavIn() {
//   for (i; i < subNavToggle.length; i++) {
//     if (!subNavIn.classList.contains('main-nav__sub-menu--opened')) {
//       subNavIn.classList.remove('main-nav__sub-menu--closed');
//       subNavIn.classList.add('main-nav__sub-menu--opened');
//     } else {
//       subNavIn.classList.add('main-nav__sub-menu--closed');
//       subNavIn.classList.remove('main-nav__sub-menu--opened');
//     }
    
//   };
  
// };
// navOperator.x = i;
// navOperator.subNavIn = subNav[i];
// subNavToggle[i].addEventListener('click', navOperator, false);
//     for (var i = 0; i < subNavToggle.length; i++) {
//       var navOperator = function() {
//         var subNavIn = arguments.callee.subNavIn;
//         if (!subNavIn.classList.contains('main-nav__sub-menu--opened')) {
//           subNavIn.classList.remove('main-nav__sub-menu--closed');
//           subNavIn.classList.add('main-nav__sub-menu--opened');
//         } else {
//           subNavIn.classList.add('main-nav__sub-menu--closed');
//           subNavIn.classList.remove('main-nav__sub-menu--opened');
//         }
//       };
//       navOperator.x = i;
//       navOperator.subNavIn = subNav[i];
//       subNavToggle[i].addEventListener('click', navOperator, false);
// };