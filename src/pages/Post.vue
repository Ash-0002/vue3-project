/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>
  <section class="section">
    <p v-if="loading" class="notification is-info">
      Loading
    </p>

    <template v-else>
      <h1 class="title">{{ page.title }}</h1>

      <article class="box">
        <div class="content">
          {{ page.body }}
        </div>
        <p>Posted by user {{ page.userId }}</p>
      </article>
    </template>
  </section>
</template>

<script>
import Api from "@/Api";

export default {
  data() {
    return {
      page: null,
      loading: true
    };
  },

  watch: {
    $route: {
      immediate: true,
      handler($route) {
        Api.getPost($route.params.id)
          .then(response => {
            this.page = response.data;
            this.loading = false;
          })
          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
          });
      }
    }
  }
};
</script>
