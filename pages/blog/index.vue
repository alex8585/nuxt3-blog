<script setup lang="ts">
import { shorten, getUrlFromMedia } from "@/utils/functions";
const router = useRouter();
const url = import.meta.env.VITE_API_URL + "/api/v1";
const { data: arts}  = await useAsyncData('arts', () => 
     $fetch(url +'/arts?page=1&perPage=6')
)
function seeMoreHandler(id: number | undefined) {
  if (id) {
    router.push({ path: `/blog/${id}`, replace: true });
  }
}


//console.log(arts)
</script>
<template>
    <div>
  <h2>Blog</h2>
  <ul v-if="arts">
    <li v-for="art in arts.items" :key="art.id">
      <q-card class="my-card">
            <q-img :src="getUrlFromMedia(art?.media?.[0]?.original_url as string)">
          <div class="absolute-bottom">
            <div class="text-h6">{{ art.title }}</div>
            <div class="text-subtitle2">
                {{ shorten(art.description as string, 5) }}
            </div>
          </div>
        </q-img>
        <q-card-actions>
          <q-btn @click="seeMoreHandler(art.id)" flat>See more ...</q-btn>
        </q-card-actions>
      </q-card>
    </li>
  </ul>
    </div>
</template>
<style scoped>
h2 {
  text-align: center;
  margin-bottom: 15px;
}
</style>
