/* cec-search.js 

*/

//for flat page demo - set value that would normally be passed server-side:
cec_obj = { 'site_url':'http://localhost:3000'};

var site_url = cec_obj.site_url; 
console.log ('cec_obj.site_url == ' + cec_obj.site_url );

//search
//<div class='wpb_wrapper'><p><form role="search" method="get" id="searchform" class="searchform" name="CUNY_search_form" action="//events.cuny.edu/">
var searchForm = document.querySelector('#searchform').addEventListener('click', function (event) { 
    event.preventDefault();
});


document.querySelector('.colleges-select').addEventListener('change', function(e) {
    var ele = e.target;
     console.log(e.target);
     window.location = ele.options[ele.selectedIndex].value;
});

document.querySelector('form.searchform input').addEventListener('click keydown', CUNY_event_search_submit );



function CUNY_event_search_submit(e) {
    console.log('hi');
    var base_url = cec_obj.site_url; 

    var search_val = document.CUNY_search_form.cesearch.value;
    if ( e.keyCode != 13 && e.type != 'click'  ){  //&& e.type != 'click'
        return e.key; 
    }
    else {
        var val = search_val.replace(/[^\w\s]/gi, '');
        //for demo, post to the live server to verify that form post is working
        postTarget = 'http://events.cuny.edu/';
        //postTarget = site_url;
        document.CUNY_search_form.action = site_url + 'cesearch/' + val;
        document.location = base_url + 'cesearch/' + val;  
      }
    return false;
  }










  /*
  <form role="search" method="get" id="searchform" class="searchform" name="CUNY_search_form" action="//events.cuny.edu/">
						<div>
							<label class="screen-reader-text" for="s">Search for:</label>
							<input type="text" onkeypress="return CUNY_event_search_submit(event);" value="" name="cesearch" id="cesearch" />
							<input type="button" id="searchsubmit" value="Search" onclick="CUNY_event_search_submit(event);" />
						</div>
                    </form>
 */

/** OLD JQuery code */
/*
jQuery(document).ready(function($){
    console.log ('cec_obj.site_url = ' + cec_obj.site_url );
    jQuery( "#searchform" ).submit(function( event ) {
           event.preventDefault();
    });
    
    //college drop-down in mobile view
    jQuery(".colleges-select").hide();  
    jQuery(".colleges-list").hide();  
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
*/
/*
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
  */