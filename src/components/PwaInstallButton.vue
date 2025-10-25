
<template>
    <button :class="{ highlighted: isPwaInstalled }" @click="handleClick">
      Install PWA
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isPwaInstalled: false,
      };
    },
    methods: {
      handleClick() {
        // Your PWA installation logic here
        if (this.deferredPrompt) {
          this.deferredPrompt.prompt();
          this.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            this.deferredPrompt = null;
          });
        }
      },
    },
    mounted() {
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e;
        // Update UI notify the user they can install the PWA
        this.isPwaInstalled = true;
      });
  
      window.addEventListener('appinstalled', () => {
        // Log install to analytics
        console.log('PWA was installed');
        this.isPwaInstalled = true;
      });
    },
  };
  </script>
  
  <style>
  .highlighted {
    background-color: yellow;
    /* Add other styles to highlight the button */
  }
  </style>
  