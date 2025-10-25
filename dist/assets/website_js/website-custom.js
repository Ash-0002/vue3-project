
$(document).ready(function(){
  $(".testimonial-carousel .owl-carousel").owlCarousel({

    loop:true,
    margin:0,
	autoplay:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });


  $("#testimonials_section .our-testimonial-carousel .owl-carousel").owlCarousel({

    loop:true,
    margin:0,
	autoplay:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });


$("#home_slider .owl-carousel").owlCarousel({

loop:true,
margin:0,
autoplay:true,
smartSpeed:1000,
//autoplayHoverPause: false,
//autoplayTimeout: 3000,
nav:false,
dots:true,
responsive:{
	0:{
		items:1
	},
	900:{
		items:1
	},
	1000:{
		items:1
	}
}
});


});


// Captcha Script

function checkform(theform){
var why = "";

if(theform.CaptchaInput2.value == ""){
why += "- Please Enter CAPTCHA Code.\n";
}
if(theform.CaptchaInput2.value != ""){
if(ValidCaptcha2(theform.CaptchaInput2.value) == false){
why += "- The CAPTCHA Code Does Not Match.\n";
}
}
if(why != ""){
alert(why);
return false;
}
}

var a = Math.ceil(Math.random() * 9)+ '';
var b = Math.ceil(Math.random() * 9)+ '';
var c = Math.ceil(Math.random() * 9)+ '';
var d = Math.ceil(Math.random() * 9)+ '';
var e = Math.ceil(Math.random() * 9)+ '';

var code = a + b + c + d + e;
document.getElementById("txtCaptcha2").value = code;
document.getElementById("CaptchaDiv2").innerHTML = code;

// Validate input against the generated number
function ValidCaptcha2(){
var str1 = removeSpaces(document.getElementById('txtCaptcha2').value);
var str2 = removeSpaces(document.getElementById('CaptchaInput2').value);
if (str1 == str2){
return true;
}else{
return false;
}
}

// Remove the spaces from the entered and generated code
function removeSpaces(string){
return string.split(' ').join('');
}


            function check_my_request_form() {
                $("#error_message").html("");
                jQuery.validator.addMethod("email_custome", function (value, element) {
                if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
                    return true;
                } else {
                    return false;
                }
            }, "wrong nic number");
			jQuery.validator.addMethod("validatePhoneNumber", function (value, element) {
					if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
						return true;
					} else {
						return false;
					}
				}, "wrong phone number");
				jQuery.validator.addMethod("check_html", function (value, element) {
					if (/^[a-zA-Z0-9_-\s+/.,]+$/.test(value)) {
					  return true;
					} else {
					  return false;
					}
				  }, "Please enter text without html or tag");
                $("#requestdemo").validate({
                    rules: {
                        last_name: {
                            required: true,
							check_html: true
                        },
                        email: {
                            required: true,
                            email: true,
                            email_custome: true
                        },
                        mobile: {
                            required: true,
							validatePhoneNumber : true
                        },
						"00N6g00000VB6hI": {
							required: true,
							check_html: true
						  },
                        description: {
                            required: true,
							check_html: true
                        },
						CaptchaInput2: {
                            required: true,
                        },
                    },
                    messages: {
                        last_name: {
                            required: "Please enter name.",
                        },
                        email: {
                            required: "Please enter email.",
                            email: "Email should be in proper format.",
                            email_custome: "Email should be in proper format."
                        },
                        mobile: {
                            required: "Please enter mobile.",
							validatePhoneNumber : "Please enter valid number."
                        },
						"00N6g00000VB6hI": {
							required: "Please enter Subject.",
						  },
                        description: {
                            required: "Please enter message.",
                        },
						CaptchaInput2: {
                            required: "Please enter Captcha.",
                        },
                        
                    },
                    submitHandler: function (form) {
						
						$("#CaptchaInput2-error").hide();
						var why = "";

						if(form.CaptchaInput2.value == ""){
						why += "Please Enter CAPTCHA Code.\n";
						}
						if(form.CaptchaInput2.value != ""){
						if(ValidCaptcha2(form.CaptchaInput2.value) == false){
						why += "The CAPTCHA Code Does Not Match.\n";
						}
						}
						if(why != ""){
						$("#CaptchaInput2-error").show();
						$("#CaptchaInput2-error").html(why);
						return false;
						}
					
                        var url = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"; // the script where you handle the form input.
                        var formData = new FormData($(form)[0]);
                        $.ajax({
                            type: "POST",
                            url: url,
                            data: sendingData, // serializes the form's elements.
                            async: false,
                            beforeSend: function () {
                                // do code here.
                            },
                            success: function (data) {
                                var res = data;
                                console.log(data)
                                var result_arr = jQuery.parseJSON(data);
                                // console.log(result_arr.data.code);
                                var code = result_arr.status;
                                var message = result_arr.message;
                                var details = result_arr.data;
								if(data == 1){
									window.location = "thankyoumessage.php";
								}else{
									$("#error_message").html("Something Went to wrong.Pealse Try Again.");
								}
                                //$("#error_message_careers_from").html(message);
                                $('#requestdemo').trigger("reset");
                                window.setTimeout(function () {
                                    $("#error_message").html("");
									$("#success_message").html("");
                                }, 5000);
								
                            },
							
                            cache: false,
                            contentType: false,
                            processData: false
                        });
                    }
                });
}








