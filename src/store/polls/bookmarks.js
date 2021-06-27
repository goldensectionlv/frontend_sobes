export default {
    state: {
        params_active: false,
        questions_active: false,
        logic_active: false,
        conditions_active: false,
        respondents_active: true,
    },
    mutations: {
        switch_to_params(state) {
            state.params_active = true
            state.questions_active = false
            state.logic_active = false
            state.conditions_active = false
            state.respondents_active = false
        },
        switch_to_questions(state) {
            state.params_active = false
            state.questions_active = true
            state.logic_active = false
            state.conditions_active = false
            state.respondents_active = false
        },
        switch_to_logic(state) {
            state.params_active = false
            state.questions_active = false
            state.logic_active = true
            state.conditions_active = false
            state.respondents_active = false
        },
        switch_to_conditions(state) {
            state.params_active = false
            state.questions_active = false
            state.logic_active = false
            state.conditions_active = true
            state.respondents_active = false
        },
        switch_to_respondents(state) {
            state.params_active = false
            state.questions_active = false
            state.logic_active = false
            state.conditions_active = false
            state.respondents_active = true
        }

    },
    actions: {
        switch_to_params(ctx) {
            ctx.commit('switch_to_params')
        },
        switch_to_questions(ctx) {
            ctx.commit('switch_to_questions')
        },
        switch_to_logic(ctx) {
            ctx.commit('switch_to_logic')
        },
        switch_to_conditions(ctx) {
            ctx.commit('switch_to_conditions')
        },
        switch_to_respondents(ctx) {
            ctx.commit('switch_to_respondents')
        }
    },
    getters: {
        params_active(state) {
            return state.params_active
        },
        questions_active(state) {
            return state.questions_active
        },
        logic_active(state) {
            return state.logic_active
        },
        conditions_active(state) {
            return state.conditions_active
        },
        respondents_active(state) {
            return state.respondents_active
        }

    }
}
