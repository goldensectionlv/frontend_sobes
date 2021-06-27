<template>
  <div class="sidebar_content" style="width: 100%">


    <div class="sidebar__item"
         :class="$route.name === 'polls' || $route.name === '/polls/create_poll' ? 'sidebar__item__active' : ''"
         @click="$route.name === 'polls' ? '' : $router.push('/polls')"

    >
      <v-icon
          x-large
          :color="$route.name === 'polls' || $route.name === '/polls/create_poll' ? '#93BC02' : ''"
      >mdi-clipboard-list-outline
      </v-icon>
      <span>Опросы</span>

    </div>

    <div class="sidebar__item"
         :class="$route.name === 'users' || $route.name === 'users' ? 'sidebar__item__active' : ''"
         @click="$route.name === 'users' ? '' : $router.push('/users')"
    >
      <v-icon x-large
              :color="$route.name === 'users' ? '#93BC02' : ''"
      >mdi-account-multiple</v-icon>
      <span>Пользователи</span>
    </div>

    <div class="sidebar__item"
         :class="$route.name === 'black_lists' || $route.name === 'black_lists' ? 'sidebar__item__active' : ''"
         @click="$route.name === 'black_lists' ? '' : $router.push('/black_lists')"
    >
      <v-icon x-large
              :color="$route.name === 'black_lists' ? '#93BC02' : ''"
      >mdi-flag-variant-outline</v-icon>
      <span>Черные списки</span>
    </div>

    <div class="sidebar__item"
         :class="$route.name === 'call_center' || $route.name === 'call_center' ? 'sidebar__item__active' : ''"
         @click="$route.name === 'call_center' ? '' : $router.push('/call_center')"
    >
      <v-icon x-large
              :color="$route.name === 'call_center' ? '#93BC02' : ''"
      >mdi-phone</v-icon>
      <span>Колл-центр</span>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style>
.sidebar_content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sidebar__item {
  width: 90%;
  margin-bottom: 30px;
  padding: 15px 0 15px 0;
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
.sidebar__item {
  padding: 14px 0 14px 0;
}
</style>
