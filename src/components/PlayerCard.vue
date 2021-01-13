<template>
  <div class="container px-3 py-3">
    <div class="bg-gray-200 rounded shadow-2xl clearfix" v-if="player.image">
      <!-- <img class="float-left rounded-l h-64 mr-4" src="http://localhost:8080/img/Bobby-Brown.jpg" /> -->
      <img class="float-left rounded-l h-auto w-32 mr-4" :src="player.image"/>
      <div class="flex-col pt-3">
        <span class="text-xl font-medium">{{ player.name }}</span>
        <div class="pt-2">
          <span class="font-medium">Links</span>
        </div>
        <div class="pt-2">
          <ul class="ml-40">
            <li v-for="(link, i) in player.links" :key="i">
              <a :href="link.link" target="_blank">
                <span class="text-sm">{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-gray-200 rounded shadow-2xl clearfix"  v-if="!player.image">
      <!-- <img class="float-left rounded-l h-64 mr-4" src="http://localhost:8080/img/Bobby-Brown.jpg" /> -->
      <div class="flex-col pt-3 pl-2">
        <span class="text-xl font-medium">{{ player.name }}</span>
        <div class="pt-2">
          <span class="font-medium">Links</span>
        </div>
        <div class="pt-2">
          <ul class="pl-4 pb-3">
            <li v-for="(link, i) in player.links" :key="i">
              <a :href="link.link" target="_blank">
                <span class="text-sm">{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'playerCard',
  props: ['player'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

  li {
    list-style-type: square;
  }
</style>
