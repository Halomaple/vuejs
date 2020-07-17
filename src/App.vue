<template>
    <a-config-provider :locale="locale">
        <div id="app">
            <a-radio-group :value="tab" @change="handleTabChange">
                <a-radio-button value="HelloWorld">HelloWorld</a-radio-button>
                <a-radio-button value="About">About</a-radio-button>
            </a-radio-group>
            <router-view />
        </div>
    </a-config-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import router from './router';

export default {
    name: 'app',
    data: function() {
        return { locale: zh_CN, tab: 'HelloWorld' };
    },
    methods: {
        handleTabChange(e) {
            this.tab = e.target.value;
            router.push({ path: this.tab }).catch(err => err);
        }
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
