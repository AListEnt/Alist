$(document).ready(function() {
	var removeThese = [];
	var overdueTasks = ["lllll", "lll"];
	var overdue = overdueTasks.length;
	// This goes through each task details and helps decide if it needs a status bar or not.
	$('.tasksDetails').each(function() {
		var theTab = $(this);
		var amount = $(this)[0].dataset.complex;
		var theTabSlide = theTab[0].nextElementSibling;
		var theTabRule = $(theTabSlide).find('.slider');
		var theTabColor = ($(theTabRule).css("background-color"));
		console.log(theTabColor);
		// The complex attribute is what contains the amount of subtasks an item has. If it more than 0, this takes away the status bar, and line 55 is where it adds the grey circle.
		if (amount > 0) {
			$(this).html('<div class="tasksDetailsBox">' + '<p class="tasksName">' + 'Pick up groceries' + '</p>' + '<p class="tasksDate">' + 'Date' + '</p>' + '<span class="arrow">' + '<i class="fa fa-angle-right" aria-hidden="true"></i>' + '</span>' + '</div>');
		}
		//this is for if it is 0 and needs to have a status bar.
		else { //right here, just put in a variable for the title. Not groceries.
			$(this).html('<div class="tasksDetailsBox" style="padding-left: 8px; border-left: 4px solid ' + theTabColor + '">' + '<p class="tasksName">' + 'Pick up groceries' + '</p>' + '<p class="tasksDate">' + 'Date' + '</p>' + '<span class="arrow">' + '<i class="fa fa-angle-right" aria-hidden="true"></i>' + '</span>' + '</div>');
		}
	});
	$('.overdueBox').html('<p class="overdueText">' + 'You have ' + '<span class="bigNum">' + overdue + '</span>' + ' OVERDUE TASKS </p>');
	if (overdue == 0) {
		$('.overdueBox').remove();
	}
	$('span[data-date]').each(function() {
		// Eventually change to if data-date seconds since 1970 is less than todays amount since 1970, its overdue.
		if ($(this).attr('data-date') == "date1") {
			$(this).css('background-color', "#ce0b24");
		}
	});
	$('.switch').click(function() {
		if ($('.slide').prop('checked') == false) {
			$('.switch').css("pointer-events", "none");
			$(this).children('.slider').css('background-color', "#2d88c7");
			$(this).closest('.task').fadeOut(1200, function() {
				$(this).closest('.task').remove();
			});
			// Prevents spam clicking tasks
			setTimeout(function() {
				$('.switch').css("pointer-events", "auto");
			}, 1000);
		}
	});
	//This goes theough each task and if it has more than 0 subtasks it adds the circle with the number.
	$('.task').each(function() {
		var amount = $(this)[0].dataset.complex;
		if (amount > 0) {
			$(this).prepend('<div class="complexBox upBox">' + '<p class="complexText">' + amount + '</p>' + '<i class="fa fa-angle-down">' + '</i>' + '</div>');
		}
	});
	$('.complexBox').click(function() {
		var boxParents = $(this).parent();
		var amount = $(boxParents)[0].dataset.complex;
		$(this).toggleClass('blueBg');
	});
});
