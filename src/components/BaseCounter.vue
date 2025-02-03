<template>
    <h2>Счетчик</h2>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
</template>

<script>
export default {
    name: 'BaseCounter',
    data: function () {
        return {
            count: 0
        };
    },
    methods: {
        increment: function () {
            this.count++;
        }
    },
};
</script>

<style scoped>
h2 {
    color: blue;
}
</style>