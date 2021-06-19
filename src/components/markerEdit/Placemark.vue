<template>
  <v-card-actions v-if="value&&Array.isArray(value)">
      <v-text-field type="number" step="0.01" :value="value[0]" @input="$emit('input', [+$event, +value[1]])" label="Latitude" required></v-text-field>
      <v-text-field type="number" step="0.01" :value="value[1]" @input="$emit('input', [+value[0], +$event])" label="Longitude" required></v-text-field>
  </v-card-actions>
</template>

<script>
import { mapState } from 'vuex'
export default {
    model: {
        prop: "value",
        event: "input",
    },
    props: {
        value: {},
        disableWatchCoords: {
            type: Boolean,
            deafult: false,
        },
    },
    mounted(){
        this.$emit('input', this.coords)
    },
    computed:{
        ...mapState(['coords'])
    },
    watch:{
        coords(){
            !this.disableWatchCoords &&this.$emit('input', this.coords)
        }
    }
};
</script>

<style>
</style>