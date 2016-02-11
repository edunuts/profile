$('#photo').on('change', function() {
	var input = this;
	var name = input.files[0].name;
	var ext = name.substring(name.lastIndexOf('.')+1).toLowerCase();
	var isInArray = $.inArray(ext, ['jpg', 'png']);
	if(isInArray == -1) {
		customAlert('You can only upload either a JPG or PNG file.');
		return false;
	} else {
		customAlert('You look pretty nice, you can select a cool username and proceed now.', 's');
	}
	if(input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			$("#signup-pic").attr('style', 'background-image:url(' + e.target.result + ')');
		}
		reader.readAsDataURL(input.files[0]);
	}
});
$('#form').validate({
	onfocusout: false,
	onkeyup: false,
	showErrors : function(errorMap, errorList) {
		if(errorList.length) {
			$('.username-input-wrap').removeClass('ok').addClass('cancel');
			customAlert(errorList[0]['message']);
		} else {
			$('.username-input-wrap').removeClass('cancel').addClass('ok');
			hideCustomAlert();
		}
	},
	rules : {
		username : {
			alphanumeric : true,
			remote : {
				url : 'username/isUsernameAvailable',
				type : 'post',
				data : {
					username : function() {
						return $('#username').val();
					}
				}
			}
		}
	},
	messages : {
		username : {
			required : 'Please enter a cool username so that we can create your profile.', 
			remote : $.validator.format('Sorry, it looks like {0} is already taken. Please use a different username.')
		},
	}
});