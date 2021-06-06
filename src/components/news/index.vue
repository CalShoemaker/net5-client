<template>
  <v-card class="news">
    <v-card-title>
      Latest News
    </v-card-title>

    <v-list two-line>
      <template v-for="(article, index) in articles" :key="index" >
      <v-list-item >
        <v-list-item-content>
          <v-list-item-subtitle>{{ article.date }}</v-list-item-subtitle>
          <v-list-item-title class="text-h5">
            {{ article.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
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
