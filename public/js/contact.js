$('#form').validate({
	onfocusout: false,
	onkeyup: false,
	showErrors : function(errorMap, errorList) {
		if(errorList.length) {
			customAlert(errorList[0]['message']);
		} else {
			hideCustomAlert();
		}
	},
	rules : {
		name : {lettersonly : true},
		email : {email: true},
		mobile : {minlength: 10, maxlength: 10, digits : true},
		message : {required : true, minlength: 50}
	},
	messages : {
		name : {
			required : 'What\'s your name?', 
			lettersonly : 'Your name can  only contain letters and spaces.'
		},
		email : {
			required : 'Please enter your email.',
		},
		mobile : {
			required : 'Please enter your mobile number.',
			minlength : 'Please enter a valid 10 digit mobile number',
			maxlength : 'Please enter a valid 10 digit mobile number',
			digits : 'Please enter a valid mobile number.'
		},
		message : {
			required : 'Please enter your message/feedback',
			minlength : 'Your message must contain atleast 50 characters, so that we can understand your feedback.'
		}
	}
});