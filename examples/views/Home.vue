<template>
    <div class="home">
        <img @click="imgPreview" alt="Vue logo" src="../assets/logo.png">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    components: {
        //HelloWorld
    },
    methods: {
        imgPreview() {
            this.$previewImg({ src: "/img/logo.82b9c7a5.png" });
        }
    }
}
</script>
