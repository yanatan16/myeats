// TODO Add requirejs
// var $ = require('jquery')
//   , _ = require('underscore');

var alerter = function(klass, bold) {
  return function(msg) {
    $('#wrapper').prepend(
      $('<div>').addClass('alert ' + klass).append(
        $('<b>').html(bold), 
        '&nbsp;&nbsp;',
        msg,
        $('<button>').attr('href','#').addClass('close').attr('data-dismiss', 'alert').html('&times;')
      )
    );
  };
};

var error = alerter('alert-error', 'Houston, we have a problem.');
var success = alerter('alert-success', 'All Systems Go!');
var notify = alerter('', 'Yo!');

$('#randomize').click(function (e) {
  e.preventDefault();

  $.ajax('/api/random', {
    success: function(data) {
      if (data && data.eats && data.eats.length > 0) {
        var eats = $('#eats').empty();
        _.each(data.eats, function (eat) {
          eats.append(
            $('<div>').addClass('row-fluid').append(
              $('<div>').addClass('span4').append(
                $('<h2>').html(eat.name),
                $('<p>').html('Neighborhood: ' + eat.neighborhood)
              )
            )
          );
        });
      } else {
        notify('No eats returned!');
      }
    },
    error: function (xhr, text) { error('Error contacting server!'); }
  });

  return false;
});

$('#add-eat').click(function (e) {
  e.preventDefault();

  var name = $('#new-name').val()
    , neighborhood = $('#new-neighborhood').val();

  $.ajax('/api/add', {
    data: {
        name: name
      , neighborhood: neighborhood
    },
    type: 'POST',
    error: function (xhr, text) { error('Error contacting server!'); },
    success: function (data) {
      if (data.success) {
        success('Added ' + name + ' as id ' + data.id);  
      } else {
        error(data.error);
      }
    }
  });

  return false;
});