<template>
  <div id="container" class="bg-gray-200 w-full">
    <div class="MyFlipbook">
      <div>
        <Flipbook class="flipbook" :pages="book.pages" :pagesHiRes="book.pagesHiRes" v-slot="flipbook" ref="flipbook">
          <div class="action-bar text-center">
            <div class="m-1">
              <font-awesome-icon class="mr-2 btn" :class="{ disabled: !flipbook.canFlipLeft }" icon="chevron-circle-left"
                                 size="lg" @click="flipbook.flipLeft"></font-awesome-icon>
              <font-awesome-icon class="mr-2 btn" :class="{ disabled: !flipbook.canZoomIn }" icon="plus-circle"
                                 size="lg" @click="flipbook.zoomIn"></font-awesome-icon>
              <span class="">Page </span>
              <span class="">{{ flipbook.page }}</span>
              <span class="">&nbsp;of&nbsp;</span>
              <span class="">{{ flipbook.numPages }}</span>
              <font-awesome-icon class="ml-2 mr-2 btn" :class="{ disabled: !flipbook.canZoomOut }" icon="minus-circle"
                                 size="lg" @click="flipbook.zoomOut"></font-awesome-icon>
              <font-awesome-icon class=" btn" :class="{ disabled: !flipbook.canFlipRight }" icon="chevron-circle-right"
                                 size="lg" @click="flipbook.flipRight"></font-awesome-icon>
            </div>
          </div>
        </Flipbook>
      </div>
    </div>
  </div>
</template>

<script>
import Flipbook from 'flipbook-vue'

export default {
  name: 'Flipbook.vue',
  components: {
    Flipbook
  },
  props: [
    'book'
  ],
  computed: {
    /* pages () {
      return 'something'
    },
    pagesHiRes () {
      return 'something'
    }, */
    canFlipLeft () {
      return this.$refs.flipbook.canFlipLeft
    }
  },
  mounted () {
    window.addEventListener('keydown', function (ev) {
      let flipbook = this.$refs.flipbook
      // return unless flipbook
      if (ev.keyCode === 37 && flipbook.canFlipLeft) {
        flipbook.flipLeft()
      }

      if (ev.keyCode === 39 && flipbook.canFlipRight) {
        flipbook.flipRight()
      }
      // flipbook.flipLeft() if ev.keyCode == 37 and flipbook.canFlipLeft
      // flipbook.flipRight() if ev.keyCode == 39 and flipbook.canFlipRight
    })
  }
}
</script>

<style scoped>
  #container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .flipbook {
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
    height: 90vh;
  }

  .flipbook .viewport {
    width: 90vw;
    height: calc(100vh - 50px - 40px);
  }
  .flipbook .bounding-box {
    box-shadow: 0 0 20px #000;
  }

  .action-bar .btn {}

  .action-bar .btn svg {
    bottom: 0;
  }
  .action-bar .btn:not(:first-child) {
    margin-left: 10px;
  }
  .has-mouse .action-bar .btn:hover {
    color: #ccc;
    filter: drop-shadow(1px 1px 5px #000);
    cursor: pointer;
  }
  .action-bar .btn:active {
    filter: none !important;
  }
  .action-bar .btn.disabled {
    color: #666;
    pointer-events: none;
  }
</style>
