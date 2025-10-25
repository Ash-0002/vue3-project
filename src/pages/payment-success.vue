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
		<div class="success_payment_page">
			<div class="success_payment_overlay">
			<img src="assets/images/1.0/paymeny-success-bg.png" alt="img" class="img-fluid" />
			</div>
			<div class="main_login_box payments_box position-relative">
				<span class="only_top_date_absolute">Subscription Valid Up to: 30th Mar 2025</span>
				<div class="row justify-content-center">
					<div class="col-lg-12 col-12">
						<div class="login-form-box payment_success_box">
							<div class="login-form">
								<div class="payment_success">
									<div class="circle-border"></div>
									<div class="circle">
										<div class="success"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="payment_content_success">
							<h2>Payment Successful</h2>
							<p class="mb-0"><span class="congratulations_text">Congratulations,</span> You have successfully
								purchased 1 Users</p>
							<p class="mb-0" style="display:none;"><span class="congratulations_text">Congratulations,</span>
								Your subscription has been successfully Activated</p>

						</div>
						<div class="user_success_details">
							<div class="user_success_details_content">
								<h4>Order Details</h4>
							</div>
							<div class="user_success_deatils_part">
								<table width="100%" class="users_success_content">
									<tr>
										<td width="30%">Name:</td>
										<td width="70%" style="font-weight:600;">Test Livekeeping</td>
									</tr>
								</table>
								<table width="100%" class="users_success_content">
									<tr>
										<td width="30%">No. of Users:</td>
										<td width="20%" style="border-right:1px solid #ddd;font-weight:600;">1</td>
										<td width="30%">Total Years:</td>
										<td width="20%" style="font-weight:600;">5</td>
									</tr>
								</table>
								<table width="100%" class="users_success_content">
									<tr>
										<td width="30%">Amount:</td>
										<td width="20%" style="border-right:1px solid #ddd;font-weight:600;"><span
												class="font_sans">₹ </span>3,000</td>
										<td width="30%">GST:</td>
										<td width="20%" style="font-weight:600;"><span class="font_sans">₹ </span>600</td>
									</tr>
								</table>
								<table width="100%" class="users_success_content">
									<tr>
										<td width="30%">Net Amount:</td>
										<td width="70%" style="font-weight:600;"><span class="font_sans">₹ </span>3,000</td>
									</tr>
								</table>
								<table width="100%" class="users_success_content">
									<tr>
										<td width="30%">Order Id:</td>
										<td width="70%" style="font-weight:600;"><span
												class="font_sans"></span>65hdjhsds8w7878433432dsd</td>
									</tr>
								</table>
								<table width="100%" class="users_success_content">
									<tr>
										<td width="30%">Transaction Id:</td>
										<td width="70%" style="font-weight:600;">gasu@oksbi</td>
									</tr>
								</table>
							</div>
						</div>

					</div>
				</div>
				<div class="visit_link">
					<span>Please visit
						<a style="color:blue;" href="/" target="_blank">livekeeping.com</a>
					</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {
	data() {
		return {

		};
	},
	mounted() {

	}
}
</script>

<style scoped>
aside.app-sidebar {filter: blur(5px) !important;}
.app-header.header.main-header1 {filter: blur(5px) !important;}
</style>
