<template>
  <v-container>
    <!-- Loop through an array of users -->
    <v-card
      v-for="(user, index) in users"
      :key="index"
      flat
      outlined
      class="overflow-hidden mx-auto mt-2"
      rounded="xl"
      max-width="28rem"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar size="80" color="primary">
    <v-icon size="40" dark>{{ user.icon }}</v-icon>
  </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="ma-2 text--text font-weight-bold">
              {{ user.name }}
            </v-list-item-title>

            <v-list-item-subtitle class="ma-2 font-weight-bold">
              StudentID : {{ user.studentID }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <h4 class="ml-5 mt-n2 text--text">Information</h4>
      <h3 class="ml-5 text-caption font-weight-regular mb-2">
        Email : {{ user.email }}
      </h3>
    </v-card>
    <br />
    <v-card flat class="overflow-hidden mx-auto mt-3" rounded="xl" max-width="28rem">
      <v-btn color="error" large block rounded>
        <v-icon left> mdi-logout </v-icon>
        Logout
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          icon:'mdi-account-injury',
          name: 'KRAIWIT SUDNAEN',
          studentID: '6431503006',
          email: '6431503006@lamduan.mfu.ac.th',
        },
       {
         icon:'mdi-account-school',
          name: 'JIRAYU BOONKHUN',
          studentID: '6431503008',
          email: '6431503008@lamduan.mfu.ac.th',
        },
        {
          icon:'mdi-account-tie-hat',
          name: 'PATTARAPON BUNCHUAI',
          studentID: '6431503044',
          email: '6431503044@lamduan.mfu.ac.th',
        },
        {
          icon:'mdi-account',
          name: 'PATTRAPORN SONSANG',
          studentID: '6431503045',
          email: '6431503045@lamduan.mfu.ac.th',
        },
      ],
    };
    
  },
};
</script>
