<template>
  <v-container>
    <FindPhysician />
  </v-container>
</template>

<script>
// @ is an alias to /src
import FindPhysician from '@/components/find-physician/index.vue'

export default {
  name: 'Home',
  components: {
    FindPhysician
  }
}
</script>
