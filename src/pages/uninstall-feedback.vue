
<template>
	<section>
		<div class="feedback_heading">
			<div class="container">
				<h2>Uninstall feedback</h2>
			</div>
		</div>
		<div class="feedback_body">
			<div class="container">
				<div class="feedback_reason">
					<p>You have chosen to uninstall Livekeeping. As we want to improve our solutions and offer maximum usability to all our customers we're very interested to know about your reasons - it would be kind if you could describe any problems in a few words!</p>
				</div>

				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-6 col-12">
						<div class="feedback_option">
					<p>Reason</p>
					<div class="feedback_label">
						<input type="radio" id="feed" v-model="feedback_select" value="I don't want to give any feedback" checked>
						<label for="feed">I don't want to give any feedback</label>
					</div>
					<div class="feedback_label">
						<input type="radio" id="tech_team" value="Technical problem" v-model="feedback_select">
						<label for="tech_team">Technical problem</label>
					</div>
					<div class="feedback_label">
						<input type="radio" id="reinstallation" value="Reinstallation" v-model="feedback_select">
						<label for="reinstallation">Reinstallation</label>
					</div>
					<div class="feedback_label">
						<input type="radio" id="useteamviewer" value="I don't use Livekeeping" v-model="feedback_select">
						<label for="useteamviewer">I don't use Livekeeping</label>
					</div>
					<div class="feedback_label">
						<input type="radio" id="teamviewer" value="I don't know Livekeeping" v-model="feedback_select">
						<label for="teamviewer">I don't know Livekeeping</label>
					</div>
					<div class="feedback_label">
						<input type="radio" id="solution" value="I will use an alternative solution" v-model="feedback_select">
						<label for="solution">I will use an alternative solution</label>
					</div>
					<div class="feedback_label">
						<input type="radio" id="concerns" value="Security concerns" v-model="feedback_select">
						<label for="concerns">Security concerns</label>
					</div>

					<div class="feedback_label">
						<input type="radio" id="license" value="My trial license has expired" v-model="feedback_select">
						<label for="license">My trial license has expired</label>
					</div>
					<div class="feedback_label">
						<input type="radio" id="other" value="Other" v-model="feedback_select">
						<label for="other">Other</label>
					</div>
					<div class="feedback_submit">
						<button type="button" class="btn" @click="feedback_submit();" v-on:click="loader">Submit <span v-show="buttonLoading"><i class="fa fa-spinner fa-spin"></i></span></button>
					</div>					
				</div>
					</div>					
				</div>				
			</div>
		</div>

	</section>
</template>

<script>
import Api from "@/Api";
export default {
	
	data() {
		return{
			user_id : "",
			version : "",
			first_url : "",
			second_url : "",
			feedback_select : "I don't want to give any feedback",
			buttonLoading: false,
			delayLoading: 1,
		};
	},
	methods: {
		loader(){
			this.buttonLoading = true;
		},
		first_call(){
			localStorage.setItem("uninstallId", "");
			this.user_id  = this.$route.query._id.split('$$')[0];
			this.user_id = this.user_id.replaceAll(' ', '+');
			// userId = this.user_id.replace(/%20/g, '+');
			// alert(this.user_id.replace(/%20/g, '+'));
			this.version = this.$route.query.version;
			// this.first_url = "insertUninstallationLog?_userId="+ this.user_id +"&description=setupVersion: "+ this.version;
			const data = {
				_userId: this.user_id,
				description: 'setupVersion:'+this.version
			}
			const headers = {
				"Access-Control-Allow-Origin": "*", 
				"Content-Type": "application/json"
			};
			Api.uninstall_call(data, headers)
          	.then(response => {
				localStorage.setItem("uninstallId", response.data.data[0]._id);
			})
		},
		second_call(feedback_select){
			// this.second_url = "insertUninstallationLog?_id="+localStorage.getItem("uninstallId")+"&_userId="+ this.$route.query._id.split('$$')[0] +"&description=setupVersion: "+ this.$route.query.version + ", uninstallReason: " + feedback_select;
			const data = {
				isFeedback : true,
				_userId: this.user_id,
				description: 'setupVersion:'+ this.$route.query.version + ", uninstallReason:" + feedback_select
			}
			const headers = {
				"Access-Control-Allow-Origin": "*", 
				"Content-Type": "application/json"
			};
			Api.uninstall_call(data,headers)
          	.then(response => {
				if(response.data.status == 1){
					localStorage.setItem("uninstallId", "");
					window.location.href = "/";
					
				}
				console.log(response);
				this.buttonLoading = false;
			})
			.catch(() => {
				this.buttonLoading = false;
			});
		},
		feedback_submit(){
			this.second_call(this.feedback_select);
		},

		
  	},
	mounted() {
		this.first_call();
	}
};
</script>
