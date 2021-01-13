<template>
  <div class="about-container px-3 py-3">
    <div class="bg-gray-200 rounded shadow-2xl clearfix">
      <div class="flex-col pt-2" v-for="(section, i) in about.sections" :key="i">
        <div class="text-left pl-2">
          <span class="text-xl font-medium">{{ section.title }}</span>
        </div>
        <div class="py-2 px-8">
          <p class="font-medium">{{ section.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About.vue',
  data () {
    return {
      about: {
        sections: [
          {
            title: 'About The Site',
            text: 'The site will likely never actually be finished. There will always be some other feature or some other content that I want to add. Also, my interest in working on the site will ebb and flow. I have ADHD. What can I say?!?'
          },
          {
            title: 'About Me',
            // text: 'I have been collecting trading cards, comic books, and sports memorabilia on and off throughout my life. Sadly, I was one of those kids who sold his collection for peanuts as a teenager not realizing all those rookie cards from the early \'80s would become so valuable years later. What I do have left is in boxes and has moved with us through multiple homes and multiple cities so I finally decided either it comes out of the closet or it gets sold or thrown out.'
            text: 'I like collecting trading cards, comic books, and sports memorabilia as well as photography and computer programming. The site combines all three of my joys in order to allow me to take my collection with me.'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
