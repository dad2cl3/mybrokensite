<template>
  <MyFlipbook :book="book"></MyFlipbook>
</template>

<script>
import MyFlipbook from '../components/MyFlipbook'
import metadata from '@/assets/ChixAlbum.json'

export default {
  name: 'ChixAlbum',
  components: {
    MyFlipbook
  },
  data () {
    return {
      /* book: {
        pages: [
          null,
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_001.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_002.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_003.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_004.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_005.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_006.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_007.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_008.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_009.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_010.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_011.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_012.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_013.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_014.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_015.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/lowRes/ChixAlbum_016.jpg'
        ],
        pagesHiRes: [
          null,
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_001.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_002.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_003.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_004.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_005.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_006.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_007.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_008.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_009.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_010.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_011.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_012.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_013.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_014.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_015.jpg',
          'https://s3.amazonaws.com/personal-collection/sports/soccer/1957ChixConfectionarySeries2Book/hiRes/ChixAlbum_016.jpg'
        ]
      } */
    }
  },
  computed: {
    pagesLoRes () {
      let rootUrl = metadata.root
      let fileExtension = metadata.extension
      let lowResFolder = metadata.lowResFolder
      let images = metadata.images
      let pagesLoRes = []
      pagesLoRes.push(null)

      images.forEach(function buildPaths(image) {
        let path = `${rootUrl}/${lowResFolder}/${image.name}.${fileExtension}`
        // console.log(path) // debug
        pagesLoRes.push(path)
      })
      return pagesLoRes
    },
    pagesHiRes () {
      let rootUrl = metadata.root
      let fileExtension = metadata.extension
      let hiResFolder = metadata.hiResFolder
      let images = metadata.images
      let pagesHiRes = []
      pagesHiRes.push(null)

      images.forEach(function buildPaths(image) {
        let path = `${rootUrl}/${hiResFolder}/${image.name}.${fileExtension}`
        // console.log(path) // debug
        pagesHiRes.push(path)
      })
      return pagesHiRes
    },
    book () {
      return {
        pages: this.pagesLoRes,
        pagesHiRes: this.pagesHiRes
      }
    }
  }
}
</script>

<style scoped>
</style>
