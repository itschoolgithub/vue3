<template>
    <h2>{{ hello }}</h2>
</template>

<script>
export default {
    name: 'BaseHello',
    data: function () {
        return {
            hello: 'Hello World 2!'
        };
    }
};
</script>

<style scoped>
h2 {
    color: red;
}
</style>