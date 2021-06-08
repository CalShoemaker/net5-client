<template>
  <v-container>
    <News />
  </v-container>
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
