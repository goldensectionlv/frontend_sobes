<template>
  <div class="create_poll_container">

    <div class="poll_bookmarks">
      <span class="poll_bookmark"
            :class="params_active ? 'bookmark_active' : ''"
            @click="switch_to_params"
      >Параметры</span>
      <span class="poll_bookmark"
            :class="questions_active ? 'bookmark_active' : ''"
            @click="switch_to_questions"
      >Вопросы</span>
      <span class="poll_bookmark"
            :class="logic_active ? 'bookmark_active' : ''"
            @click="switch_to_logic"
      >Логика</span>
      <span class="poll_bookmark"
            :class="conditions_active ? 'bookmark_active' : ''"
            @click="switch_to_conditions"
      >Условия</span>
      <span class="poll_bookmark"
            :class="respondents_active ? 'bookmark_active' : ''"
            @click="switch_to_respondents"
      >Респонденты</span>
    </div>

    <div class="poll_body d-flex justify-center" style="width: 100%">
      <poll_conditions v-if="conditions_active"/>
      <poll_logic v-if="logic_active"/>
      <poll_params v-if="params_active"/>
      <poll_questions v-if="questions_active"/>
      <poll_respondents v-if="respondents_active"/>
    </div>


  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import poll_respondents from "@/components/polls/poll_respondents";
import poll_conditions from "@/components/polls/poll_conditions";
import poll_logic from "@/components/polls/poll_logic";
import poll_params from "@/components/polls/poll_params";
import poll_questions from "@/components/polls/poll_questions";

export default {
  components: {poll_respondents, poll_conditions, poll_logic, poll_params, poll_questions},
  computed: {
    ...mapGetters([
      'params_active',
      'questions_active',
      'logic_active',
      'conditions_active',
      'respondents_active'
    ])
  },
  methods: {
    ...mapActions([
      'switch_to_params',
      'switch_to_questions',
      'switch_to_logic',
      'switch_to_conditions',
      'switch_to_respondents'])
  }
}
</script>

<style>
.create_poll_container {
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr;
  //justify-items: center;
}

.poll_bookmarks {
  display: grid;
  align-items: start;
  grid-template-columns: repeat(5, 1fr);
//padding: 0 30px 0 30px; margin: 0 30px 0 30px; border-bottom: 1px solid #C1E837;

}

.poll_bookmark {
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 0 15px 0 15px;
  color: #007017;
  cursor: pointer;
}

.bookmark_active {
  border-bottom: 1px solid #93BC02;
  box-sizing: content-box;
  font-weight: bold;
  color: black;

}

.poll_body {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px 30px 0 30px;
  //background-color: red;
}

@media (max-width: 750px) {
  .create_poll_container {
    grid-template-rows: minmax(50px, 250px) 1fr;
  }

  .poll_bookmarks {
    grid-template-columns: 1fr;
    padding: 0;
    border-top: 1px solid #C1E837;
  }

  .poll_bookmark {
    align-items: center;
  }

  .poll_body {
    padding: 10px 30px 0 30px;
  }
}
</style>
