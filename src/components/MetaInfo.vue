<!-- MetaInfo.vue -->
<template>
  <div></div>
</template>

<script>
export default {
  name: 'MetaInfo',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  watch: {
    title: 'updateMeta',
    description: 'updateMeta'
  },
  mounted() {
    this.updateMeta();
  },
  methods: {
    updateMeta() {
      document.title = this.title;
      document.querySelector('meta[name="description"]').setAttribute('content', this.description);
      document.querySelector('meta[name="title"]').setAttribute('content', this.title);
    }
  }
}
</script>