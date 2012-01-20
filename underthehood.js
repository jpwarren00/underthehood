$(document).ready( function(){
  $('#gotcha-button').click( function(event){
    $('form').attr("action", "admin/gotcha");
  });
});