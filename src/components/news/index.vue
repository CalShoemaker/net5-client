<template>
  <v-card class="news">
    <v-card-title>
      Latest News
    </v-card-title>

    <v-list two-line>
      <template v-for="(article, index) in articles" :key="index" >
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
  </v-card>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      articles: [{
        date: 'June, 3 2021',
        title: 'Lorem ipsum dolar sit amet',
        description: 'She wore an itty bitty, teeny weeny, yellow polka dot bikini'
      },{
        date: 'June, 3 2021',
        title: 'Lorem ipsum dolar sit amet',
        description: 'She wore an itty bitty, teeny weeny, yellow polka dot bikini'
      },{
        date: 'June, 3 2021',
        title: 'Lorem ipsum dolar sit amet',
        description: 'She wore an itty bitty, teeny weeny, yellow polka dot bikini'
      },{
        date: 'June, 3 2021',
        title: 'Lorem ipsum dolar sit amet',
        description: 'She wore an itty bitty, teeny weeny, yellow polka dot bikini'
      }]
    }
  }
}
</script>
<style lang="scss">
.news {
  background: rgba(0,30,61,0.75);
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  .news-item {
    padding: 15px 0;
    display:block;
    .news-item--title{
      font-size: 18px;
      display: block;
    }
    .news-item--subtitle {
      font-style: italic;
    }
  }
}
</style>
