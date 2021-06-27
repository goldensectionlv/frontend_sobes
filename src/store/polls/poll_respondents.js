export default {
    state: {
        conditions: [
            {
                name: 'Возраст респондента',
                options: []
            },
            {
                name: 'Карта лояльности',
                statuses: ['Активна', 'Неактивна'],
                types: [
                    {
                        name: 'Gold',
                    },
                    {
                        name: 'Bronze',
                    }
                ]
            }
        ],
        card_types: ['Bronze', 'Gold'],
        poll_respondents: []
    },
    mutations: {
        user_condition_pusher(state) {
            state.poll_respondents.push({
                condition: '',
                options: []
            })
        },
        delete_condition(state, index) {
            state.poll_respondents.splice(index, 1)
        },
        delete_option(state, condition_index, option_index) {
            state.poll_respondents[condition_index].options.splice(option_index, 1)
        },
        add_ages(state, index) {
            state.poll_respondents[index].options.push({age1: 0, age2: 0})
        },
        add_card_options(state, index) {
            state.poll_respondents[index].options.push({type: '', status: ''})
        },
        clear_condition_options(state, index) {
            state.poll_respondents[index].options = []
        }
    },
    actions: {
        user_condition_pusher(ctx) {
            ctx.commit('user_condition_pusher')
        },
        delete_condition(ctx, index) {
            ctx.commit('delete_condition', index)
        },
        delete_option(ctx, condition_index, option_index) {
            ctx.commit('delete_option', condition_index, option_index)
        },
        add_ages(ctx, index) {
            ctx.commit('add_ages', index)
        },
        add_card_options(ctx, index) {
            ctx.commit('add_card_options', index)
        },
        clear_condition_options(ctx, index) {
            ctx.commit('clear_condition_options', index)
        }
    },
    getters: {
        conditions(state) {
            return state.conditions
        },
        card_types(state) {
            return state.card_types
        },
        poll_respondents(state) {
            return state.poll_respondents
        }
    }
}
