<template>
    <v-content id="nav">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="link.to">
            <v-icon>{{ link.icon }}</v-icon> {{ link.title }}
          </router-link>
        </li>
      </ul>
    </v-content>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links: [{
        to: '/news',
        title: 'Latest News',
        icon: 'mdi-widgets'
      },{
        to: '/find-a-physician',
        title: 'Find a Physician',
        icon: 'mdi-account'
      },{
        to: '/forms',
        title: 'Forms',
        icon: 'mdi-folder-open'
      }]
    }
  }
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
