<template>
  <div id="poll" style="width: 100%; max-width: 1250px">

    <h4 class="add_poll_header">Добавить опрос</h4>

    <div>
      <div style="width: 100%; min-height: 30vh">

        <!--            основной цикл с условиями-->
        <div id="conditions"
             v-for="(condition, index) in poll_respondents" :key="index"
             style="width: 100%">
          <div style="width: 100%">
            <div style="width: 100%" class="respondent-condition">
              <!--            левая часть с условием с пустым выбором-->
              <div class="respondent-condition__left_side">
                <span style="font-weight: bold">Условие {{ index + 1 }}</span>
              </div>
              <!--            правая часть условия с пустым инпутом-->
              <div class="respondent-condition__right_side">

                <v-select @change="clear_condition_options(index)"
                          v-model="poll_respondents[index].condition"
                          :items="conditions"
                          item-text="name"
                          label="Выберите условие"
                          solo
                />
              </div>
            </div>

            <!--              Опции для условия Возраст респондента-->
            <div v-if="poll_respondents[index].condition === conditions[0].name">

              <div style="width: 100%"
                   v-for="(option, option_index) in poll_respondents[index].options"
                   :key="option_index">

                <div style="width: 100%" class="respondent-condition__options">
                  <!--                  левая часть опций для возраста респондента-->
                  <div class="respondent-condition__options__age_left_container">

                    <div class="d-flex" style="margin: 15px 0 15px 0">
                      <span>Диапазон {{ option_index + 1 }}</span>
                      <v-btn icon
                             x-small
                             @click="delete_option(index, option_index)"
                             class="ml-1">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </div>
                  </div>

                  <!--                  правая часть часть опций для возраста респондента--->
                  <div class="respondent-condition__options__age_right_container">
                    <label>
                      <input type="text"
                             placeholder="123"
                             class="input_age"
                             style="margin-right: 30px"
                             v-model="poll_respondents[index].options[option_index].age1">
                    </label>
                    <label>
                      <input type="text"
                             placeholder="123"
                             class="input_age"
                             v-model="poll_respondents[index].options[option_index].age2">
                    </label>

                  </div>
                </div>
                <!--                иконка или-->
                <div class="respondent_age_or_container">
                  <div class="rounded-xl respondent_age_or_container__item"
                       v-if="poll_respondents[index].options.length >1 && option_index < poll_respondents[index].options.length -1">
                    или
                  </div>
                </div>
              </div>
              <!--                удаление условий и добавление диапазона-->
              <div class="respondent-condition__options__buttons">
                <div class="respondent-condition__options__buttons__container">
                  <v-btn @click="add_ages(index)"
                         outlined
                         small
                         color="#86A909"
                         class="btn-type-action">
                    <v-icon class="mr-1">mdi-plus</v-icon>
                    добавить диапазон
                  </v-btn>
                  <v-btn @click="delete_condition(index)"
                         outlined
                         small
                         color="red"
                         class="btn-type-action">
                    <v-icon class="mr-1">mdi-trash-can-outline</v-icon>
                    Удалить условие
                  </v-btn>
                </div>
              </div>


            </div>

            <!--              Опции для условия Карта лояльности-->
            <div v-if="poll_respondents[index].condition === conditions[1].name">
              <div style="width: 100%"
                   v-for="(option, option_index) in poll_respondents[index].options"
                   :key="option_index"
              >
                <!--                  левая часть опций Карта лояльности-->
                <div class="card_options_container">
                  <div class="respondent-condition__options__card_left_container">
                    <span>Тип {{ option_index + 1 }}</span>
                    <v-btn icon x-small
                           @click="delete_option(index, option_index)"
                           class="ml-1 mb-1">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                  <!--                  правая часть опций Карта лояльности-->
                  <div class="respondent-condition__options__card_right_container">
                    <v-select
                        v-model="poll_respondents[index].options[option_index]"
                        :items="conditions[1].types"
                        item-text="name"
                        label="Выберите тип"
                        solo
                        return-object
                    />
                    <v-select
                        v-model="poll_respondents[index].options[option_index].status"
                        :items="conditions[1].statuses"
                        label="Выберите статус"
                        solo
                    />
                  </div>
                </div>
              </div>

              <!--                кнопки добавления и удаления опций карты лояльности-->
              <div class="respondent-condition__options__buttons">

                <div class="respondent-condition__options__buttons__container">
                  <v-btn @click="add_card_options(index)"
                         outlined
                         small
                         class="btn-type-action"
                         color="#86A909">
                    <v-icon class="mr-1">mdi-plus</v-icon>
                    добавить тип
                  </v-btn>

                  <v-btn @click="delete_condition(index)"
                         outlined
                         small
                         class="btn-type-action"
                         color="red">
                    <v-icon class="mr-1">mdi-trash-can-outline</v-icon>
                    Удалить условие
                  </v-btn>
                </div>
              </div>
            </div>
          </div>

          <!--              разделитель-->
          <div style="width: 100%; text-align: right; padding-bottom: 3vh">

            <div style="width: 100%; height: 1px; margin-top: 50px; margin-bottom: 50px; background-color: #E3E3E3"
                 class="d-flex"
                 v-if="poll_respondents.length > 1 && index < poll_respondents.length - 1 "
            >
              <div
                  style="width: 60px; height: 60px; background-color: #E7F6DB; font-size: 10pt; transform: translateY(-50%) translateX(50%)"
                  class="rounded-lg d-flex align-center justify-center"
              >
                И
              </div>
            </div>

          </div>
        </div>

        <!--        блок добавления условия-->
        <div id="add_condition"
             @click="user_condition_pusher"
             class="add_condition">

          <img id="add_condition_icon"
               class="add_condition_icon"
               alt="icon"
               :src="require('@/assets/plus.svg')">

          <div id="add_condition_text"
               class="add_condition_text">
            Нажмите, чтобы добавить новое условие выборки.
            <p>Все условия Связываются между собой логическим И.</p>
          </div>


        </div>

        <div style="width: 100%; display: flex; justify-content: center; margin-top: 30px;">
          <v-btn @click="send_to_backend" class="green" style="color: white">Готово</v-btn>
        </div>

        <div v-if="poll_respondents.length !== 0"
             style="width: 100%; display: flex; justify-content: center; margin-top: 30px; padding-bottom: 100px;">
          {{ poll_respondents }}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters([
      'conditions',
      'card_types',
      'poll_respondents'
    ])
  },
  methods: {
    ...mapActions([
      'switch_to_respondents',
      'user_condition_pusher',
      'delete_condition',
      'delete_option',
      'add_ages',
      'add_card_options',
      'clear_condition_options'
    ]),

    async send_to_backend() {
      let response = ''
      try {
        response = await axios.post('backend_url/poll_respondents', this.poll_respondents)
      } catch (error) {
        response = error
        console.log(error)
        alert(error)
      }
      console.log(response)

      console.log(this.poll_respondents)
    }
  },
}
</script>

