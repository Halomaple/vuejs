<template>
    <div class="hello-world">
        <div class="hello">{{ msg }}</div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data: function() {
        return {
            msg: 'This is Helloworld page!'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
