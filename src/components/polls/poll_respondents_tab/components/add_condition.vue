<template>
  <div
      @click="action"
      class="add_condition">

    <v-icon color="green">mdi-plus</v-icon>

    <div
        class="add_condition_text green--text"
    >
      Нажмите, чтобы добавить новое условие выборки.
      <p>Все условия Связываются между собой логическим И.</p>
    </div>


  </div>
</template>

<script>
export default {
  props: {
    action: Function
  }
}
</script>

<style scoped>
.add_condition {
  width: 100%;
  height: 20vh;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  border: 3px solid #DDF1FC;
  cursor: pointer
}
.add_condition_text {
  font-size: 12pt;
  margin-top: 10px;
  font-weight: 400;
  text-align: center;
}
</style>
