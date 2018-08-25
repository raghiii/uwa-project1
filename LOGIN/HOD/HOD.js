$(function() {
    $('#contact').click(function() {
      $('#form').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("form");
  
      if (!container.is(e.target) 
          && container.has(e.target).length === 0)
      {
          container.fadeOut();
      }
    });
    
  });