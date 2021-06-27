<template>
  <div id="breadcrumbs" class="d-flex"
       style="width: 100%; display: flex; align-items: center; font-size: 10pt">

    <span>
      <v-icon class="mr-1" small @click="$route.name === '/' ? '' : $router.push('/')">
        mdi-home
      </v-icon>

      <v-icon class="mr-1" small v-if="path_array[0] !== ''">
        mdi-arrow-right
      </v-icon>
    </span>

    <div v-for="(path, index) in path_array" :key="path">

      <span  class="mr-1"
          :style="index === path_array.length - 1 ? 'color: grey' : 'cursor: pointer'"
            @click="index === path_array.length - 1 ? '' : $router.push('/' + path)">
        {{ translated_path[path] }}
      </span>
      <v-icon class="mr-1" small v-if="index < path_array.length - 1 && path_array[0] !== ''">mdi-arrow-right</v-icon>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path_array: [],
      translated_path: {
        'polls': 'Опросы',
        'create_poll': 'Создать опрос',
        'users': 'Пользователи',
        'black_lists': 'Черные списки',
        'call_center': 'Колл-центр'
      }
    }
  },
  watch: {
    $route(to) {
      let path_array = to.fullPath.split('/')
      for (let i = 0; i < path_array.length; i++) {
        if (path_array[i] === '') {
          path_array.splice(i, 1)
        }
      }
      this.path_array = path_array
    }
  },
}
</script>

<style>

</style>