$('#owl-example.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<span aria-label="' + 'Previous' + '"> <img src="/assets/images/1.0/web_images/press/left.png" class="img-fluid arrow_crousel" alt="" loading="lazy"> </span>',
        '<span aria-label="' + 'Next' + '"><img src="/assets/images/1.0/web_images/press/right.png" class="img-fluid arrow_crousel" alt="" loading="lazy"></span>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }			
    }
})


function openNav() {
    document.getElementById("login_nav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("login_nav").style.width = "0%";
  }
  


  
  function myTimer(sec) {
    if (timer) clearInterval(timer);
    timer = setInterval(function() {
        var m = Math.floor(sec / 60);
        var s = sec % 60;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        $('#timer').text(m + ':' + s);

        sec--;
        if (sec == -1) {
            clearInterval(timer);
            $("#timer_otp").hide();
            $("#resend").show();
        }
    }, 1000);
}
/***********************************************************************************************/
function handlePasteOTP(e) {
	var clipboardData = e.clipboardData || window.clipboardData ||     e.originalEvent.clipboardData;
	var pastedData = clipboardData.getData('Text');
	var arrayOfText = pastedData.toString().split('');
	/* for number only */
	if (isNaN(parseInt(pastedData, 10))) {
		e.preventDefault();
		return;
	}
	for (var i = 0; i < arrayOfText.length; i++) { 
		if (i >= 0) {
			document.getElementById('otp-number-input-' + (i + 1)).value = arrayOfText[i];
		} else {
			return;
		}
	}
	e.preventDefault();
}

$("#mobile_code").intlTelInput({
    initialCountry: "in",
    separateDialCode: true,
 });

 $("#mobile_dashboard_code").intlTelInput({
    initialCountry: "in",
    separateDialCode: true,
 });
 
/******************************************************************************/

 $(document).ready(function() {
   $('#otp_submit').prop('disabled', true);
   if ($('#otp_submit').is(':disabled')) {

       $("#otp_submit").css({ 'opacity': '0.65', 'cursor': 'not-allowed' });

   }

   if ($('#login_submit').is(':disabled')) {
       $("#login_submit").css({ 'opacity': '0.65', 'cursor': 'not-allowed' });
   }

   $('#mobile_code').keypress(function(e) {
       var charCode = (e.which) ? e.which : event.keyCode
       if (String.fromCharCode(charCode).match(/[^0-9]/g))
           return false;
   });

   $('#mobile_code').on('keyup', function() {
       if (this.value.length == "10") {
           $('#login_submit').prop('disabled', false);
           $("#login_submit").css({ 'opacity': '', 'cursor': '' });	
       }else{
           $("#login_submit").css({ 'opacity': '0.65', 'cursor': 'not-allowed' });
           $('#login_submit').prop('disabled', true);
       }
   });

   $('.otp').on('keyup', function() {
       var one = $("#otp-number-input-1").val();
       var two = $("#otp-number-input-2").val();
       var three = $("#otp-number-input-3").val();
       var four = $("#otp-number-input-4").val();
       var five = $("#otp-number-input-5").val();
       var six = $("#otp-number-input-6").val();

       if (one != "" && two != "" && three != "" && four != "" && five != "" && six != "") {

           $("#otp_submit").css({ 'opacity': '', 'cursor': '' });
           $('#otp_submit').prop('disabled', false);
       } else {
           $("#otp_submit").css({ 'opacity': '0.65', 'cursor': 'not-allowed' });
           $('#otp_submit').prop('disabled', true);
           $("#otpErrorMessage").hide();
       }
   });

    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
       var stickyHeight = sticky.outerHeight();
       var stickyTop = stickyWrapper.offset().top;
       if (scrollElement.scrollTop() >= stickyTop) {
          stickyWrapper.height(stickyHeight);
          sticky.addClass("is-sticky");
       } else {
          sticky.removeClass("is-sticky");
          stickyWrapper.height('auto');
       }
    };
    $('[data-toggle="sticky-onscroll"]').each(function() {
       var sticky = $(this);
       var stickyWrapper = $('<div>').addClass('sticky-wrapper');
       sticky.before(stickyWrapper);
       sticky.addClass('sticky');
       $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
          stickyToggle(sticky, stickyWrapper, $(this));
       });
       stickyToggle(sticky, stickyWrapper, $(window));
    });
 });
 
 /*********************************************************************************************/
     $('.testimonial-part .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    margin:10,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    dots: true,
    navText: [""],
    responsive: {
       0: {
          items: 1
       },
       600: {
          items: 1
       },
       1000: {
          items: 1
       }
    }
 });
 
 /***************************************************************************************************/
  $(window).scroll(function() {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 25) {
       $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 25) {
       $('.navbar').removeClass('navbar-fixed');
    }
 });
 
 /***************************************************************************************************/
 
 function handlePasteOTP(e) {
var clipboardData = e.clipboardData || window.clipboardData ||     e.originalEvent.clipboardData;
var pastedData = clipboardData.getData('Text');
var arrayOfText = pastedData.toString().split('');
/* for number only */
if (isNaN(parseInt(pastedData, 10))) {
   e.preventDefault();
   return;
}
for (var i = 0; i < arrayOfText.length; i++) { 
   if (i >= 0) {
       document.getElementById('otp-number-input-' + (i + 1)).value = arrayOfText[i];
   } else {
       return;
   }
}
e.preventDefault();
}

