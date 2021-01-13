<template>
  <div id="container" class="w-full h-screen">
    <div class="p-4 text-center w-full">
      <span class="text-white text-xs">* Hint: Move your mouse over the signatures or touch the signatures if you are viewing on a touch screen.</span>
    </div>

    <div id="drawing" class="drawing"></div>
    <!-- Popup modal -->
    <div class="modal fixed inset-0 w-screen h-screen flex opacity-100" v-if="showDetails">
      <!-- <div class="modal-content absolute w-full sm:w-3/4 md:w-1/2 xl:w-1/3 bg-white shadow-lg rounded-lg p-4"> -->
      <div :class="modalClass">
        <PlayerCard :player="players[selectedPlayer]"></PlayerCard>
        <div class="text-right">
          <button class="bg-gray-500 text-white font-bold py-2 px-4 rounded object-right" @click="hideDetails()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import '@/assets/css/tailwind.css'
import SVG from 'svg.js'
import imageMetadata from '../assets/RangersFCPostcardMetadata.json'
import PlayerCard from '../components/PlayerCard'

export default {
  data () {
    return {
      showDetails: false,
      selectedPlayer: 0,
      imagePath: '/img/rangers/RangersFCPostcardAutographs-New.png',
      modalContentClass: 'modal-content-top'
    }
  },
  components: {
    PlayerCard
  },
  computed: {
    players () {
      return imageMetadata.players
    },
    modalClass () {
      let modalClass = this.modalContentClass + ' absolute w-full sm:w-3/4 md:w-1/2 xl:w-1/3 bg-white shadow-lg rounded-lg p-4'
      return modalClass
    }
  },
  methods: {
    hideDetails () {
      this.showDetails = !this.showDetails
    }
  },
  mounted () {
    let self = this
    let postcard = SVG('drawing')

    // let postcardImage = postcard.image(this.imagePath).loaded(function imageLoaded (loader) {
    postcard.image(this.imagePath).loaded(function imageLoaded (loader) {
      // console.log(`Width: ${loader.width} Height: ${loader.height}`)
      // let box = postcard.viewbox(0, 0, loader.width, loader.height).attr({ preserveAspectRatio: true })
      postcard.viewbox(0, 0, loader.width, loader.height).attr({ preserveAspectRatio: true })
      // postcard.size(loader.width, loader.height)
      // console.log(`View box: ${JSON.stringify(box)}`)
    })

    imageMetadata.players.forEach(function readCoords (player) {
      let polygon = postcard.polygon(player.coords).fill({ color: '#fff', opacity: 0 }).stroke({ width: 0 })

      // polygon.mouseover(function polygonMouseOver () {
      polygon.click(function polygonClick () {
        // console.log(`${player.index} - ${player.name}`)
        // polygon.fill({ color: '#000', opacity: 0.2 })
        self.modalContentClass = 'modal-content-' + player.modal
        self.selectedPlayer = player.index
        self.showDetails = true
      })

      /* polygon.mouseout(function polygonMouseOut () {
        console.log('Inside polygon mouse out...')
        polygon.fill({ color: '#fff', opacity: 0 })
        // self.selectedPlayer = null
        self.showDetails = false
      })

      polygon.on('mouseenter', function polygonMouseEnter () {
        console.log('Inside polygon mouse enter...')
        polygon.fill({ color: '#000', opacity: 0.2 })
        self.selectedPlayer = player.index
        self.showDetails = true
      })

      polygon.on('mouseleave', function polygonMouseLeave () {
        console.log('Inside polygon mouse leave...')
        polygon.fill({ color: '#fff', opacity: 0 })
        self.showDetails = false
      }) */
    })
  }
}
</script>

<style scoped>
  #container {
    background-color: #005296;
  }

  #drawing {
    position: relative;
    height: 80vh;
  }

  .modal {
    background-color: rgba(0, 0, 0, 0.5);
    transform: scale(1.0);
    transition: visibility 2s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  }

  .modal-content {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
  }

  .modal-content-top {
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
  }

  .modal-content-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
  }

  .modal-content-bottom {
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
  }

</style>