<style>
.add_poll_header {
  color: darkgrey;
  margin-bottom: 12px;
}

.input_age {
  max-width: 100px;
  height: 45px;
  border: 1px solid darkgrey;
  border-radius: 6px;
  padding-left: 6px;
}

.add_condition {
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  border: 3px solid #DDF1FC;
  cursor: pointer
}

.add_condition_icon {
  height: 20px;
  width: 20px
}

.add_condition_text {
  font-size: 12pt;
  font-weight: 100;
  margin-top: 10px;
  color: #3A914C;
  text-align: center;
}

.respondent-condition {
  display: flex;
  justify-content: space-between;
}

.respondent-condition__left_side {
  margin-top: 12px;
}

.respondent-condition__right_side {
  width: 70%;
}

.respondent-condition__options {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.respondent-condition__options__age_left_container {
  display: flex;
  justify-content: start;
  margin-right: 30px;
}

.respondent-condition__options__age_right_container {
  display: flex;
  align-items: center;
  width: 70%;
}

.respondent-condition__options__buttons {
  display: flex;
  align-items: center;
  justify-items: end;
  margin-top: 30px;
  width: 100%;
}

.respondent-condition__options__buttons__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 30%
}

.respondent_age_or_container {
  display: flex;
  width: 100%;
}

.respondent_age_or_container__item {
  width: 60px;
  height: 30px;
  background-color: #FEF4DD;
  font-size: 10pt;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card_options_container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.respondent-condition__options__card_left_container {
  margin-top: 12px;
}

.respondent-condition__options__card_right_container {
  display: flex;
  width: 70%
}
.btn-type-action {
  min-height: 45px;
}

@media (max-width: 750px) {
  .add_poll_header {
    margin-top: 12px;
  }

  .card_options_container {
    flex-direction: column;
    align-items: center;
  }

  .respondent-condition__options__card_right_container {
    width: 100%;
    flex-direction: column;
  }

  .respondent-condition__options__card_left_container {
    margin-bottom: 12px;
  }

  .respondent-condition {
    flex-direction: column;
  }

  .respondent-condition__left_side {
    margin: 0 0 12px 0;
  }

  .respondent-condition__right_side {
    width: 100%;
  }

  .respondent-condition__options {
    align-items: center;
    flex-direction: column;
    justify-content: center;

  }

  .respondent-condition__options__age_right_container {
    width: 100%;
    justify-content: center;
    margin: 10px 0 10px 0;
  }

  .respondent-condition__options__buttons__container {
    padding-left: 0;
  }

  .respondent-condition__options__buttons__container {
    flex-direction: column;
    padding-left: 0
  }

  .btn-type-action {
    margin-bottom: 15px;
    min-height: 45px;
  }

  .respondent_age_or_container {
    justify-content: center;
    margin: 15px 0 15px 0;
  }
}
</style>
