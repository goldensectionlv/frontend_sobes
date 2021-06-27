<template>
  <v-app style="background-color: black">
    <div class="wrapper rounded-t-xl">
      <header class="grid_header">

        <div class="header__logo"
             @click="$route.name === 'Home' ? '' : $router.push('/')"
        />

        <div class="header__search">
          <label>
            <input
                class="header__search__input"
                type="search"
                placeholder="Поиск по системе"
            >
          </label>
        </div>

        <div id="header__user" class="header__user">

          <!--          фото пользователя-->
          <div>
            <v-img class="header__user__photo mr-3"
                   src="https://www.themoviedb.org/t/p/w1280/ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg"></v-img>
          </div>
          <!--                    описание пользователя-->
          <div>
            <span>Александр С.</span>
            <p>Администратор</p>
          </div>
        </div>

      </header>

      <div class="grid_breadcrumbs">
        <breadcrumbs/>
      </div>

      <aside class="grid_sidebar">
        <div class="grid_sidebar__burger">
          <v-icon color="white">mdi-menu</v-icon>
        </div>
        <!--        контент сайдбара-->
        <sidebar_content class="side_content"/>
      </aside>

      <main class="grid_content">
        <router-view/>
      </main>
    </div>

  </v-app>
</template>

<script>
import sidebar_content from "@/components/sidebar_content";
import breadcrumbs from "@/components/breadcrumbs";

export default {
  name: 'App',

  components: {sidebar_content, breadcrumbs}
};
</script>

<style>

.wrapper {
  display: grid;
  background-color: white;
  min-height: 100vh;
  grid-template-columns: minmax(150px, 9vw) 1fr;
  grid-template-rows: minmax(auto, auto) 50px 1fr;
  grid-template-areas:
      "grid_header grid_header"
      "grid_breadcrumbs grid_breadcrumbs"
      "grid_sidebar grid_content";
}

.grid_header {
  display: grid;
  grid-area: grid_header;
  grid-template-columns: minmax(150px, auto) 1fr 1fr;
  padding: 18px 0 18px 0;
  align-items: center;
}

.header__logo {
  justify-self: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
}

.header__search {
}

.header__user {
  display: flex;
  align-items: center;
  justify-self: end;
  margin-right: 60px;
}

#header__user p {
  margin: 0;
  padding: 0;
  font-size: 10pt;
  color: darkgrey;
}

#header__user span {
  font-weight: bold;
  margin: 0;
}

.header__user__photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
}

.header__search__input {
  width: 100%;
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 6px;
}

.grid_breadcrumbs {
  grid-area: grid_breadcrumbs;
  display: grid;
  grid-template-columns: 1fr;
  align-self: start;
  grid-column: 2/3;

//border: 1px dashed rgba(0, 0, 0, .2);

}

.grid_sidebar {
  grid-area: grid_sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.grid_sidebar__burger {
  display: none;
}

.grid_content {
  grid-area: grid_content;
//border: 1px dashed rgba(0, 0, 0, .2);
}

p {
  margin: 0;
  padding: 0
}

@media (max-width: 750px) {
  .wrapper {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 90px 1fr;
    grid-template-areas:
      "grid_header grid_sidebar"
      "grid_content grid_content";
  }

  .header__logo {
    display: none;
  }

  .header__user {
    display: none;
  }

  .header__search {
    display: none;
  }

  .grid_sidebar {
    align-self: center;
    justify-self: end;
  }

  .grid_breadcrumbs {
    display: none;
  }

  .grid_sidebar__burger {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    margin-right: 15px;
    background-color: red;
    align-content: center;
    justify-content: center;
  }

  .side_content {
    display: none;
  }
}

</style>
