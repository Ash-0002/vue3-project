/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>
	<section class="">
	  <div class="login_content">
		<div class="container">
		  <div class="nointernet-box">
			<div class="row align-items-center">
				<div class="col-lg-6 col-12">
					<div class="connection-content">
						<h1>No Internet Connection</h1>
						<h6>Slow or No Internet Connection</h6>
						<p>Check your connection or try again</p>
					</div>
					<div class="try-again-button">
						<button type="button" class="try-again-btn">Try Again</button>
					</div>
				</div>
				<div class="col-lg-6 col-12">
					<div class="nointernet-image">
						<img src="assets/images/1.0/svgs/no-internet.svg" class="img-fluid" />
					</div>
				</div>
			</div>
		  </div>
		</div>
	  </div>
	</section>
  </template>
	
	<script>
  import axios from "axios";
  import Api from "@/Api";
  
  export default {
	name: "no-internet",
	
  };
  </script>
	  <<style scoped>
.nointernet-box {
    padding: 50px;
    margin: 5% auto;
    background: #fff;
    box-shadow: 1px 5px 5px #ddd;
    border-radius: 10px;
	width:80%;
}

.nointernet-image img {
    max-width: 75%;
    margin: auto;
}
.connection-content {
    text-align: center;
}
.try-again-button {
    text-align: center;
    margin-top: 10%;
}
.nointernet-image {
    text-align: center;
}

.connection-content h1 {
    color: #1a1a1a;
    font-weight: 700;
}

.connection-content h6 {
    color: #1a1a1a;
    font-weight: 600;
    font-size: 20px;
}

.connection-content p {
    color: #1a1a1a;
    font-size: 14px;
}

button.try-again-btn {
    padding: 8px 20px;
    background: #1a1a1a;
    color: #fff;
    border-radius: 5px;
}
	  </style>
	
	