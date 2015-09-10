// ==UserScript==
// @name         CSCI 495 Assignment 2
// @namespace    http://www.github.com/njgingrich/CSCI-495
// @version      0.1
// @description  if you click on a developer w/ 's' in their name, it sets background color to pink. Otherwise removes it.
// @author       Nathan Gingrich
// @match        https://atomicobject.com/culture
// @copyright    2015+
// ==/UserScript==

$('li.development a').on('click', function() {
    $(this).removeAttr('href');
});

$('.development .employee-full-name:contains("s")').on('click', function(el) {
    $(el).closest('a').css('background-color', 'pink'); 
});

$('.development .employee-full-name:not(:contains("s"))').on('click', function(el) {
    $(el).closest('li').hide();
});