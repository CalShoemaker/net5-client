<template>
  <v-card class="news">
    <v-card-title>
       <v-icon>mdi-newspaper-variant-outline</v-icon> 
       <span>Latest News</span>
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
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },{
        date: 'June, 4 2021',
        title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        description: 'Aperiam, Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
      },{
        date: 'June, 5 2021',
        title: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea',
        description: 'Commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      },{
        date: 'June, 6 2021',
        title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ',
        description: 'Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
      },{
        date: 'June, 7 2021',
        title: 'Et harum quidem rerum facilis est et expedita distinctio am libero tempore, cum soluta nobis est eligendi',
        description: 'Optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
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
  .v-card-title {
    padding-left: 0;
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
