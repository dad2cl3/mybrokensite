<template>
  <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white m-2 sm:m-0">
    <img class="w-full" :src="splashCard.imagePath" alt="splashCard.imageTitle">
    <div class="py-4 bg-white">
      <div class="font-medium text-sm md:text-md lg:text-xl mb-2 px-2">
        <router-link :to="`/${splashCard.routerLink}`">
          <span class="text-blue-700">{{ splashCard.imageTitle }}</span>
        </router-link>
      </div>
      <p class="text-gray-700 text-xs md:text-sm lg:text-base px-4">{{ splashCard.imageDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplashCard.vue',
  props: ['splashCard'],
  data () {
    return {
      /* imagePath: '/img/RangersFCPostcardAutographs-New.png',
      imageTitle: '1947-48 Rangers FC Autograph Page',
      imageDescription: 'Collected autographs of the 1947-48 Rangers FC including ten members of the Rangers FC Hall of Fame, five members of the Scottish Football Hall of Fame, and one member of the Canada Soccer Hall of Fame.' */
      imagePath: '/img/chix/ChixCoverSplash-Small.png',
      imageTitle: 'Chix Bubble Gum Football Album',
      imageDescription: '1956-57 Chix Confectionary Co. Ltd. Famous Footballers Series Two. The set consists of 48 tallboy cards featuring famous footballers from the 1950s.'
    }
  }
}
</script>

<style scoped>

  .postcard {
    margin-left: auto;
    margin-right: auto;
    width: 26vw;
    height: 46vh;
  }

  .postcard-description {
    margin-left: auto;
    margin-right: auto;
    width: 26vw;
  }
</style>
