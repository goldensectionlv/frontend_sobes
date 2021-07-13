export default {
    state: {
        user_conditions: [],
        conditions: ['Возраст респондента', 'Тип карты лояльности', 'Статус карты лояльности'],
        loyalty_card_types: ['Gold', 'Bronze'],
        card_status: ['Активна', 'Неактивна'],
    },
    mutations: {
        add_condition(state) {
            state.user_conditions.push({condition: '', options: []})
        },
        delete_condition(state, index) {
            state.user_conditions.splice(index, 1)
        },
        add_option(state, index) {
            state.user_conditions[index].options.push('')
        },
        add_option_range(state, index) {
            state.user_conditions[index].options.push({from: '', to: ''})
        }
    },
    actions: {
        add_condition(ctx) {
            ctx.commit('add_condition')
        },
        delete_condition(ctx, index) {
            ctx.commit('delete_condition', index)
        },
        add_option(ctx, index) {
            ctx.commit('add_option', index)
        },
        add_option_range(ctx, index) {
            ctx.commit('add_option_range', index)
        }
    },
    getters: {
        user_conditions(state) {
            return state.user_conditions
        },
        conditions(state) {
            return state.conditions
        },
        loyalty_card_types(state) {
            return state.loyalty_card_types
        },
        card_status(state) {
            return state.card_status
        }
    }
}
