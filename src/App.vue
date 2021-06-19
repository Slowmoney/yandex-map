<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
          Открыть форму
        <v-btn @click="openForm" icon>
          <v-icon>mdi-form-select</v-icon>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <Form ref="form"></Form>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import Form from './components/Form.vue';
import HelloWorld from "./components/HelloWorld";

export default {
    name: "App",

    components: {
        HelloWorld,
        Form,
    },

    data: () => ({

    }),
    methods: {
        openForm(){
            this.$refs.form.$emit('open')
        }
    },
};
</script>
