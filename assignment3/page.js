$(document).ready(function(){
  $('#csci245').css('display', 'block');
  $('li').click(function(){
    var divId = $(this).children().attr('href');
    $(divId).css('display', 'block');
    $(divId).siblings().css('display', 'none');
    $(this).css('background-color', '#0c2340');
    $(this).siblings().css('background-color', '#e35205');
  });
});

