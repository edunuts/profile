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
		email : {required : true, email: true},
		pwd : {required : true, minlength : 6},
		repwd : {required : true, minlength : 6, equalTo: '#pwd'}
	},
	messages : {
		email : {
			required : 'Please enter your email.'
		},
		pwd : {
			required : "Please enter your new password."
		},
		repwd : {
			required : "Please re-enter your new password.",
			equalTo : "You must enter the same password again."
		}
	}
});