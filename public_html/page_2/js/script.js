$(document).ready(function() {
  console.log('jQuery connected');

  // prepend div above headings
  setTimeout(function() {
    var $div = $('<div>', {
      id: 'jquery-div'
    });
    $div.text('this div was prepended with jQuery!');
    $('.headings').prepend($div);
  }, 2000);

  // change background color on mouse in
  $('.headings').mousemove(function() {
    var $headings = $('.headings');
    $headings.css('background-color', 'lightskyblue');
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

  // append button after heading
  setTimeout(function() {
    var $button = $('<button>', {
      id: 'jquery-button'
    });
    $button.text('Appended with jQuery! Click to remove');
    $('.headings').append($button);
    $('#jquery-button').click(function() {
      $('#jquery-button').remove();
    });
  }, 2000);

  // change text content
  $('#text-content').click(function() {
    $('#text-content').text('jQuery changed this content!');
  });

  // hide EPL table
  $('#table').click(function() {
    $('#table').hide();
  });

  // show image
  $('#img-button').click(function() {
    $('#img').css('visibility', 'visible');
  });

  // sports form
  $('#submit').click(function() {
    var $soccer = $('#soccer');
    var $basketball = $('#basketball');
    var $football = $('#football');
    switch (true) {
      case $soccer.prop('checked') && !$basketball.prop('checked') && !$football.prop('checked'):
        alert('You chose soccer!');
        break;
      case $basketball.prop('checked') && !$soccer.prop('checked') && !$football.prop('checked'):
        alert('You chose basketball!');
        break;
      case $football.prop('checked') && !$soccer.prop('checked') && !$basketball.prop('checked'):
        alert('You chose football!');
        break;
      case $soccer.prop('checked') && $basketball.prop('checked') && !$football.prop('checked'):
        alert('you chose soccer and basketball!');
        break;
      case $soccer.prop('checked') && $football.prop('checked') && !$basketball.prop('checked'):
        alert('you chose soccer and football!');
        break;
      case $basketball.prop('checked') && $football.prop('checked') && !$soccer.prop('checked'):
        alert('you chose basketball and football!');
        break;
      case $football.prop('checked') && $soccer.prop('checked') && $basketball.prop('checked'):
        alert('you like it all!');
        break;
      default:
        alert('please choose one or more sports');
    }
  });

  // Dark Theme
  $('#select-menu').change(function() {
    var $theme = $(this).find(":selected").val();
    if ($theme === 'dark') {
      $('.body').toggleClass('dark-body');
      $('.header, .footer').toggleClass('dark-nav-footer');
      $('.dark-theme').toggleClass('dark-nav-headings');
      $('.headings').toggleClass('dark-heading');
      $('.headings').mousemove(function() {
        $(this).css('background-color', 'darkslateblue');
        $(this).mouseout(function() {
          $(this).css('background-color', 'mediumslateblue');
        });
      });
    }
  });

  // Change Font
  $('#font-select').change(function() {
    var $font = $(this).find(":selected").val();
    var $setFont = $('*');
    if ($font === 'times') {
      $setFont.css('font-family', 'times');
    }
    if ($font === 'tahoma') {
      $setFont.css('font-family', 'tahoma');
    }
    if ($font === 'arial') {
      $setFont.css('font-family', 'arial');
    }
    if ($font === 'verdana') {
      $setFont.css('font-family', 'verdana');
    }
  });

  // Bacon API
  $('#bacon').click(function() {
    $.ajax({
      url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text',
      success: function(result) {
        $('.bacon-here').text(result);
      }
    });
  });

  // Yahoo Weather API
  $('#weather').click(function() {
    $.ajax({
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Santa%20Fe%2C%20nm%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      dataType: 'json',
      success: function(result) {
        $('#forcast-location').text(result.query.results.channel.description);
        $('#forcast-high').text(result.query.results.channel.item.forecast[0].high);
        $('#forcast-text').text(result.query.results.channel.item.forecast[0].text);
      }
    });
  });

  $('#submit-calc').click(function() {
    var $input1 = parseInt($('#val-1').val());
    var $input2 = parseInt($('#val-2').val());
    if (isNaN($input1) || isNaN($input2)) {
      $('#result').val('Both inputs must be numbers');
    } else {
      $('#result').val($input1 + $input2);
    }
  });

});
