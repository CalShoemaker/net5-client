<template>
  <div class="home">
    <News />
  </div>
</template>

<script>
// @ is an alias to /src
import News from '@/components/news/index.vue'

export default {
  name: 'Home',
  components: {
    News
  }
}
</script>
