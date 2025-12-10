<script setup>
import { defineProps } from 'vue';

defineProps({
    title: String,
});
</script>

<template>
    <h1>{{ title }}</h1>
    <p>file kiezen</p>
    <div>upload btn</div>
    <div>huidige file van: [date]</div>
</template>

<style scoped></style>