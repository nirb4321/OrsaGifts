<template>
<div class = "gallery">
  <lingallery :width="width" :height="height" :items="items"/>
</div>
</template>
<script>
  import Lingallery from 'lingallery';
  export default {
    data() {
      return {
        width: 600,
        height: 400,
        items: [{
          src: 'https://picsum.photos/600/400/?image=0',
          thumbnail: 'https://picsum.photos/64/64/?image=0',
          id: 'someid1'
        },
        {
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        },
              ]};
    },
    components: {
      Lingallery
    }
  }
</script>

<style scoped>
.gallery {
max-width: 50%;
  height: auto;
}
</style>