Event.observe(window, 'load', function() {
  $A($(document.body).descendants()).each(function(e){
    var pos = Element.getStyle(e, 'position');
    if(pos == 'absolute' || pos == 'fixed') {
     var top = parseFloat(Element.getStyle(e, 'top') || 0);
     e.style.top = (top + 50) + 'px'; 
    }
  })
  new Insertion.Top(document.body, "<div id='tuneup'><h1>FiveRuns TuneUp</h1><div id='tuneup-content'></div></div><div id='tuneup-flash'></div>");
  new Ajax.Request('/tuneup?uri=' + encodeURIComponent(document.location.href), {asynchronous:true, evalScripts:true});
});

TuneUp.switchSchema = function(table) {
  var element = $('tuneup-schema-table-' + table);
  var operation = element.visible() ? 'hide' : 'show';
  $$('#tuneup-schema .tuneup-schema-table').each(function(s) { s.hide(); })
  element[operation]();
  Position.clone('tuneup-details', 'tuneup-schema', { setLeft: false, setTop: true, setWidth: false, setHeight: true });
  var h = parseFloat(Element.getStyle('tuneup-schema', 'height'));
  $('tuneup-schema').style.height = h - 18 + 'px';
  $('tuneup-schema')[operation]();
}