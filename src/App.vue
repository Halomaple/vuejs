<template>
    <a-locale-provider :locale="locale">
        <div id="app">
            <HelloWorld />
        </div>
    </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'app',
    components: {
        HelloWorld
    },
    data: function() {
        return { locale: zh_CN };
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
