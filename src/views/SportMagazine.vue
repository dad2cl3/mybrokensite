<template>
  <Flipbook :book="book"></Flipbook>
</template>

<script>
import Flipbook from '../components/MyFlipbook.vue'

export default {
  components: {
    Flipbook
  },
  data () {
    return {
      book: {
        pages: [
          null,
          'img/19480814sport/01-19480814-SportMagazine-FrontCover.png',
          'img/19480814sport/02-19480814-SportMagazine-Page2.png',
          'img/19480814sport/03-19480814-SportMagazine-Page3.png',
          'img/19480814sport/04-19480814-SportMagazine-Page4.png',
          'img/19480814sport/05-19480814-SportMagazine-Page5.png',
          'img/19480814sport/06-19480814-SportMagazine-Page6.png',
          'img/19480814sport/07-19480814-SportMagazine-Page7.png',
          'img/19480814sport/08-19480814-SportMagazine-Page8.png',
          'img/19480814sport/09-19480814-SportMagazine-Page9.png',
          'img/19480814sport/10-19480814-SportMagazine-Page10.png',
          'img/19480814sport/11-19480814-SportMagazine-Page11.png',
          'img/19480814sport/12-19480814-SportMagazine-Page12.png',
          'img/19480814sport/13-19480814-SportMagazine-Page13.png',
          'img/19480814sport/14-19480814-SportMagazine-Page14.png',
          'img/19480814sport/15-19480814-SportMagazine-Page15.png',
          'img/19480814sport/16-19480814-SportMagazine-BackCover.png'
        ],
        pagesHiRes: [
          null,
          'img/19480814sport/large/01-19480814-SportMagazine-FrontCover.png',
          'img/19480814sport/large/02-19480814-SportMagazine-Page2.png',
          'img/19480814sport/large/03-19480814-SportMagazine-Page3.png',
          'img/19480814sport/large/04-19480814-SportMagazine-Page4.png',
          'img/19480814sport/large/05-19480814-SportMagazine-Page5.png',
          'img/19480814sport/large/06-19480814-SportMagazine-Page6.png',
          'img/19480814sport/large/07-19480814-SportMagazine-Page7.png',
          'img/19480814sport/large/08-19480814-SportMagazine-Page8.png',
          'img/19480814sport/large/09-19480814-SportMagazine-Page9.png',
          'img/19480814sport/large/10-19480814-SportMagazine-Page10.png',
          'img/19480814sport/large/11-19480814-SportMagazine-Page11.png',
          'img/19480814sport/large/12-19480814-SportMagazine-Page12.png',
          'img/19480814sport/large/13-19480814-SportMagazine-Page13.png',
          'img/19480814sport/large/14-19480814-SportMagazine-Page14.png',
          'img/19480814sport/large/15-19480814-SportMagazine-Page15.png',
          'img/19480814sport/large/16-19480814-SportMagazine-BackCover.png'
        ]
      }
    }
  }
}
</script>
