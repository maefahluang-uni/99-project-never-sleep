<template>
  <v-container
    style="height: 100%"
    class="d-flex flex-column align-center justify-center"
    fluid
  >
    <v-card rounded="xl" class="overflow-hidden" width="28rem">
      <v-card-text>
        <div
          class="text--text font-weight-black text-center text-h5 mb-10 md-md-12 mt-8"
        >
          SIGN IN as User
        </div>
        <v-row class="mx-2 mx-md-5">
          <v-col cols="12" class="error--text">
            <span v-if="error"> * {{ error }} </span>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="user.username"
              label="Username"
              rounded
              outlined
              dense
              hide-details="auto"
              persistent-placeholder
              placeholder="You username"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="user.password"
              label="Password"
              rounded
              outlined
              dense
              hide-details="auto"
              persistent-placeholder
              placeholder="Your password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              @keydown.enter="login"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="d-flex flex-column justify-center">
            <v-divider></v-divider>
            <v-btn color="primary" class="mb-5 mt-5" rounded @click="login">
              <v-responsive min-width="10rem">
                <v-icon left> mdi-login </v-icon> Login
              </v-responsive>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  layout: 'login',

  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      show: false,
      error: '',
    }
  },

  methods: {
    async login() {
      if (!this.user.username || !this.user.password) {
        this.error = 'Please enter username and password'
        return
      }
      try {
        await this.$auth.loginWith('custom', { data: this.user })
      } catch (error) {
        this.error = error.response?.data?.message || 'An error occurred'
      }
    },
  },
}
</script>
