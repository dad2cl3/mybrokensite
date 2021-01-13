<template>
  <div class="carousel-container">
    <carousel3d :autoplay="true" :autoplay-timeout="3000" perspective="0" space="400" display="5" width="1000" height="840">
      <slide v-for="(image, i) in images" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
          <figure>
            <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="`${root}${image.path}${extension}`"/>
            <figcaption class="text-lg text-center text-white font-medium p-5">{{ image.description }}</figcaption>
          </figure>
        </template>
      </slide>
    </carousel3d>
  </div>
</template>

<script>
// import ChixGradedMetadata from '../assets/ChixGraded-old.json'
import ChixGradedMetadata from '../assets/ChixGraded.json'


export default {
  computed: {
    root () {
      // console.log(ChixGradedMetadata.root) // debugging
      return ChixGradedMetadata.root
    },
    extension () {
      // console.log(ChixGradedMetadata.extension) // debugging
      return ChixGradedMetadata.extension
    },
    images () {
      // console.log(ChixGradedMetadata.images) // debugging
      return ChixGradedMetadata.images
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
