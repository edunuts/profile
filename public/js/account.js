(function() {
	var messages = {
		'editUsername' : 'Sorry, it looks like this username is already taken. Please use a different username.',
		'editMobile' : 'Please enter a valid 10 digit mobile number.',
		'editTwitter' : 'A vaild twitter name can only contains alphabets, numbers and underscore.',
		'editAbout' : 'Your bio can only contain 256 letters.'
	};
	var specialCase = {
		'editTwitter' : 'Your twitter handle has been removed.',
		'editLocation' : 'Your location has been removed.',
		'editAbout' : 'Your about details have been removed.'
	}
	var requiredMsg = {
		'editName' : 'You must enter your first name.',
		'editUsername' : 'Your username can\'t be blank'
	}

	$(".profile-edit-wrapper form").on('submit', function(e) {
		e.preventDefault();
		var $form = $(this),
			action = $form.attr('action'),
			formRef = $form.data('ref'),
			btn = $form.find('.profile-edit-btn');
		btn.attr('disabled', true);
		$.post(action, $form.serialize(), function(data, textStatus, xhr) {
			if(data == '') {
				customAlert(requiredMsg[formRef]);
				return;
			}
			if(data == '0') {
				customAlert(messages[formRef]);
			} else {
				closeAll();
			}
			if(data.trim() != '-1') {
				$form.find('.static-content strong').text(data);
			} else {
				if(specialCase[formRef] != undefined) {
					$form.find('.static-content').html('<strong>' + specialCase[formRef] + '</strong>');
				}
			}
		}).complete(function() {
			btn.attr('disabled', false);
		});
	});

	$(".profile-edit-btn").on('click', function(e) {
		hideCustomAlert();
		var self = $(this),
			$form = self.parents('form'),
			type = self.attr('type');
		var parent = self.parent().parent();
		if(type == 'button') {
			e.preventDefault();
			closeAll();
			parent.find('.static-content').slideUp();
			parent.find('.edit-form').slideDown();
			parent.addClass('active');
			self.text('Save').attr('type', 'submit').data('mode', 'save').parent().addClass('edit-mode');
		}
	});

	function closeAll() {
		var el = $('.profile-edit-wrapper .row');
		el.removeClass('active').find('.edit-mode').removeClass('edit-mode').children('.profile-edit-btn').text('Edit').attr('type', 'button').removeAttr('disabled');
		el.find('.edit-form').slideUp();
		el.find('.static-content').slideDown();
	};

	$('#account-visibility-btn').on('click', function(e) {
		var self = $(this);
		var status = self.data('status');
		$.post('saveAccount/visibility', { status : status }, function(data, textStatus, xhr) {
			var class_remove = (status == '1') ? 'unlock-green' : 'lock-yellow';
			var class_add = (status == '1') ? 'lock-yellow' : 'unlock-green';
			var current_text = (status == '1') ? 'PRIVATE' : 'PUBLIC';
			var new_text = (status == '1') ? 'PUBLIC' : 'PRIVATE';
			var newStatus = (status == 1) ? 0 : 1;
			$('#current-status').text(current_text);
			$('#new-status').text(new_text);
			self.data('status', newStatus);
			self.removeClass(class_remove).addClass(class_add).addClass('animated bounceIn');
			window.setTimeout(function(){
				self.removeClass('animated bounceIn');
			},1000)
		});
		e.preventDefault();
	});
})();