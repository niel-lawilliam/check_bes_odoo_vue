<script setup>
import DLStock from '../components/dl-stock/index.vue';
import LWStock from '../components/lw-stock/index.vue'
import ZoekArtikelen from '../components/zoek-artikelen/index.vue';
import OrdersInBehandeling from '../components/orders-in-behandeling/index.vue';
import OrdersGereserveerd from '../components/orders-gereserveerd/index.vue';
</script>

<template>
    <div class="container">
        <div class="left-container">
            <div style="display: flex; justify-content: space-around;">
                <div>
                    <DLStock />
                </div>
                <div>
                    <LWStock />
                </div>
            </div>
            <ZoekArtikelen />
            <OrdersInBehandeling />
            <OrdersGereserveerd />
        </div>
        <div class="right-container">
            <div  id='parent-detail-content'>
                <div class="scroll-container" id='scrollable-content'></div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    display: flex;
    height: 100vh;
}
.left-container, .right-container {
    width: 50%;
    height: 100%;
}
.scroll-container {
    max-height: 500px;
    overflow-y: auto;
    flex-grow: 1;
}

</style>
