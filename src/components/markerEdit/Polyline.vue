<template>
  <div>
    <v-card-actions>
      <v-text-field v-if="value[0]" type="number" step="0.01" :value="value[0][0]" @input="$emit('input', [[+$event, value[0][1]], value[1]])" label="Latitude" required></v-text-field>
      <v-text-field v-if="value[0]" type="number" step="0.01" :value="value[0][1]" @input="$emit('input', [[value[0][0], +$event], value[1]])" label="Longitude" required></v-text-field>
    </v-card-actions>
    <v-card-actions>
      <v-text-field v-if="value[1]" type="number" step="0.01" :value="value[1][0]" @input="$emit('input', [value[0], [+$event, value[1][1]]])" label="Latitude" required></v-text-field>
      <v-text-field v-if="value[1]" type="number" step="0.01" :value="value[1][1]" @input="$emit('input', [value[0] ,[value[1][0], +$event]])" label="Longitude" required></v-text-field>
    </v-card-actions>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    model: {
        prop: "value",
        event: "input",
    },
    props: ["value"],
    data: ()=>({
        index: 0
    }),
    mounted(){
        this.$emit('input', [[this.coords[0]-0.001, this.coords[1]-0.001], [this.coords[0]+0.001, this.coords[1]+0.001]])
    },
    computed:{
        ...mapState(['coords'])
    },
    watch:{
        coords(){
            if (this.index == 0) this.index = 1;
            else if (this.index == 1) this.index = 0;
            this.$emit('input', (this.index == 0)?[[this.coords[0], this.coords[1]], this.value[1]]:[this.value[0], [this.coords[0], this.coords[1]]])
        }
    }
};
</script>

<style>
</style>