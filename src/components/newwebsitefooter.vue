/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>

	<section>
		<footer class="new-footer-design">
			<div class="container">
				<ul>
					
					<li>
						<router-link :to="{ name: 'faq-new-website' }">
							FAQs
                		</router-link>
					</li>
					<li>
						<a href="new-about-website">
							Our Story
                		</a>
					</li>
					<li>
						<router-link :to="{ name: 'new-contact-website' }">
							Contact Us
                		</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'privacy-policy-new-website' }">
							Privacy Policy 
                		</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'terms-of-use-new-website' }">
							Terms & Conditions 
                		</router-link>
					</li>
				</ul>
			</div>
			
		</footer>
		
		<div class="mobile_footer_fix newwebsitefooter">		
			<div class="row login_footer_mobile">
					<div class="col-6 p-0">
						<div class="download_now_ft"><a
								href="https://play.google.com/store/apps/details?id=com.finlitetech.livekeeping" target="_blank"
								id="store1">Download Now</a></div>
					</div>
					<div class="col-6 p-0">
					<div class="login-mobile-button-footer" v-if="this.loginflag">
                  <button type="button"><a href="/dashboard">My Dashboard</a></button>
                </div>
                <div class="login-mobile-button-footer" v-else>
                  <button type="button" @click="openNavVue()">Login</button>
                </div>
					</div>
				</div>
			</div>
			
		<b-modal class="modal fade modal-dialog headerPopup modal-lg" id="modal-signup-modal" hide-footer centered>
			<div class="container">

				<div class="col-lg-12 col-md-12 col-12">
					<div class="about-content m-0">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h2 class="text-gradient sign_up_popup_heading mt-0">We're only a call away!</h2>


						<form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST"
							id="requestdemo" name="requestdemo" class="contactForm">

							<input type=hidden name="oid" value="00D6g0000022gZZ">
							<input type="hidden" class="form-control" name="title" value="Request Demo">
							<input type=hidden name="retURL" value="https://www.livekeeping.com/thankyoumessage">
							<input type="hidden" class="form-control" name="lead_source" value="Web - Request Demo">
							<input type="hidden" name="status" value="Pending">
							<input type="hidden" class="form-control" name="00N6g00000VDcdp"
								value="https://www.livekeeping.com/tally-apis">
							<div class="row">
								<div class="col-lg-6 col-md-12">
									<div class="form-group">

										<input type="text" class="form-control" name="last_name" id="name"
											placeholder="Name">
									</div>
								</div>
								<div class="col-lg-6 col-md-12">
									<div class="form-group">

										<input type="email" class="form-control" name="email" id="email"
											placeholder="Email">
									</div>
								</div>
								<div class="col-lg-6 col-md-12">
									<div class="form-group">

										<input type="text" class="form-control" name="mobile" id="mobile"
											placeholder="Mobile Number">

									</div>
								</div>
								<div class="col-lg-6 col-md-12">
									<div class="form-group">

										<input type="text" class="form-control" name="00N6g00000VB6hI" id="subject"
											placeholder="Subject">
									</div>
								</div>

								<div class="col-lg-12 col-md-12">
									<div class="form-group">

										<textarea name="description" class="form-control" id="description" cols="30"
											rows="4" placeholder="Message"></textarea>
									</div>
								</div>

								<div class="col-lg-3 col-md-12">
									<div class="form-group">
										<div id="CaptchaDiv2"
											style="float: left;background: #4CAF50;padding: 10px 20px 10px 20px;border-radius: 5px;color: #fff;margin-bottom: 10px;width: 150px;text-align: center;">
											15366</div>
									</div>
								</div>


								<div class="col-lg-9 col-md-12">
									<div class="form-group">
										<div class="capbox-inner">

											<input type="hidden" id="txtCaptcha2" value="15366">
											<input type="text" class="form-control" name="CaptchaInput2"
												placeholder="Enter Captcha Code" id="CaptchaInput2">

											<label id="CaptchaInput2-error" class="error" style="display:none"
												for="CaptchaInput2"></label>
										</div>
									</div>
								</div>

								<div class="col-lg-12 col-md-12 mt-5">
									<div class="form-group">
										<input type="submit" name="submit" id="submit_request"
											onclick="return check_my_request_form();" value="Submit" class="whybtn"
											style="width: 100%;">

										<div class="submitting"></div>
									</div>
								</div>
							</div>
							<span id="error_message"></span>
							<span id="success_message"></span>
						</form>


				</div>
			</div>

		</div>
	</b-modal>
</section>
</template>
<script>

export default {
	data(){
		return{
			loginflag : 0,
		}
	},
	methods: {
		openNavVue() {
			    
				document.getElementById("login_nav").style.width = "100%";
		},
		closeNavVue() {
			document.getElementById("login_nav").style.width = "0%";
		}
	},
	mounted() {
		if(localStorage.getItem('webAuthToken') == null){
      this.loginflag = 0;
    }else if(localStorage.getItem('webAuthToken') == ""){
      this.loginflag = 0;
    }else if(localStorage.getItem('webAuthToken') != null){
      this.loginflag = 1;
    }else if(localStorage.getItem('webAuthToken')){
      this.loginflag = 1;
    }else{
      this.loginflag = 0;
    }
$("#login_submit").show();
				$("#otp_box").hide();
				$("#mobile_code").prop("disabled", false);
				$("#rememberme").prop("disabled", false);
				$("#otp_box").hide();
				$("#otpErrorMessage").hide();
				$("#otp-number-input-1").val('');
				$("#otp-number-input-2").val('');
				$("#otp-number-input-3").val('');
				$("#otp-number-input-4").val('');
				$("#otp-number-input-5").val('');
				$("#otp-number-input-6").val('');
	}
}
</script>

