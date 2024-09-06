console.log(`JS OK`);

const app = Vue.createApp({
    data() {
        return {
            message: `Hello Vue!`
        }
    }
})

app.mount(`#app`)
