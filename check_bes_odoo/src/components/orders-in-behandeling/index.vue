<script setup>
    import { ref } from 'vue';

    import Order from '@/components/order/index.vue';
    import { URL } from '@/contstants';

    const orderId = ref('');
    const ordersRef = ref([]);

    async function onSubmitOrder() {
        // check if someone is working on this order && check if order is already reserved
        const inUseOrReserved = await checkOrderInUseOrReserved();
        if (inUseOrReserved) return;

        // fetch order from backend & odoo  && set in_use
        const order = await getOrder();
        if (!order) return;
        console.log('order', order)

        orderId.value = '';
        ordersRef.value.push(order);
    }

    async function checkOrderInUseOrReserved() {
        try {
            const response = await fetch(`${URL}/api/is-order-in-use-or-reserved?order_id=${orderId.value}`);
            if (!response.ok) {
                console.warn('order not found, 404');
                return true;
            }
            const data = await response.json();
            console.log('orderInUseOrReserved', data);
            return data.in_use;
        } catch(e) {
            console.error(e);
            return true;
        }
    }

    async function getOrder() {
        try {
            const response = await fetch(`${URL}/api/get-order?order_id=${orderId.value}`);
            if (!response.ok) {
                console.warn('order not found, 404');
                return null;
            }
            const data = await response.json();
            return data.order ?? null;
        } catch(e) {
            console.error(e);
            return null;
        }
    }


</script>

<template>
    <h1>Orders in behandeling</h1>
    <div style="display:flex; justify-content: space-between; gap: 20px;">
        <input
            placeholder="ordernummer"
            v-model="orderId"
            type="text"
        />
        <div class="btn" @click="onSubmitOrder">Plaats order</div>
        <div>voldoende vrij</div>
        <div>voldoende THT</div>
        <div>niet voldoende</div>
    </div>
    <table v-if="ordersRef">
        <thead>
            <tr>
                <th></th>
                <th>Ordernummer</th>
                <th>Klant</th>
                <th>Stock oke</th>
                <th>Gevraagde leverdatum</th>
            </tr>
        </thead>
        <tbody>
            <Order v-for="order in ordersRef" :order="order" :key="order[0].order_id" />
        </tbody>
    </table>
</template>

<style scoped>
.btn {
  gap: 10px;
  text-align: center;
  background-color: #1e3a7a;
  display: flex;
  min-width: 50px;
  padding: 10px 15px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: large;
}

.btn:hover {
  background-color: #ff6627;
  transform: scale(1.05);
}
</style>