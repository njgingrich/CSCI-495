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
    var initials = $(this).find('span.initials').text();
    if (initials.indexOf("S") > -1 || initials.indexOf("s") > -1) {
        $(this).css("background-color", "pink");
    } else {
        $(this).remove();
    }
});