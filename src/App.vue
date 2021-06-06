<template>
  <v-app id="app">
    <Header />
    <v-content class="grow-4">
      <v-container fill-height fluid>
        <v-layout>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>  
    <v-footer class="shrink-4 pa-0" app>
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
  color: #fff;
  background-image: linear-gradient(to bottom right, rgb(90, 0, 216),rgb(186, 0, 98));
  .grow-4 {
    flex-grow: 4;
  }
  .shrink-4 {
    flex-shrink: 4;
  }
}

#nav {
  padding: 30px;
  display:flex;
  flex: 1 0 auto;
  a {
    font-weight: bold;
    color: #2c3e50;
  }
  a.router-link-exact-active {
    color: #42b983;
  }
} 
</style>