$(document).ready(function() {
$('.otp-event').each(function(){
var $input = $(this).find('.otp-number-input');
var $submit = $(this).find('.otp-submit');
$input.keydown(function(ev) {
   otp_val = $(this).val();
   if (ev.keyCode == 37) {
       $(this).prev().focus();
       ev.preventDefault();
   } else if (ev.keyCode == 39) {
       $(this).next().focus();
       ev.preventDefault();
   } else if (otp_val.length == 1 && ev.keyCode != 8 && ev.keyCode != 46) {
       otp_next_number = $(this).next();
       if (otp_next_number.length == 1 && otp_next_number.val().length == 0) {
           otp_next_number.focus();
       }
   } else if (otp_val.length == 0 && ev.keyCode == 8) {
       $(this).prev().val("");
       $(this).prev().focus();
   } else if (otp_val.length == 1 && ev.keyCode == 8) {
       $(this).val("");
   } else if (otp_val.length == 0 && ev.keyCode == 46) {
       next_input = $(this).next();
       next_input.val("");
       while (next_input.next().length > 0) {
           next_input.val(next_input.next().val());
           next_input = next_input.next();
           if (next_input.next().length == 0) {
               next_input.val("");
               break;
           }
       }
   }
   
}).focus(function() {
   $(this).select();
   var otp_val = $(this).prev().val();
   if (otp_val === "") {
       $(this).prev().focus(); 
   }else if($(this).next().val()){
        $(this).next().focus();  
   }
}).keyup(function(ev) {
   otpCodeTemp = "";
   $input.each(function(i) {
       if ($(this).val().length != 0) {
           $(this).addClass('otp-filled-active');
       } else {
           $(this).removeClass('otp-filled-active');
       }
       otpCodeTemp += $(this).val();
   });
   if ($(this).val().length == 1 && ev.keyCode != 37 && ev.keyCode != 39) {
       $(this).next().focus();
       ev.preventDefault(); 
   }
   $input.each(function(i) {
    if($(this).val() != ''){
       $submit.prop('disabled', false); 
    }else{
       $submit.prop('disabled', true);
     }
   });
    
});
$input.on("paste", function(e) { 
   window.handlePasteOTP(e);
});
});

});
/**********************************************************************************************/