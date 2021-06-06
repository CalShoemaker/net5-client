<template>
    <v-content id="nav">
      <ul>
        <li><router-link to="/"><v-icon>mdi-widgets</v-icon>Latest News</router-link></li>
        <li><router-link to="/find-a-physician"><v-icon small>mdi-account</v-icon> Find a Physician</router-link></li>
        <li><router-link to="/forms"><v-icon>mdi-folder-open</v-icon> Forms</router-link></li>
      </ul>
    </v-content>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">

#nav {
  background:rgb(160, 29, 50);
  display: flex;
  flex: 1 0 auto;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex: 1 0 auto;
    font-size: 12px;
    li {
      flex-direction: row;
      flex: 1 1 auto;
      a{
        color: #fff;
        text-decoration: none;
        text-align: center;
        padding: 15px 20px;
        font-weight: bold;
        background:rgb(160, 29, 50);
        display: flex;
        flex-direction: column;
        text-align: center;
        
        .v-icon {
          display: flex;
          flex: 1 1 auto;
          margin: 0 auto;
        }

        &.router-link-exact-active {
          background: rgb(195, 16, 50);
        }
      }
    }
  }
  .info {
    background:rgb(20,60,108);
  }
}
</style>
