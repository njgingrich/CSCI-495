// ==UserScript==
// @name         CSCI 495 Assignment 2
// @namespace    http://www.github.com/njgingrich/CSCI-495
// @version      0.1
// @description  if you click on a developer w/ 's' in their name, it sets background color to pink. Otherwise removes it.
// @author       Nathan Gingrich
// @match        https://atomicobject.com/culture
// @copyright    2015+
// ==/UserScript==

$('li a').removeAttr('href');

$('li a').click(function(){
    var firstLetter = $('li a div.visible-hover span.employee-full-name').text();
    alert(firstLetter);
    if (firstLetter.charAt(0) == 'S') {
        $(this).css("background-color", "pink");
    }
});