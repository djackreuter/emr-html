$(document).ready(function() {
  console.log('jQuery connected');

  // prepend div above headings
  setTimeout(function() {
    var $div = $('<div>', {id: 'jquery-div'});
    $div.text('this div was prepended with jQuery!');
    $('.headings').prepend($div);
  }, 2000);

  // change background color on mouse in
  $('.headings').mousemove(function() {
    var $headings = $('.headings');
    $headings.css('background-color','lightskyblue');
    $headings.mouseout(function() {
      $headings.css('background-color', 'lightblue');
    });
  });

  // set interval for toggling font
  setInterval(function() {
    $('.heading-text').toggleClass('toggledFont');
  }, 3000);

  // toggle Modal
  var $modal = $('#modal-toggle');
  $modal.click(function() {
    $('.info-form').toggleClass('toggledModal');
  });

  // increase font size
  $('#font-change').click(function() {
    var $currentFontSize = parseFloat($('#para').css('font-size'));
    $currentFontSize = $currentFontSize + 1 + 'px';
    $('#para').css('font-size', $currentFontSize);
  });





});
