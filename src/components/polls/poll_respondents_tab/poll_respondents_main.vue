<template>
  <div
      id="poll"
      style="padding-bottom: 10vh;"
  >
    <h4
        class="add_poll_header"
    >
      Добавить опрос
    </h4>
    <div
        v-for="(item, index) in user_conditions"
        :key="index"
    >

      <div
          class="d-flex align-center"
      >
        <div
            style="width: 24%; font-weight: bold"
        >
          Условие {{ index + 1 }}
        </div>

        <div
            style="width: 76%"
        >
          <v-select
              outlined
              @change="item.options = []"
              v-model="item.condition"
              :items="conditions"
              hide-details
              single-line
              label="Выбрать условие"
          />
        </div>
      </div>


      <div
          style="width: 100%"
          class="mt-6"
      >
        <!--        опции условий-->
        <respondents_age_options
            v-if="item.condition === 'Возраст респондента'"
            :options="item.options"
            option_type="Диапазон"
        />
        <simple_condition_options
            v-if="item.condition === 'Тип карты лояльности'"
            :options="item.options"
            :my_select="loyalty_card_types"
            option_type="Тип"
            label="Выберите тип"
        />
        <simple_condition_options
            v-if="item.condition === 'Статус карты лояльности'"
            :options="item.options"
            :my_select="card_status"
            option_type="Статус"
            label="Выберите статус"
        />
        <!--      кнопки-->
        <buttons
            :condition_name="item.condition"
            condition_check="Возраст респондента"
            :action="add_option_range"
            :index="index"
            btn_text="Добавить диапазон"
            :available_options_types="3"
            :max_options_length="item.options.length"

        />
        <buttons
            :condition_name="item.condition"
            condition_check="Тип карты лояльности"
            :action="add_option"
            :index="index"
            btn_text="Добавить тип"
            :available_options_types="loyalty_card_types.length"
            :max_options_length="item.options.length"
        />

        <buttons
            :condition_name="item.condition"
            condition_check="Статус карты лояльности"
            :action="add_option"
            :index="index"
            btn_text="Добавить статус"
            :available_options_types="card_status.length"
            :max_options_length="item.options.length"
        />
        <buttons
            v-if="item.condition === ''"
            :index="index"

        />
        <!--        разделитель-->
        <divider
            :length="user_conditions.length"
            :index="index"
            style="margin-bottom: 45px"
        />
      </div>
    </div>
    <!--    добавить условие-->
    <add_condition
        :action="add_condition"
        style="margin-top: 30px"
    />

    <div
        style="width: 100%; padding: 30px 0 30px 0"
        class="d-flex justify-center"
    >
      <v-btn
          class="green white--text"
          @click="send_to_backend"
      >
        Отправить на сервер
      </v-btn>
    </div>

    <div style="padding: 30px" class="grey--text">
      {{ user_conditions }}
    </div>


  </div>
</template>

<script>
import respondents_age_options from "@/components/polls/poll_respondents_tab/components/respondents_age_options";
import simple_condition_options from "@/components/polls/poll_respondents_tab/components/simple_condition_options";
import buttons from "@/components/polls/poll_respondents_tab/components/buttons";
import divider from "@/components/polls/poll_respondents_tab/components/divider";
import add_condition from "@/components/polls/poll_respondents_tab/components/add_condition";
import axios from 'axios'
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    respondents_age_options,
    simple_condition_options,
    buttons,
    divider,
    add_condition
  },
  computed: {
    ...mapGetters([
      'user_conditions',
      'conditions',
      'loyalty_card_types',
      'card_status'
    ])
  },
  methods: {
    ...mapActions([
      'add_condition',
      'delete_condition',
      'add_option',
      'add_option_range'
    ]),
    async send_to_backend() {
      let response = ''
      try {
        response = await axios.post('backend_url/poll_respondents', this.user_conditions)
      } catch (error) {
        response = error
        console.log(error)
        alert('Посмотрите отправленный объект в консоли')
      }
      console.log(response)
      console.log(this.user_conditions)
    }

  },


}
</script>

<style>
.add_poll_header {
  color: darkgrey;
  margin-bottom: 12px;
}

.buttons_container {
  width: 100%;
  padding-left: 24%;
}

@media (max-width: 750px) {

  .buttons_container {
    padding-left: 0;
    flex-direction: column;
  }

  .margin {
    margin-top: 15px;
  }
}
</style>
