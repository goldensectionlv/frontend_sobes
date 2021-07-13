<template>
  <div
      class="sidebar_content"
      style="width: 100%"
  >
    <sidebar_item
        title="Опросы"
        route_name="polls"
        route_name_2="/polls/create_poll"
        icon_name="mdi-clipboard-list-outline"
    />
    <sidebar_item
        title="Пользователи"
        route_name="users"
        icon_name="mdi-account-multiple"
    />
    <sidebar_item
        title="Черные списки"
        route_name="black_lists"
        icon_name="mdi-flag-variant-outline"
    />
    <sidebar_item
        title="Колл-центр"
        route_name="call_center"
        icon_name="mdi-phone"
    />

  </div>
</template>

<script>
import sidebar_item from "@/components/sidebar_content/sidebar_item";
export default {
  components: {
    sidebar_item
  }
}
</script>

<style>
.sidebar_content {
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>
