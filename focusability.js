
/**
 * A utility for visualizing focusable elements on the page
 * http://cl.ly/aG4u
 *
*/

function drawFocusableBoxes() {
  $(':focusable').css({border: '2px solid red'});
}

function addFocusableTag() {
  $(':focusable').map(function(index,v) {
    var offset = $(v).offset();

    var $count = $('<span class="focusability-marker">').text(index).offset(offset).css({
      border: '2px solid red',
      background: 'red',
      color: 'white',
      width: '40px',
      height: '20px',
      'border-radius': '5px',
      'text-align': 'center',
      'line-height': '20px',
      position: 'absolute',
      top: offset.top,
      left: offset.left - 10,
      'z-index': 10000
    });

    $count.appendTo($('body'));
  });
}

function showFocusablity() {
    if (!has('dev')) {
        return;
    }

    drawFocusableBoxes();
    addFocusableTag();

    $( ":focusable" ).on('focus.focusability', function(e) {
      console.log('focused', $(e.target));
      drawFocusableBoxes()
      $(e.target).css('border', 'solid 2px blue')
    })
}

function hideFocusablity() {
    if (!has('dev')) {
        return;
    }

    $('.focusability-marker').remove();
    $(':focusable').css('border', 'none');
    $(':focusable').off('.focusability');
}

