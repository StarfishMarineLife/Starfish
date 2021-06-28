var timeline_state = "hidden";

$(document).ready(function() {
	$('#collapse').click(function () {
  	if (timeline_state == "hidden") {
      timeline_state = "show";
    	$(this).text("Collapse");

      let toAnimate = $('.timeline').find(".hidden");
      toAnimate.addClass("transition");

    } else if (timeline_state == "show") {
      timeline_state = "hidden"
    	$(this).text("Show More");
      
			let toAnimate = $('.timeline').find(".hidden");
      toAnimate.removeClass("transition");
    }
  });
});