<template>
    <div>
        <div v-bind:key="order._id" v-for="order in orders">
            <Order v-bind:order="order" />
        </div>
    </div>
</template>>

<script>
import Order from './Order.vue'
export default {
    name: 'Orders',
    components: {Order},
    props:["orders"]
}
</script>>

<style scoped>

</style>