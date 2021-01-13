<template>
  <div id="app" class="w-full h-auto md:h-screen bg-gray-200">
    <nav class="flex justify-between bg-gray-400 p-6">
      <div class="text-white mr-6">
        <router-link to="/">
          <span class="font-medium text-lg text-blue-700">My Broken Site</span>
        </router-link>
      </div>
      <div class="text-right">
        <button class="font-medium text-lg text-blue-700" @click="showAbout = !showAbout">About</button>
      </div>
    </nav>
    <div class="router-view sm:h-auto h-full w-full items-center flex">
      <router-view class="router-view"/>
    </div>
    <!-- Popup modal -->
    <div class="modal fixed inset-0 w-screen h-screen flex opacity-100" v-if="showAbout" @click="showAbout = !showAbout">
      <div class="modal-content absolute w-full sm:w-3/4 md:w-1/2 xl:w-1/3 bg-white shadow-lg rounded-lg p-4">
        <About></About>
      </div>
    </div>
  </div>
</template>

<script>
import About from './components/About'

export default {
  data () {
    return {
      showAbout: false
    }
  },
  components: {
    About
  },
  computed: {},
  methods: {},
  mounted () {}
}
</script>
<style>

  #app {
    align-items: center;
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
</style>
