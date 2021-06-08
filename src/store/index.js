import news from './modules/news'
import { createStore } from 'vuex'

export const store = createStore({
    modules: {
        news
    }
})
