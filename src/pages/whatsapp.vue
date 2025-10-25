/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <div class="whatsapp-container">
    <p v-if="linked">WhatsApp is linked, Click to send message</p>
    <button @click="handleWhatsApp" class="whatsapp-button">
      {{ linked ? "Send Message" : "Link WhatsApp" }}
    </button>

    <button v-if="linked" @click="disconnectWhatsApp">Disconnect WhatsApp</button>

    <!-- Show QR code if device is not linked -->
    <div v-if="qrCode && !linked" class="qr-container">
      <img :src="qrCode" alt="Scan QR to Link WhatsApp" />
      <p>Scan the QR code to link your device</p>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      qrCode: "", // Stores the QR image
      linked: false, // Tracks if WhatsApp is linked
      userId: "" // Dynamic user ID
    };
  },
  methods: {
    async fetchUserId() {
      // Generate a random user ID and store it in local storage if not already set
      let storedUserId = localStorage.getItem("userId");
      if (!storedUserId) {
        storedUserId = `user_${Math.floor(Math.random() * 1000000)}`;
        localStorage.setItem("userId", storedUserId);
        this.userId = storedUserId;

      }
      this.userId = storedUserId;
    },
    async handleWhatsApp() {
      if (!this.linked) {
        // Step 1: Fetch QR Code
        try {
          const response = await axios.get(`https://wa.livekeeping.com/qr/${this.userId}`);
          this.qrCode = response.data.qr;
          this.linked = response.data.linked;
        } catch (error) {
          console.error("❌ Error fetching QR:", error);
        }
      } else {
        // Step 2: Send Dummy Message
        try {
          const response = await axios.get(`https://wa.livekeeping.com/send/${this.userId}`);
          alert(response.data.status);
        } catch (error) {
          console.error("❌ Error sending message:", error);
        }
      }
    },
    async checkLinkedStatus() {
      // Auto-check WhatsApp link status every 5 seconds
      setInterval(async () => {
        try {
          const response = await axios.get(`https://wa.livekeeping.com/qr/${this.userId}`);
          this.linked = response.data.linked;
          if (this.linked) this.qrCode = ""; // Hide QR when linked
        } catch (error) {
          console.error("❌ Error checking status:", error);
        }
      }, 1000);
    },
    async disconnectWhatsApp() {
      try {
        const response = await fetch(`https://wa.livekeeping.com/disconnect/${this.userId}`);
        const data = await response.json();
        alert(data.status);
      } catch (error) {
        alert("Error disconnecting WhatsApp.");
        console.error("Error:", error);
      }
    },
    async start() {
      try {
        const response = await fetch(`https://wa.livekeeping.com/start/${this.userId}`);
        const data = await response.json();
        alert(data.status);
      } catch (error) {
        alert("Error starting WhatsApp session.");
        console.error("Error:", error);
      }
    }
  },
  async mounted() {
    await this.fetchUserId(); // Retrieve user ID on component mount
    this.checkLinkedStatus(); // Start checking link status when component loads
  }
};
</script>

<style scoped>
.whatsapp-container {
  text-align: center;
  margin-top: 20px;
}

.whatsapp-button {
  background-color: #25d366;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.qr-container {
  margin-top: 20px;
}

.qr-container img {
  width: 200px;
  height: 200px;
}
</style>
