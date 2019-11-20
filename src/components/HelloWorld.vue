<template>
    <div class="hello-world">
        <div class="hello">{{msg}}</div>
        <a-date-picker></a-date-picker>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data: function() {
        return {
            msg: 'vue!'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
