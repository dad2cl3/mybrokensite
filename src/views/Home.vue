<template>
  <div class="w-full flex flex-wrap justify-around">
    <div class="pt-2 pb-2" v-for="(card, i) in cards" :key="i">
    <!-- <SplashCard class="w-full" v-for="(card, i) in cards" :key="i" :splashCard="card"></SplashCard> -->
      <SplashCard class="w-9/10" :splashCard="card"></SplashCard>
    </div>
  </div>
</template>

<script>
import SplashCard from '../components/SplashCard'
import '@/assets/css/tailwind.css'

export default {
  data () {
    return {
      cards: [
        {
          routerLink: 'RangersFCPostcard',
          // imagePath: '/img/rangers/RangersFCPostcardAutographs-Small.png',
          imagePath: '/img/rangers/RangersFCPostcardAutographs-Square.png',
          imageTitle: '1947-48 Rangers FC Autograph Page',
          imageDescription: 'Collected autographs of the 1947-48 Rangers FC including ten members of the Rangers FC Hall of Fame, five members of the Scottish Football Hall of Fame, and one member of the Canada Soccer Hall of Fame.'
        },
        {
          routerLink: 'ChixAlbum',
          // imagePath: '/img/chix/ChixCoverSplash-Small.png',
          imagePath: '/img/chix/ChixCoverSplash-Square.png',
          imageTitle: 'Chix Bubble Gum Football Picture Album',
          imageDescription: '1956-57 Chix Confectionary Co. Ltd. Famous Footballers Series Two. The set consists of 48 tallboy cards featuring famous footballers from the 1940s and   1950s.'
        },
        {
          routerLink: 'ChixGraded',
          imagePath: '/img/chixgraded/ChixGradedSplash.png',
          imageTitle: '1956-57 Chix Confectionary Famous Footballers Series Two',
          imageDescription: 'Full set of PSA-graded 1956-57 Chix Confectionary Co. Ltd. Famous Footballers Series Two football cards.'
        },
        {
          routerLink: 'Woodburn',
          imagePath: '/img/woodburn/WoodburnCoverSplash.png',
          imageTitle: 'Willie Woodburn',
          imageDescription: 'Scottish footballer who earned 24 caps representing Scotland and made 325 appearances for the Glasgow Rangers. Member of the Rangers FC Hall of Fame and Scottish Football Hall of Fame.'
        },
        {
          routerLink: 'ENGvSCOProgram',
          imagePath: '/img/19470412program/19470412-EnglandvScotlandProgram-SplashPage.png',
          imageTitle: 'England v Scotland International Match Program',
          imageDescription: 'The match took place on April 12, 1947 at Empire Stadium in Wembley. It was played to a 1-1 draw in front of a crowd that numbered over 98,000 people and included the Prime Minister of Great Britain. The Scottish squad featured five players making their first international appearance.'
        },
        {
          routerLink: 'SportMagazine',
          imagePath: '/img/19480814sport/19480814-SportMagazine-SplashPage.png',
          imageTitle: 'Sport Magazine Vol. 4 No. 32',
          imageDescription: 'Sport Magazine Vol. 4 No. 32 published August 14th, 1948 featuring the treble winning Glasgow Rangers F.C.'
        }
      ]
    }
  },
  components: {
    SplashCard
  }
}
</script>

<style scoped>

</style>
