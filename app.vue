<template>
  <div class="app">
    <Card :summary="data" />
  </div>
</template>

<script lang='ts' setup>
import data from '@/assets/data.json'
</script>

<style>
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>