<template>
  <v-app id="app">
    <v-content>
    <v-container fill-height fluid>
      <v-layout fill-height class="flex-column">
        <v-flex>
          <Header />
        </v-flex>    
        <v-flex>
          <router-view/>
        </v-flex>
        <v-flex>
          <Footer />
        </v-flex>
      </v-layout>
    </v-container>
    </v-content>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-image: linear-gradient(to bottom right, rgb(90, 0, 216),rgb(186, 0, 98));
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
