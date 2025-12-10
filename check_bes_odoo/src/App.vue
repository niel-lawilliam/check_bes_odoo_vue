<script setup></script>

<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.header {
  padding: 16px;
  background-color: #1e3a7a;
}

.header a {
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-weight: bold;
}

.header a.router-link-active {
  text-decoration: underline;
}
</style>
