<template>
  <yandex-map @map-was-initialized="map = $event" ref="map" @click="addPoint" :coords="coords">
      <template v-for="(e,i) in points">
            <ymap-marker @click="edit(e)" :key="i" v-if="!e.hide" :marker-fill="e.fill" :marker-stroke="e.stroke" :coords="e.coords" :circle-radius="circleRadius(e.type,e.coords)" :marker-type="e.type" :marker-id="i" :hint-content="e.hint" />
      </template>
      <ymap-marker ref="marker" :coords="form.coords" :circle-radius="circleRadius(form.type,form.coords)" :marker-fill="form.fill" :marker-stroke="form.stroke" :marker-type="form.type" :marker-id="-1" :hint-content="form.hint" />
  </yandex-map>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "Map",

    data: () => ({
        map: null,
        marker: false
    }),
    methods: {
        addPoint(e) {
            this.setCoords(e.get("coords"));
        },
        circleRadius(type, coords){
            if (coords&&coords.length>2&&type == "Circle") return coords[2]
        },
        edit(data){
            data.hide = true;
            this.$store.state.form.type = data.type;
            this.$store.state.form.name = data.name
            this.$store.state.form.hint = data.hint
            this.$store.state.form.coords = data.coords
        },
        ...mapMutations(["setCoords"]),
    },
    computed:{
        ...mapState(["coords", "points", "form"]),
    }
};
</script>
<style lang="scss" scoped>
.ymap-container {
    height: 100%;
}
</style>
