<template>
  <v-container>
    <News />
    <FindPhysician component="true" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import News from '@/components/news/index.vue'
import FindPhysician from '@/components/find-physician/index.vue'

export default {
  name: 'Home',
  components: {
    News,
    FindPhysician
  }
}
</script>
