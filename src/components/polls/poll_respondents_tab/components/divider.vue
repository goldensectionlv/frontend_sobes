<template>
  <div style="width: 100%; text-align: right">

    <div style="width: 100%; height: 1px; margin-top: 50px; background-color: #E3E3E3"
         class="d-flex"
         v-if="length > 1 && index < length - 1 "
    >
      <div
          style="width: 60px; height: 60px; background-color: #E7F6DB; font-size: 10pt; transform: translateY(-50%) translateX(50%)"
          class="rounded-lg d-flex align-center justify-center"
      >
        И
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    index: Number
  }
}
</script>

<style scoped>

</style>
