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
			$(this).html('<div class="tasksDetailsBox">' + '<p class="tasksName">' + 'Pick up groceriesWWWWWWWW' + '</p>' + '<p class="tasksDate">' + 'Date' + '</p>' + '</div>');
		}
		//this is for if it is 0 and needs to have a status bar.
		else { //right here, just put in a variable for the title. Not groceries.
			$(this).html('<div class="tasksDetailsBox" style="padding-left: 8px; border-left: 4px solid ' + theTabColor + '">' + '<p class="tasksName">' + 'Pick up groceries' + '</p>' + '<p class="tasksDate">' + '01/08/2018' + '</p>' + '</div>');
		}
	});
	$('.overdueBox').html('<div class="overdueText">' + 'You have ' + '<span class="bigNum">' + overdue + '</span>' + ' OVERDUE TASKS </div>');
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
	$('.navPanel').each(function() {
		var thePage = $(this)[0].dataset.page;
		var theTab = $(this).find('.' + thePage);
		$(theTab).css('background-color', "#d9e9f5");
	});
	$('.tasksName').each(function() {
		var titleText = $(this).html();
		var newTitle = titleText.slice(0, -4);
		var titleLength = $(this)[0].clientWidth;
		if (titleLength >= 246) {
			console.log($(this))
			$(this)[0].innerHTML = newTitle + '...';
		}
	});
	$('#link').click(function() {
		$("#ex1").modal({
			fadeDuration: 100
		});
		$('#ex1').append('<a class="doneBtn">Done</a><div class="popNameBox" data-record="">' + '<h2 class="popNameLabel">Name:</h2>' + '<div class="popTitle" contenteditable="true"> Name Here' + '</div>' + '</div>' + '<div class="dateBox">' + '<h2 class="popDateLabel">Date:</h2>' + '<input class="popDate">' + '</input>' + '</div>' + '<div class="pinnedBox">' + '<h2 class="popPinnedLabel"> Pinned:</h2>' + '<div class="popPinned">' + '<select> <option value="no">No</option> <option value="yes">Yes</option></select>' + '</div>' + '</div>' + '<div class="repeatBox">' + '<h2 class="popRepeatLabel"> Repeat:</h2>' + '<div class="popRepeat">' + '<select> <option value="no">No</option> <option value="yes">Yes</option></select>' + '</div>' + '</div>' + '<div class="endRepeatBox">' + '<h2 class="popEndRepeatLabel"> End Repeat:</h2>' + '<div class="popEndRepeat">' + '<select> <option value="no">No</option> <option value="yes">Yes</option></select>' + '</div>' + '</div>' + '<div class="multiBox">' + '<h2 class="popShareLabel"> Share:</h2>' + '<div class="shareText">Test </div>' + '<h2 class="popAlertLabel"> Alert:</h2>' + '<div class="alertText"> Every Friday</div>' + '</div>' + '</div>'
			//+ '<div class="notesBox">' + '<h2 class="popNotesLabel"> Notes:</h2>' + '<div class="popNotes">' + taskShort + '</div>' + '</div>'
		);
		$('.popDate').dcalendarpicker();
	});
	$('.tasksDetailsBox').click(function() {
		var taskModal = $("#ex2").modal();
		var taskBuild = $(this).closest('.task')[0].outerHTML;
		//console.log();
		$("#ex2").modal({
			fadeDuration: 100
		});
		$('#ex2').html(taskBuild);
		//$('#ex2').find('.slider').remove();
		$('#ex2').find('.tasksName')[0].innerText;
		var borderColor = 'solid 4px ' + $('#ex2').find('.tasksDetailsBox')[0].style.borderLeftColor;
		var status = $('#ex2').find('.tasksDetailsBox')[0].style.borderLeftColor;
		console.log(borderColor);
		$('#ex2').css('border', borderColor);
		console.log($('#ex2')[0].offsetWidth);
		var borderAdd = $('#ex2').find('.task');
		var taskTitle = $('#ex2').find('.tasksName')[0].innerText;
		var taskDate = $('#ex2').find('.tasksDate')[0].innerText;
		var recordId = "task attribute before removed";
		var taskNotes = "Dummy Text for display.";
		var taskShort = "Dummy T..";
		var createDate = "The date it was made";
		$('#ex2').append('<h1 class="detailTaskText" style="color:' + status + ';">Task Detail</h1>' + '<a class="doneBtn">Done</a><div class="popNameBox" data-record="">' + '<h2 class="popNameLabel">Task</h2>' + '<div class="popTitle" contenteditable="true">' + taskTitle + '</div>' + '</div>' + '<div class="calendarPopup"> <div id="calendar-popup"></div> </div>' + '<div class="dateBox">' + '<h2 class="popDateLabel">Due Date</h2>' + '<input class="popDate">' + '</input>' + '</div>' + '<div class="statusBox">' + '<h2 class="popStatusLabel"> Status:</h2>' + '<div class="popStatus">' + '</div>' + '</div>' + '<div class="pinnedBox">' + '<h2 class="popPinnedLabel"> Pin To Dashboard</h2>' + '<div class="popPinned">' + '<select> <option value="no">No</option> <option value="yes">Yes</option></select>' + '</div>' + '</div>' + '<div class="repeatBox">' + '<h2 class="popRepeatLabel"> Repeat</h2>' + '<div class="popRepeat">' + '<select> <option value="no">No</option> <option value="daily">Daily</option> <option value="weekly">Weekly</option><option value="monthly">Monthly</option><option value="yearly">Yearly</option></select>' + '</div>' + '</div>' + '<div class="endRepeatBox">' + '<h2 class="popEndRepeatLabel"> End Repeat</h2>' + '<div class="popEndRepeat">' + '<input class="endRepeatDate">' + '</input>' + '</div>' + '</div>' + '<div class="createDateBox">' + '<h2 class="popCreateLabel"> Created On</h2>' + '<div class="createText">' + createDate + '</div>' + '</div>' + '<div class="shareBox">' + '<h2 class="popShareLabel"> Share</h2>' + '<div class="shareText">Test </div>' + '</div>' + '<div class="alertBox">' + '<h2 class="popAlertLabel"> Alert</h2>' + '<div class="alertText"> Every Friday</div>' + '<input class="alertDate">' + '</input>' + '</div>' + '<div class="sTaskBox">' + '<h2 class="popSTaskLabel">(+) Subtasks</h2>' + '<div class="sTaskText">' + 'You have 0 subtasks.' + '</div>' + '</div>' + '<div class="additionalBox">' + '<h2 class="popAdditionalLabel">Additional Info</h2>' + '</div>' + '<div class="memoBox">' + '<h2 class="popMemoLabel">(+) Memo</h2>' + '<div class="memoText">' + 'The Memo text.' + '</div>' + '</div>' + '<div class="contactBox">' + '<h2 class="popContactLabel">(+) Contact</h2>' + '<div class="contactText">' + 'Your Contacts.' + '</div>' + '</div>' + '<div class="eventBox">' + '<h2 class="popEventLabel">(+) Events</h2>' + '<div class="eventText">' + 'This task has 0 events.' + '</div>' + '</div>' + '<div class="notesBox">' + '<h2 class="popNotesLabel">(+) Notes</h2>' + '<div class="popNotes">' + taskShort + '</div>' + '</div>' + '<div class="projectBox">' + '<h2 class="popProjectLabel">(+) Projects</h2>' + '<div class="projectText">' + 'This task has 0 projects.' + '</div>' + '</div>' + '<div class="imageBox">' + '<h2 class="popImageLabel">(+) Image</h2>' + '<div class="imageText">' + 'This task has 0 images.' + '</div>' + '</div>');
		$('.popDate').val($('#ex2').find('.tasksDate')[0].innerText);
		$('#calendar-popup').dcalendar();
		$('#ex2').find('.calendar-head-card').css('background-color', status);
		//Set the value of recordId, to another variable, that has the value of the task div record, before the task div is removed.
		$('.popNameBox').attr("data-record", recordId);
		$('#ex2').find('.sliderBox').appendTo('.popStatus');
		$('.popStatus').find('.sliderBox').addClass('popSlider');
		$('#ex2').find('.task').remove();
		$('.doneBtn').click(function() {
			var newName = $('#ex2').find('.popTitle')[0].innerText;
			var newDate = $('#ex2').find('.popDate')[0].innerText;
			var newNotes = $('#ex2').find('.popNotes')[0].innerText;
			console.log(newName, newDate, newNotes);
			// On click of done button set values to new values.
		});
		$('#calendar-popup').dcalendarpicker({
			format: 'mm-dd-yyyy'
		}).on('datechanged', function(e) {
			var d = e.date;
			selectedDate = moment(d, 'MM-DD-YYYY');
			var theDate = selectedDate._i;
			$('.popDate').val(theDate);
			var weekdayLongform = selectedDate.format("dddd, MMMM");
			var dateLongform = selectedDate.format(" D");
			var yearLongform = selectedDate.format(" YYYY");
			$('#dashboardSelectedWeekdayAndMonth').html(weekdayLongform);
			$('#dashboardSelectedDate').html(dateLongform);
			$('#dashboardSelectedComma').html(",");
			$('#dashboardSelectedYear').html(yearLongform);
			$('.navDateText').html(weekdayLongform);
		});
	});
	$('.popNotes').click(function() {
		prompt('Enter Task Notes:', taskNotes);
		var notesAnswer = prompt('Enter Task Notes:', taskNotes);
		taskNotes = notesAnswer;
	});
});
