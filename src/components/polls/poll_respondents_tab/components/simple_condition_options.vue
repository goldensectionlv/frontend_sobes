<template>
  <div
      style="margin-top: 30px"
  >
    <div
        v-for="(select, index) in options"
        :key="index"
        class="d-flex align-center"
        style="margin-bottom: 30px"
    >
      <div
          class="d-flex align-center left_side"
      >
        {{ option_type }} {{ index + 1 }}
        <v-btn
            @click="options.splice(index,1)"
            icon
            x-small
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>

      <div class="right_side">
        <v-select
            style="width: 80%"
            v-model="options[index]"
            :items="my_select"
            hide-details
            single-line
            outlined
            :label="label"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    my_select: Array,
    option_type: String,
    label: String,
  }
}
</script>

<style scoped>
.left_side {
  width: 24%;
}

.right_side {
  width: 76%;
}


</style>
