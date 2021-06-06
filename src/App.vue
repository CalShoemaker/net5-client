<template>
  <v-app>
    <v-content class="content sticky-footer">
      <v-container fill-height fluid>
        <Header />
        <v-layout>
            <router-view/>
          
        </v-layout>
      </v-container>
    </v-content>  
    <v-footer class="sticky pa-0" app>
      <Footer />
    </v-footer>
  </v-app>
</template>
<script>
// @ is an alias to /src
import Footer from '@/components/footer/index.vue'
import Header from '@/components/header/index.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  display: flex;
  flex-direction: column;
  height: 100%;

  .v-application {
    color: #fff;
    background-image: linear-gradient(to bottom right, rgb(5, 35, 67),rgb(167, 23, 59));
  }

  .sticky-footer {
    padding-bottom: 50px;
  }

  .sticky {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
  }
} 
</style>
