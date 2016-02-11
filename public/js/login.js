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
		username : {required : true},
		password : {required : true},
	},
	messages : {
		username : {
			required : 'Please enter your username, You can login using any email or username associated with your account.', 
		},
		password : {
			required : 'Please enter your password.',
		},
	}
});