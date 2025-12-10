<script setup>
import { ref, computed } from 'vue';
import { URL } from '../../contstants';

const props = defineProps({
    order: Object,
});

const expanded = ref(false);

const orderInfo = computed(() => props.order[0] || {});

function toggle() {
    expanded.value = !expanded.value;
}

async function onReserve() {
    const response = await fetch(`${URL}/api/reserve?order_id=${orderInfo.order_id}`);
    const data = await response.json();
    console.log(data)
}
</script>

<template>
    <tr>
        <td>
            <button @click="toggle">
            {{ expanded ? "-" : "+" }}
            </button>
        </td>
        <td>{{ orderInfo.order_id }}</td>
        <td>{{ orderInfo.customer_name }}</td>
        <td>✅</td>
        <td>{{ orderInfo.commitment_date }}</td>
        <td><button>check bes</button></td>
        <td><button @click="onReserve">reserveer</button></td>
    </tr>

    <tr v-if="expanded">
        <td></td>
        <td>Artikel</td>
        <td>Beschrijving</td>
        <td>Gevraagde hoeveelheid</td>
        <td>Beschikbaar VRIJ</td>
        <td>Beschikbaar THT</td>
    </tr>
    <tr
        v-for="product in props.order"
        :key="product.id"
        v-if="expanded"
    >
        <td></td>
        <td>{{ product.product_id }}</td>
        <td>{{ product.product_description }}</td>
        <td>{{ product.product_quantity }}</td>
    </tr>
</template>

<style scoped></style>