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
		<footer class="section_pading">
			<div class="container">
				<div class="row">
<div class="col-lg-4 col-md-6 col-sm-12 bottom-footer">
						<div>
							<h5 class="footer_page_nem">Grow Your Business</h5>
							<h1>Experience Tally on Mobile :<br> Your Tally Mobile App on the go</h1>
							<p class="italic_text_business">Business made simpler for Tally users.</p>
						</div>
						<div class="PlaystoreApptore">
							<ul class="d-flex align-items-center">
								<li class="me-3">
									<a href="https://play.google.com/store/search?q=livekeeping&c=apps&hl=en-IN" target="_blank" @click="Playstore_event()">
										<img src="/assets/images/1.0/web_images/PlayStore.svg" />
									</a>
								</li>
								<li>
									<a href="https://apps.apple.com/in/app/livekeeping-tally-on-mobile/id1451277319" target="_blank" @click="Appstore_event()">
										<img src="/assets/images/1.0/web_images/AppStore.svg" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					

					<div class="col-lg-3 col-md-6 col-sm-12 bottom-footer">
						<div>
							<h5 class="footer_page_nem">About</h5>
							<ul class="bottom-menu">
								<li><a href="/about-us" @click="our_story()">Our Story</a></li>
								<li><a href="https://livekeeping.gitbook.io/user-manual/" target="_blabk" @click="documentation()">Documentation</a>
								</li>
								<li><a href="/login" @click="web_login()">Tally on Web Login</a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-5 col-md-6 col-sm-12">
						<div class="company_contact">
							<h5 class="footer_page_nem"> Contact Us</h5>
							<h6 style="margin-bottom: 5px;">Livekeeping Technologies Pvt. Ltd.</h6>
							<p class="white_text" style="margin-bottom: 10px;font-size: 14px;">(Formerly known as Finlite
								Technologies Pvt. Ltd.)</p>
							<p class="white_text">Plot No.22, 11th floor, Tower 2, Assotech Business Cresterra, Sector 135,
								Noida,<br /> Uttar Pradesh 201305, India.</p>
							<p class="white_text"><span class="font-weight-600">Support Email:</span> <a href="mailto:support@livekeeping.com"
									onclick="gtag('event','footer_support_email',{'event_category':'Click to Email','event_label':'Clicked on Footer Email - info@livekeeping.com'})"
									class="mail_us"> support@livekeeping.com</a></p>
							<p class="white_text"><span class="font-weight-600">Support Mobile:</span> <a href="tel:+918383838383"
									onclick="gtag('event','footer_support_number',{'event_category':'Click to Call','event_label':'Clicked on Footer Number - +918383838383'})"
									class="mail_us"> +91 8383838383</a> <span class="font-weight-400"> (Mon - Sat | 09:00 AM - 07:00 PM)</span></p>

						</div>
					</div>
				</div>
			</div>
			<div class="bottom-mini-footer">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-5 col-md-12 col-12">
						<div class="mini-footer-caption">
							<p>&copy; 2024 Livekeeping Technologies Pvt Ltd. All Right Reserved</p>
						</div>
					</div>
					<div class="col-lg-3 col-md-12 col-12">
						<div class="mini-footer-caption">
							<ul class="social_media_icons">
								<li>
									<a href="https://www.facebook.com/livekeeping/" target="_blank" title="Facebook">
									<i class="fa fa-facebook" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/live.keeping/" target="_blank" title="Instagram">
									<i class="fa fa-instagram" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="https://in.linkedin.com/company/livekeeping" target="_blank" title="Linkedin">
									<i class="fa fa-linkedin" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="https://www.youtube.com/channel/UClzVbx7otK5FQb9tuU9b6vA" target="_blank" title="Linkedin">
									<i class="fa fa-youtube-play" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="mini-footer-caption">
							<ul class="help-footer-menu">
								<li>
									<a href="/privacy-policy" @click="privacy_policy()" class="router-fiiter-pt">Privacy Policy</a>
								</li>
								<li>
									<a href="/terms-of-use-doc" @click="terms_conditions()" class="router-fiiter-pt">Terms & Conditions</a>
								</li>
								<li>
									<a href="/refund-policy" @click="refund_policy()" class="router-fiiter-pt">Refund Policy</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			</div>
		</footer>
		<div class="mobile_footer_only_whatsapp_button">
			<div class="whatsapp_fix_icon">
				<a href="https://wa.me/918383838383?text=I'm%20interested%20in%20your%20Livekeeping%20Tally%20On%20Mobile%20Application"
				target="_blank" @click="whatsapp_btn()"><img src="/assets/images/1.0/mobiledevice/svg/whatsapp-logo.svg" alt="WhatsApp" width="30" height="30"> <span>Message Us</span></a>
			</div>
		</div>
		<div class="mobile_footer_fix">
			
			<div class="row login_footer_mobile">
				<div class="col-12 p-0">
					<div class="mobile-footer-mobile-app-content-set">
						<div class="mobile-footer-logo-fixed">
							<ul class="mobile-device-set-footer-device">
								<li><img src="/assets/images/1.0/mobiledevice/svg/OnlyLkpLogo.svg" alt="Livekeeping LOGO" class="mg-fluid"/></li>
								<li>
									<p>Tally on Mobile - Livekeeping</p>
							<ul class="mobile-device-footer-rating-star">
								<li>4.6</li>
								<li><i class="fa fa-star"></i></li>
								<li><i class="fa fa-star"></i></li>
								<li><i class="fa fa-star"></i></li>
								<li><i class="fa fa-star"></i></li>
								<li><i class="fa fa-star-half-o"></i></li>
								<li>
									<p class="innerptag">1,000+</p>
								</li>
							</ul>
								</li>
							</ul>
							</div>
						<div class="mobile-footer-fixed-download-app-button">
							<a href="javascript:void(0)" target="_blank"
							id="store1" @click.prevent="download_now_mo()">Install App</a>
						</div>
					</div>
				</div>
			</div>
		</div>
