<template>
  <div
      class="d-flex buttons_container"
      :class="available_options_types !== max_options_length ? 'justify-space-between' : 'justify-end'"
      v-if="condition_name !== '' && condition_name === condition_check"
  >
    <v-btn
        class="white--text"
        v-if="condition_check !== '' && condition_check === condition_name && available_options_types !== max_options_length"
        @click="action(index)"
        color="green"
        outlined
    >
      <v-icon left>mdi-plus</v-icon>
      {{ btn_text }}
    </v-btn>

    <v-btn
        class="white--text margin"
        @click="delete_condition(index)"
        outlined
        color="red"

    >
      <v-icon left>mdi-delete</v-icon>
      Удалить условие
    </v-btn>
  </div>

</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    condition_name: String,
    condition_check: String,
    action: Function,
    index: Number,
    btn_text: String,
    available_options_types: Number,
    max_options_length: Number
  },
  methods: mapActions(['delete_condition'])
}
</script>

<style scoped>

</style>
