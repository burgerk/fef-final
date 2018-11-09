
jQuery(document).ready(function($){
    console.log ('cec_obj.site_url = ' + cec_obj.site_url );
    jQuery( "#searchform" ).submit(function( event ) {
           event.preventDefault();
    });
    
    //college drop-down in mobile view
    jQuery(".colleges-select").hide();  
    jQuery(".c-and-s-select").hide();  
    jQuery(".colleges-select").change(function() {
      var wid = jQuery(window).width();
    console.log(wid);
    if (wid < 780) {  
      window.location = jQuery(this).find("option:selected").val();
	}
	else {
		jQuery(this).hide();   
	}   
    });
    
});

function CUNY_event_search_submit(e) {

    var base_url = cec_obj.site_url; 

    var search_val = document.CUNY_search_form.cesearch.value;
    if ( e.keyCode != 13 && e.type != 'click'  ){  //&& e.type != 'click'
        return e.key; 
    }else {
        var val = search_val.replace(/[^\w\s]/gi, '');
        var base_url = document.CUNY_search_form.action
        document.CUNY_search_form.action = base_url + 'cesearch/' + val;
        document.location = base_url + 'cesearch/' + val;  
      }
    return false;
  }