</section>
</template>
<script>
import GoogleAnalytics from "@/GoogleAnalytics";
export default {
	data(){
		return{
			loginflag : 0,
		}
	},
	methods: {
	scrollToTop() {
      window.scrollTo(0, 0);
    },
		whatsapp_btn(){
      GoogleAnalytics.website_whatsapp_button("whatsapp");
      },
	  privacy_policy(){
      GoogleAnalytics.website_privacy_policy("privacy_policy");
      },
	refund_policy(){
      GoogleAnalytics.website_refund_policy("refund_policy");
      },
	  Playstore_event(){
      GoogleAnalytics.website_Playstore_event("Playstore_event");
      },
	  Appstore_event(){
      GoogleAnalytics.website_Appstore_event("Appstore_event");
      },
	terms_conditions(){
      GoogleAnalytics.website_terms_conditions("terms_conditions");
      },
	  refund_policy(){
      GoogleAnalytics.website_refund_policy("refund_policy");
      },
	  
	  ready_to_get_started(){
      GoogleAnalytics.website_ready_to_get_started("ready_to_get_started");
      },
	partner_login(){
      GoogleAnalytics.website_partner_login("partner_login");
      },
	contact_us(){
      GoogleAnalytics.website_contact_us("contact_us");
      },
	our_story(){
      GoogleAnalytics.website_our_story("our_story");
      },
	  web_login(){
		GoogleAnalytics.website_web_login("web_login");
	  },
	documentation(){
      GoogleAnalytics.website_documentation("documentation");
      },
	  download_now_mo() {
    GoogleAnalytics.mobile_website_download_button("download_now");

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = 'https://itunes.apple.com/us/app/live-keeping/id1451277319?ls=1&mt=8';
    } 
    else if (/android/i.test(userAgent)) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.finlitetech.livekeeping';
    }
    else {
        console.error("Unable to determine the user's operating system.");
    }
},

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
<style scoped>
.login_footer_mobile{display:none !important;}
.mobile_footer_only_whatsapp_button {display: block;position: fixed;bottom: 50px;right:20px;z-index: 99;}
@media only screen and (max-width:768px){
    .login_footer_mobile{display:flex !important;}
	.download_now_ft{display:block !important;}
	.login-mobile-button-footer{display:block !important;}
	.mobile_footer_fix {width: 100% !important;}
	.mobile-footer-mobile-app-content-set {background: #fff;padding: 10px 10px;display: flex;align-items: center;justify-content: space-between;border-top: 1px solid #E6E6E6;}
	.mobile-footer-fixed-download-app-button {float: right;}
	.mobile-footer-fixed-download-app-button a {padding: 5px 14px;color: #fff;background: #5BBC21;border-radius: 3px;}
	.mobile-footer-logo-fixed {display: flex;align-items: center;}
    .mobile-footer-logo-fixed p{margin-bottom: 0;color:#1a1a1a;font-size:16px;font-weight:600;}
    .mobile-footer-logo-fixed img {margin-right: 10px;}
	ul.mobile-device-set-footer-device {margin-bottom: 0;display: flex;align-items: center;}
	ul.mobile-device-set-footer-device li {display: inline-block;font-size: 10px;color: #D86524;padding-right: 5px;}
	ul.mobile-device-set-footer-device li p.innerptag {margin-bottom: 0;color: #646464 !important;font-weight: 400 !important;margin-left:10px;}
	ul.mobile-device-footer-rating-star {margin-bottom: 0;}
	.mobile_footer_only_whatsapp_button {bottom: 50px;}

}
@media only screen and (max-width:600px){
	.mobile_footer_only_whatsapp_button {bottom: 50px;}
	.mobile-footer-logo-fixed p{font-size:13px;}
}
</style>
