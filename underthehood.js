jQuery(document).ready( function(){
  jQuery('#gotcha-button').click( function(event){
    jQuery('form').attr("action", "admin/gotcha");
  });
});