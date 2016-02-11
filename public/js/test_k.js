$('#myfirst').validate({
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
		data1 : {lettersonly : true},
		data2 : {data2: true},
	},
	messages : {
		data1 : {
			required : 'Please enter data 1', 
			lettersonly : 'Your data can  only contain letters.'
		},
		data2 : {
			required : 'Please enter your number.',
		},
	}
});