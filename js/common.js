
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	var mainContainer = $('#main-container');
	$('#side-bar-tabs a').on('click', function (event) {
		event.preventDefault();
		$(this).tab('show');
		var workTab = $('#hero-content-tabs a#work-tab');
		var personalTab = $('#hero-content-tabs a#personal-tab');
		if($(this).is('#work-tab')) {
			mainContainer.removeClass('black-theme');
			workTab.addClass('active');
			personalTab.removeClass('active');
		}
		else if($(this).is('#personal-tab')) {
			mainContainer.addClass('black-theme');
			personalTab.addClass('active');
			workTab.removeClass('active');
		}
	})
	$('#hero-content-tabs a').on('click', function (event) {
		event.preventDefault();
		$(this).tab('show');
		var workTab = $('#side-bar-tabs a#work-tab');
		var personalTab = $('#side-bar-tabs a#personal-tab');
		if($(this).is('#work-tab')) {
			mainContainer.removeClass('black-theme');
			workTab.addClass('active');
			personalTab.removeClass('active');
		}
		else if($(this).is('#personal-tab')) {
			mainContainer.addClass('black-theme');
			personalTab.addClass('active');
			workTab.removeClass('active');
		}
	})



});

$(document).ready(function () {

	// selects
	var formCheckInput = $('.form-check-input');

	var formBlockWrapper = ('.form-block-wrapper');
	var heroInputBlock = $(formBlockWrapper).find('.form-check-input.hero');

	heroInputBlock.click('change', function(e) {
		var parent = $(this).closest('.form-block-wrapper');
		var firstLineParent = $(this).closest('.form-block-wrapper.first-line');
		var heroInputFirstLine = firstLineParent.find('.form-check-input.hero').eq(0);
		var secondLine = firstLineParent.find('.form-block-wrapper.second-line');
		var heroInputSecondLine = secondLine.find('.form-check-input.hero');
		var totalNotCheck = heroInputSecondLine.not(':checked').length;
		var totalCheck = heroInputSecondLine.length;
		var elementsInput = parent.find('.form-check-input');

		if(heroInputSecondLine.is(e.target)) {
			if(totalNotCheck === 0) {
				console.log('not elements');
				console.log(heroInputFirstLine);
				heroInputFirstLine.prop('checked', true);
			}
			else if(totalNotCheck < totalCheck) {
				heroInputFirstLine.prop('checked', false);
			}
		}
		if($(this).is(':checked')){
			elementsInput.each(function (index, item) {
				$(item).prop('checked', true);
			})
		}else {
			elementsInput.each(function (index, item) {
				$(item).prop('checked', false);
			})
		}
	})
	formCheckInput.on('change', function () {
		var parentBlock = $(this).closest(formBlockWrapper);
		var firstLineParent = $(this).closest('.form-block-wrapper.first-line');
		var heroInputFirstLine = firstLineParent.find('.form-check-input.hero').eq(0);
		var secondLineParent = $(this).parents('.form-block-wrapper.second-line');
		var inputHeroSecondLine = secondLineParent.find('.form-check-input.hero');
		var allCheckSecondLine = firstLineParent.find('.form-check-input').not('.form-check-input.hero');

		var element = parentBlock.find(formCheckInput);
		var totalNotCheck = element.not(':checked').length;
		var totalCheck = element.length;

		var totalAllActiveCheck = allCheckSecondLine.not(':checked').length;

		if(totalNotCheck === 0) {
			console.log('not elements');
			inputHeroSecondLine.prop('checked', true);
			if (totalAllActiveCheck === 0) {
				heroInputFirstLine.prop('checked', true);
			}
		}else if (totalNotCheck < totalCheck || totalAllActiveCheck > 0) {
			inputHeroSecondLine.prop('checked', false);
			heroInputFirstLine.prop('checked', false);
		}

	})

})