/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>
  <div>
    <div class="box">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>

		<div class="page">
			<div class="page-content">
				<div class="container text-center">
          <div class="row">
            <div class="col-12">
              <div class="logo-image-error">
                <img src="/assets/images/1.0/brand/live-keeping-logo.svg" class=""
              alt="livekeeping logo" />
              </div>
            </div>
          </div>
					<div class="row">
						<div class="col-md-12">
							<div class="">
								<div class="404-title_caption">
									<div class="display-1 mb-4 font-weight-bold error-text text-main-count-error">404</div>
									<h1 class="h3  mb-3 font-weight-bold">Sorry, an error has occured, Requested Page not found!</h1>
									<p class="h5 font-weight-normal mb-7 leading-normal mb-5">You may have mistyped the address or the page may have moved.</p>
                  <router-link :to="{ name: 'dashboard' }" class="back_to_home">Back to Home</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import GoogleAnalytics from "@/GoogleAnalytics";
export default {
  mounted() {
    
    GoogleAnalytics.page_not_found_404();
     
  }
}
</script>
