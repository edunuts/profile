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
		password : {minlength : 6},
		mobile : {required:false, minlength: 10, maxlength: 10, digits : true},
		email : {
			remote : {
				url : 'signup/email-exists',
				type : 'post',
				data : {
					email : function() {
						return $('#email').val();
					}
				}
			}
		}
	},
	messages : {
		name : {
			required : 'What\'s your name?', 
			lettersonly : 'Your name can  only contain letters and spaces.'
		},
		email : {
			required : 'Please enter your email.',
			remote: $.validator.format("Sorry, it looks like {0} is already registered with us. Please use a different email.")
		},
		password : {
			minlength : 'Enter a combination of at least six numbers, letters and puntucation marks'
		},
		mobile : {
			required : 'Please enter your mobile number.',
			minlength : 'Please enter a valid 10 digit mobile number',
			maxlength : 'Please enter a valid 10 digit mobile number',
			digits : 'Please enter a valid mobile number.'
		}
	}
});