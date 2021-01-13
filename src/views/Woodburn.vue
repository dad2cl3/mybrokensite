<template>
  <div class="carousel-container">
    <carousel3d :autoplay="true" :autoplay-timeout="5000" perspective="0" space="400" display="5" width="500" height="500">
      <slide v-for="(image, i) in images" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
          <figure>
          <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="image.path">
          <figcaption class="text-lg text-center text-white font-medium p-5">{{ image.description }}</figcaption>
          </figure>
        </template>
      </slide>
    </carousel3d>
  </div>
</template>

<script>
// import WillieWoodburnMetadata from '../assets/WillieWoodburnMetadata-old.json'
import WillieWoodburnMetadata from '../assets/WillieWoodburnMetadata.json'

export default {
  name: 'Woodburn.vue',
  computed: {
    images () {
      // console.log(WillieWoodburnMetadata)
      return WillieWoodburnMetadata.images
    }
  }
}

</script>

<style scoped>
.carousel-container {
  width: 85vw;
  margin: auto;
  margin-left: auto;
  margin-right: auto;
}

.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  min-width: 100%;
  box-sizing: border-box;
}
</style>
