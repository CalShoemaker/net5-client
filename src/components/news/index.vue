<template>
  <v-card class="news">
    <v-card-title>
       <v-icon>mdi-newspaper-variant-outline</v-icon> 
       <span>Latest News</span>
    </v-card-title>

    <v-list two-line>
      <template v-for="(article, index) in filtered" :key="index" >
        <v-list-item class="news-item">
          <v-list-item-content >
            <v-list-item-subtitle class="news-item--subtitle">{{ article.date }}</v-list-item-subtitle>
            <v-list-item-title class="news-item--title">
              {{ article.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <hr />
      </template>
    </v-list>
    <div class="text-center pt-5">
      <button v-if="allNews" @click="allNews = false">
        <v-icon large>mdi-arrow-up-drop-circle-outline</v-icon>
      </button>
      <button v-if="!allNews" @click="allNews = true">
        <v-icon large>mdi-arrow-down-drop-circle-outline</v-icon>
      </button>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'News',
  computed: {
    ...mapState({
      articles: state => state.news.articles
    }),
    topThree() {
      return this.articles.slice(0,3);
    },
    filtered() {
      return this.allNews ? this.articles : this.topThree
    }
  },
  data() {
    return {
      allNews: false   
    }
  },
  props: ['component'],
  mounted () {
    this.$store.dispatch('news/getAllNews')
  }
}
</script>
<style lang="scss" scoped>
.news {
  background: rgba(0,30,61,0.75);
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  .v-card-title {
    padding-left: 0;
    span {
      display: inline-block;
      padding-left: 8px;
    }
  }

  .news-item {
    padding: 15px 0;
    display:block;
    .news-item--title{
      font-size: 16px;
      display: block;
    }
    .news-item--subtitle {
      font-style: italic;
    }
  }
}
</style>
