// TODO Add requirejs
// var $ = require('jquery')
//   , _ = require('underscore');

var alerter = function(klass, bold) {
  return function(msg) {
    $('.alert:gt(1)').remove();
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

var randomQueryArgs = function(neighborhood, dollars) {
  args = [];
  if (neighborhood) args.push('neighborhood='+neighborhood);
  if (dollars) args.push('dollars='+dollars);
  return args.join('&');
};

// $('#randomize').click(function (e) {
//   e.preventDefault();

//   var neighborhood = $('#random-neighborhood').val()
//     , dollars = $('#random-cost').val()
//     , qargs = randomQueryArgs(neighborhood, dollars);

//   $.ajax('/api/random?' + qargs, {
//     success: function(data) {
//       if (data && data.eats && data.eats.length > 0) {
//         var eats = $('#eats').empty();
//         _.each(data.eats, function (eat) {
//           eats.append(
//             $('<div>').addClass('row-fluid').append(
//               $('<div>').addClass('span4').append(
//                 $('<h2>').html(eat.name),
//                 $('<p>').html('Neighborhood: ' + eat.neighborhood),
//                 $('<p>').html('Cost: ' + ['$','$$','$$$',][eat.dollars-1])
//               )
//             )
//           );
//         });
//       } else {
//         notify('No eats returned!');
//       }
//     },
//     error: function (xhr, text) { error('Error contacting server!'); }
//   });

//   return false;
// });

$('#add-eat').click(function (e) {
  e.preventDefault();

  var name = $('#new-name').val()
    , neighborhood = $('#new-neighborhood').val()
    , dollars = $('#new-cost').val();

  if (!neighborhood || !name || !dollars) {
    error('Fill in all fields.');
    return false;
  }

  $.ajax('/api/add', {
    data: {
        name: name
      , neighborhood: neighborhood
      , dollars: dollars
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