<template>
    <a-locale-provider :locale="locale">
        <div id="app">
            <a-button type="primary">
                <router-link to="/">HelloWorld</router-link>
            </a-button>
            <a-button type="danger">
                <router-link to="/about">About</router-link>
            </a-button>
            <router-view />
        </div>
    </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
    name: 'app',
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

button {
    margin: 20px;
}
</style>
