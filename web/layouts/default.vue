<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Hello
          </v-list-item-title>
          <v-list-item-subtitle>
            Ajarn Nacha 99
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
      <template v-slot:append >
        <div class="pa-2" v-if="login">
          <v-btn color="error" block>
            Logout
          </v-btn>
        </div>
        <div class="pa-2" v-else>
          <v-btn color="error" block @click="$router.push('/login')">
            login
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="white" flat>
      <v-app-bar-nav-icon v-if="!$vuetify.breakpoint.mobile" @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <!-- menu -->
      <v-menu v-model="profileMenu" :close-on-content-click="false" offset-y bottom left :nudge-bottom="20"
        content-class="rounded-xl">
        <template v-slot:activator="{ on }">
          <v-avatar size="30" color="primary" v-on="on">
            <v-icon size="20" color="#FFFFFF">mdi-account</v-icon>
          </v-avatar>
        </template>
        <v-card rounded="xl" elevation="0" width="25rem">
          <v-list v-if="login">
            <v-list-item @click="$router.push('/profile')">
              <v-list-item-avatar size="50" color="primary">
                <v-icon size="35" color="#FFFFFF">mdi-account</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list v-else>
            <v-list-item @click="$router.push('/login')">
              <v-list-item-avatar size="50" color="primary">
                <v-icon size="35" color="#FFFFFF">mdi-account</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Guest</v-list-item-title>
                <v-list-item-subtitle>Click to login</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded block small color="primary" to="/user/login">
              <v-icon small>mdi-login</v-icon>
              <span class="ml-1">LOGIN</span>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- bottom-navigation -->
    <v-bottom-navigation v-if="$vuetify.breakpoint.mobile" app color="primary"
      style="border-top: solid 1px primary; height: 80px" height="auto" fixed grow :value="1" class="d-print-none">
      <v-btn to="/" exact style="height: 80px; padding-bottom: 10px">
        <span>Home</span>
        <v-icon size="35">mdi-home</v-icon>
      </v-btn>
      <v-btn to="/profile" nuxt style="height: 80px; padding-bottom: 10px">
        <span>Profile</span>
        <v-icon size="35">mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!-- footer -->
    <v-footer color="primary" :absolute="!fixed" app>
      <span class="white--text">@99-project-never-sleep</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      name: "Nacha",
      profileMenu: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-account',
          title: 'Profile',
          to: '/profile',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Hello Ajarn Nacha 99',
    }
  },
}
</script>
