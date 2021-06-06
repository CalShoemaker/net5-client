<template>
  <v-container>
    <v-row>
      <v-col>
        <Header />
      </v-col>
    </v-row>    
    <v-row>
      <v-col>
        <router-view/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Footer />
      </v-col>
    </v-row>
  </v-container>
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
  text-align: center;
  color: #2c3e50;
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
