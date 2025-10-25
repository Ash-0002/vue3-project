/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>
  <div id="app">
    <component :is="layout">
      <!-- <router-view/> -->
      <router-view @update-meta="updateMeta"/>
      <MetaInfo ref="meta" :title="metaTitle" :description="metaDescription"/>
    </component>
  </div>
</template>

<script>
import MetaInfo from '@/components/MetaInfo.vue';
const default_layout = "default";

export default {
  components: {
    MetaInfo
  },
  data() {
    return {
      metaTitle:
        "Tally Mobile App for Android iOS | Livekeeping - Tally on Mobile | Tally on Web",
      metaDescription:
        "Livekeeping Tally ERP 9 Mobile App allows you to access your Tally ERP 9 data on your android/ios mobile app in real-time. This app allows fast & safe methods to access tally on any mobile device. Start FREE Trial.",
    };
  },
  methods: {
    updateMeta(meta) {
      this.metaTitle = meta.title || "Default Title";
      this.metaDescription = meta.description || "Default Description";
    },
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },

  created() {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout);
  },

  updated() {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout);
  }
};
</script>



