<template>
    <div>
        <BaseHello />
        <base-hello />
        <base-hello></base-hello>
        <base-counter></base-counter>
        <base-counter></base-counter>
        <base-counter></base-counter>
        <base-counter></base-counter>
    </div>
</template>

<script>
import BaseCounter from "./components/BaseCounter.vue";

export default {
  name: 'App',
  components: {
    BaseCounter
  }
}
</script>

<style>
</style>
