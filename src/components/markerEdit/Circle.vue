<template>
<v-card-actions>
    <v-text-field type="number" step="0.01" :value="value[0]" @input="$emit('input', [+$event, +value[1], +value[2]||1000])" label="Latitude" required></v-text-field>
    <v-text-field type="number" step="0.01" :value="value[1]" @input="$emit('input', [+value[0] ,+$event, +value[2]||1000])" label="Longitude" required></v-text-field>
    <v-text-field type="number" step="1" :value="value[2]" @input="$emit('input', [+value[0] , +value[1], +$event])"  label="Радиус"></v-text-field>
</v-card-actions>
</template>

<script>
import { mapState } from 'vuex'
export default {
    model:{
        prop:'value',
        event: 'input'
    },
    props:{'value': Array},
    mounted(){
        this.$emit('input', [...this.coords, this.value[2]])
    },
    computed:{
        ...mapState(['coords'])
    },
    watch:{
        coords(){
            this.$emit('input', [...this.coords, this.value[2]])
        }
    }
}
</script>

<style>

</style>