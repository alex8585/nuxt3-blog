<script setup lang="ts">
import { useBlogStore } from "@/stores/blog";
import { onMounted } from "vue";
import { getUrlFromMedia } from "@/utils/functions";

import { useRoute } from "vue-router";
const url = import.meta.env.VITE_API_URL + "/api/v1";

const route = useRoute();


const { data: art}  = await useAsyncData('arts', () => { 
      let id = parseInt(route.params.id as string);
     return $fetch(`${url}/arts/${id}` )
}
)

</script>


<template>
    <div v-if="art">
  <h3>{{ art.title }}</h3>
  <p v-html="art.description"></p>
  <ul class="galery-wrap">
    <li v-for="img in art.media" :key="img.id">
      <q-card class="galery-card">
        <img :src="getUrlFromMedia(img.original_url)" />
      </q-card>
    </li>
  </ul>
    </div>
</template>

<style scoped>
.galery-card {
}
.galery-wrap {
  /* display: flex;
  justify-content: start; 
  align-items: center;
  flex-wrap: wrap; */
  padding-left: 0px;
}
.galery-wrap li {
  min-width: 400px;
  margin-right: 20px;
}
.galery-card img {
  width: 100%;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
