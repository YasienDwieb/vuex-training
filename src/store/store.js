import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },
    getters:{
        saleProducts: state => {
            return state.products.map(p => {
                return {
                    ...p,
                    price: p.price/2
                }
            });
        }
    },
    mutations:{
        reducePrice: (state, payload) =>{
            return state.products.forEach(p => {
                p.price -= payload.ammount;
            });
        }
    },
    actions:{
        reducePrice: (context, payload) => {
            setTimeout(()=>{context.commit('reducePrice', payload)}, 3000)
        }
    }
});