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
          'img/19470412program/01-19470412-EnglandvScotlandProgram-FrontCover.png',
          'img/19470412program/02-19470412-EnglandvScotlandProgram-InsideFrontCover.png',
          'img/19470412program/03-19470412-EnglandvScotlandProgram-Page1.png',
          'img/19470412program/04-19470412-EnglandvScotlandProgram-Page2.png',
          'img/19470412program/05-19470412-EnglandvScotlandProgram-Page3.png',
          'img/19470412program/06-19470412-EnglandvScotlandProgram-Page4.png',
          'img/19470412program/07-19470412-EnglandvScotlandProgram-Page5.png',
          'img/19470412program/08-19470412-EnglandvScotlandProgram-Page6.png',
          'img/19470412program/09-19470412-EnglandvScotlandProgram-Page7.png',
          'img/19470412program/10-19470412-EnglandvScotlandProgram-Page8.png',
          'img/19470412program/11-19470412-EnglandvScotlandProgram-Page9.png',
          'img/19470412program/12-19470412-EnglandvScotlandProgram-Page10.png',
          'img/19470412program/13-19470412-EnglandvScotlandProgram-Page11.png',
          'img/19470412program/14-19470412-EnglandvScotlandProgram-Page12.png',
          'img/19470412program/15-19470412-EnglandvScotlandProgram-InsideBackCover.png',
          'img/19470412program/16-19470412-EnglandvScotlandProgram-BackCover.png'
        ],
        pagesHiRes: [
          null,
          'img/19470412program/01-19470412-EnglandvScotlandProgram-FrontCover.png',
          'img/19470412program/02-19470412-EnglandvScotlandProgram-InsideFrontCover.png',
          'img/19470412program/03-19470412-EnglandvScotlandProgram-Page1.png',
          'img/19470412program/04-19470412-EnglandvScotlandProgram-Page2.png',
          'img/19470412program/05-19470412-EnglandvScotlandProgram-Page3.png',
          'img/19470412program/06-19470412-EnglandvScotlandProgram-Page4.png',
          'img/19470412program/07-19470412-EnglandvScotlandProgram-Page5.png',
          'img/19470412program/08-19470412-EnglandvScotlandProgram-Page6.png',
          'img/19470412program/09-19470412-EnglandvScotlandProgram-Page7.png',
          'img/19470412program/10-19470412-EnglandvScotlandProgram-Page8.png',
          'img/19470412program/11-19470412-EnglandvScotlandProgram-Page9.png',
          'img/19470412program/12-19470412-EnglandvScotlandProgram-Page10.png',
          'img/19470412program/13-19470412-EnglandvScotlandProgram-Page11.png',
          'img/19470412program/14-19470412-EnglandvScotlandProgram-Page12.png',
          'img/19470412program/15-19470412-EnglandvScotlandProgram-InsideBackCover.png',
          'img/19470412program/16-19470412-EnglandvScotlandProgram-BackCover.png'
        ]
      }
    }
  }
}
</script>
