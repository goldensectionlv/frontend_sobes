<template>
  <div class="sidebar__item"
       :class="$route.name === route_name || $route.name === route_name_2 ? 'sidebar__item__active' : ''"
       @click="$route.name === route_name ? '' : $router.push('/' + route_name)"

  >
    <v-icon
        x-large
        :color="$route.name === route_name || $route.name === route_name_2 ? '#93BC02' : ''"
    >{{ icon_name }}
    </v-icon>
    <span>{{ title }}</span>

  </div>
</template>

<script>
export default {
  props: {
    route_name: String,
    route_name_2: String,
    icon_name: String,
    title: String
  }
}
</script>

<style scoped>
.sidebar__item {
  width: 90%;
  margin-bottom: 30px;
  padding: 14px 0 14px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  font-size: 10pt;
  text-align: center;
  cursor: pointer;
}

.sidebar__item__active {
  border-radius: 10px;
  border: 1px solid #DBF28B;
  box-sizing: border-box;
  color: #93BC02;
}
</style>
