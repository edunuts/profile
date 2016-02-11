$('#password-form').validate({
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
		pwd : {required : true},
		newpwd : {required : true, minlength : 6},
		renewpwd : {required : true,  minlength : 6, equalTo: '#newpwd'},
	},
	messages : {
		pwd : {
			required : 'Please enter your old password to make sure that you are the right person to change the password.', 
			minlength : 'Did you forgot? Your password was longer than 6 characters.'
		},
		newpwd : {
			required : 'Please enter your new password.',
		},
		renewpwd : {
			required : "Please re-enter your new password.",
			equalTo : "You must enter the same password again."
		}
	}
});