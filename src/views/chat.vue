<template>
    <v-container class="ma-0 pa-0" >
        <v-layout class="ma-0 pa-0">
            <v-flex xs12 lg12 >
                <v-btn @click="logout">ログアウト</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        onResize () {
            this.x = window.innerWidth
            this.y = window.innerHeight
        },
        logout:function(){
            this.$store.commit('logout')
        },
    },
    created() {
        this.$store.commit('onAuthStateChanged')
    },
}
</script>
