<template>
  <div
  >
    <div
        v-for="(range, index) in options"
        :key="index"
        class="d-flex align-center"
        style="margin-bottom: 30px"
    >
      <div
          class="d-flex align-center left_side"
      >
        <div v-if="index !== 0"
             class="grey--text or_item mr-3"
        >
          или
        </div>
        {{ option_type }} {{ index + 1 }}
        <v-btn
            @click="options.splice(index,1)"
            icon
            x-small
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>

      <div

          class="d-flex align-center right_side"
      >
        <v-text-field
            style="max-width: 60px"
            v-model="range.from"
            label="от"
            hide-details
            outlined
        />
        <v-text-field
            style="max-width: 60px; margin-left: 30px"
            v-model="range.to"
            label="до"
            hide-details
            outlined
        />
      </div>
    </div>


  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    option_type: String
  }
}
</script>

<style scoped>
.or_item {
  width: 60px;
  height: 30px;
  background-color: #FEF4DD;
  font-size: 10pt;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

}

.left_side {
  width: 24%;
}

.right_side {
  width: 76%;
}

@media (max-width: 750px) {
  .or_item {
    display: none;
  }
  .left_side {
    width: auto;
  }
  .right_side {
    width: 50%;
    padding-left: 30px;
  }
}

</style>
