<template>
  <div>
    <v-btn class="mb-3" @click="addPoint">
      <v-icon>mdi-plus</v-icon>
      Добавить точку
    </v-btn>
    <div v-for="(e, i) in value" :key="i">
      <v-card class="mb-3">
        <v-card-title>Точка {{i}}</v-card-title>
        <v-card-actions v-if="Array.isArray(e)">
          <Placemark :disableWatchCoords="true" v-model="e[0]" @input="$emit('input', value)"></Placemark>
          <Placemark :disableWatchCoords="true" v-model="e[1]" @input="$emit('input', value)"></Placemark>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    components: {
        Placemark: () => import("./Placemark.vue"),
    },
    model: {
        prop: "value",
        event: "input",
    },
    props: ["value"],
    mounted() {
        this.$emit("input", [
            [
                [this.coords[0], this.coords[1]],
                [this.coords[0], this.coords[1]],
            ],
        ]);
    },
    methods: {
        addPoint() {
            const lastPoint = this.value[this.value.length - 1][1];
            this.$emit("input", [...this.value, [lastPoint, this.coords]]);
        },
    },
    computed: {
        ...mapState(["coords"]),
    },
    watch: {
        coords() {
            if (this.value.length != 0)
                this.value[this.value.length - 1][1] = this.coords;
            this.$emit("input", Array.from(this.value));
        },
    },
};
</script>

<style>
</style>