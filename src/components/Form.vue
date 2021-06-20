<template>
  <v-dialog v-model="form" fullscreen hide-overlay transition="dialog-bottom-transition" scrollable>
    <v-card tile>
      <v-toolbar flat dark color="primary">
        <v-btn icon dark @click="hide">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Добавление геозон</v-toolbar-title>
      </v-toolbar>
      <v-form ref="form" v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field type="text" v-model="$store.state.form.name" label="Название" :rules="nameRules" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-select item-text="name" item-value="name" v-model="$store.state.form.type" :items="markerTypes" required></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field type="text" v-model="$store.state.form.hint" label="Подсказка" required></v-text-field>
            </v-col>
            <v-col cols="12" style="max-height: 400px;overflow-y: auto;">
              <component v-model="$store.state.form.coords" :is="getMarkerComponent($store.state.form.type)"></component>
            </v-col>
            <v-col cols="12" md="8" v-show="['Polygon', 'Rectangle', 'Circle', 'Polyline'].includes($store.state.form.type)">
              <v-row>
                <v-col v-show="$store.state.form.type !== 'Polyline'">
                  <v-checkbox v-model="$store.state.form.fill.enable">Заливка</v-checkbox>
                  <v-color-picker v-model="$store.state.form.fill.color" class="ma-2" hide-canvas></v-color-picker>
                </v-col>
                <v-col>
                  <v-checkbox v-model="$store.state.form.stroke.enable">Обводка</v-checkbox>
                  <v-color-picker v-model="$store.state.form.stroke.color" class="ma-2" hide-canvas></v-color-picker>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn :disabled="!valid" @click="add">{{(!~indexByName)?"Добавить":"Сохранить"}}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-card-text>
        <v-list three-line subheader>
          <v-subheader>Список геозон</v-subheader>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <v-simple-checkbox :indeterminate="selectAllIndeterminate" :value="selectAllState" @click="selectAll"></v-simple-checkbox>
                  </th>
                  <th class="text-left"> Цвет </th>
                  <th class="text-left"> Название </th>
                  <th class="text-left"> Подсказка </th>
                  <th class="text-left"> Фигура </th>
                  <th class="text-left"> Скрыть на карте </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in $store.state.points" :key="i">
                  <td>
                    <v-simple-checkbox v-model="item.select"></v-simple-checkbox>
                  </td>
                  <td>
                    <div class="d-flex">
                      <div v-show="['Polygon', 'Rectangle', 'Circle'].includes(item.type)" class="v-color-picker__dot" :style="{ 'background': item.fill.color}"
                           v-if="item.fill&&item.fill.enable"></div>
                      <div v-show="['Polygon', 'Rectangle', 'Circle', 'Polyline'].includes(item.type)" class="v-color-picker__dot"
                           :style="{ 'background': item.stroke.color}" v-if="item.stroke&&item.stroke.enable"></div>
                    </div>
                  </td>
                  <td>{{ item.name }}</td>
                  <td>
                    <v-textarea readonly flat dense hide-details placeholder="Подсказка" :value="item.hint"></v-textarea>
                  </td>
                  <td>
                    <v-select readonly item-text="name" item-value="name" v-model="item.type" :items="markerTypes"></v-select>
                  </td>
                  <td class="text-center">
                    <v-btn @click="item.hide = !item.hide" icon>
                      <v-icon>{{!item.hide?'mdi-eye':'mdi-eye-off'}}</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="red accent-4" v-show="countSelected>0" @click="deleteSelected"> Удалить {{!selectAllState? countSelected: 'все'}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
    name: "Form",
    data: () => ({
        nameRules: [(v) => !!v || "Необходимо значение"],
        coordRules: [(v) => v !== "" || "Необходимо значение"],
        form: true,
        markerTypes: [
            {
                name: "Polygon",
                component: () => import("./markerEdit/Polygon.vue"),
            },
            {
                name: "Rectangle",
                component: () => import("./markerEdit/Rectangle.vue"),
            },
            {
                name: "Circle",
                component: () => import("./markerEdit/Circle.vue"),
            },
            {
                name: "Polyline",
                component: () => import("./markerEdit/Polyline.vue"),
            },
            {
                name: "Placemark",
                component: () => import("./markerEdit/Placemark.vue"),
            },
        ],
        valid: false,
    }),
    methods: {
        ...mapMutations(["clearForm"]),
        show() {
            this.form = true;
        },
        hide() {
            this.form = false;
        },
        selectAll() {
            const state =
                !this.$store.state.points.every((e) => e.select) &&
                !this.selectAllIndeterminate;
            this.$store.state.points.forEach((e) => (e.select = state));
        },
        add() {
            const data = {
                name: this.$store.state.form.name,
                type: this.$store.state.form.type,
                hint: this.$store.state.form.hint,
                coords: Array.from(this.$store.state.form.coords),
                fill: Object.assign({},this.$store.state.form.fill),
                stroke: Object.assign({},this.$store.state.form.stroke),
                color: "",
                select: false,
                hide: false,
            };
            if (~this.indexByName)
                this.$set(this.$store.state.points, this.indexByName, data);
            else this.$store.state.points.push(data);
            this.clearForm();
            this.$refs.form.resetValidation();
        },
        validate() {
            this.$refs.form.validate();
        },
        getMarkerComponent(type) {
            const index = this.markerTypes.findIndex((e) => e.name == type);
            if (~index) return this.markerTypes[index].component;
            else return () => {};
        },
        deleteSelected() {
            for (let i = 0; i <= this.countSelected + 2; i++) {
                const index = this.$store.state.points.findIndex(
                    (e) => e.select
                );
                if (~index) this.$store.state.points.splice(index, 1);
            }
        },
    },
    computed: {
        ...mapState(["coords"]),
        selectAllState() {
            return (
                this.$store.state.points.length > 0 &&
                this.$store.state.points.every((e) => e.select)
            );
        },
        selectAllIndeterminate() {
            return (
                this.$store.state.points.some((e) => e.select) &&
                !this.selectAllState
            );
        },
        countSelected() {
            return this.$store.state.points.reduce((acc, c) => {
                if (c.select) acc++;
                return acc;
            }, 0);
        },
        indexByName() {
            return this.$store.state.points.findIndex(
                (e) => e.name == this.$store.state.form.name
            );
        },
    },
    mounted() {
        this.$on("open", this.show);
    },
};
</script>
<style lang="scss" scoped>
</style>
