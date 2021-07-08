export default {
    state: {
        poll_tabs: {
            params: {
                name: 'Параметры',
                active: false
            },
            questions: {
                name: 'Вопросы',
                active: false
            },
            logic: {
                name: 'Логика',
                active: false
            },
            conditions: {
                name: 'Условия',
                active: false
            },
            respondents: {
                name: 'Респонденты',
                active: true
            },
        }
    },
    mutations: {
        switch_tab(state, to_tab) {
            state.poll_tabs.params.active = to_tab === state.poll_tabs.params.name
            state.poll_tabs.questions.active = to_tab === state.poll_tabs.questions.name
            state.poll_tabs.logic.active = to_tab === state.poll_tabs.logic.name
            state.poll_tabs.conditions.active = to_tab === state.poll_tabs.conditions.name
            state.poll_tabs.respondents.active = to_tab === state.poll_tabs.respondents.name
        }
    },
    actions: {
        switch_tab(ctx, to_tab) {
            ctx.commit('switch_tab', to_tab)
        }
    },
    getters: {
        poll_tabs(state) {
            return state.poll_tabs
        }

    }
}
