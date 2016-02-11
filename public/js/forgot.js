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
	},
	messages : {
		email : {
			required : 'Please enter your email.', 
		}
	}
});