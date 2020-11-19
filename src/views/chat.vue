<template>
    <v-container class="ma-0 pa-0" fluid>
        <v-row justify="center" class="ma-0 pa-0 mt-3">
            <v-col cols="7" class="ma-0 pa-0">
                <v-card class="indigo lighten-4 white--text" height="650" tile>
                    VIDEO
                </v-card>
            </v-col>
            <v-col cols="4" class="ma-0 pa-0">
                <v-card class="blue" height="650" tile elevation="2">
                    <v-btn
                        elevation="2"
                        text
                        class="red"
                        >CHAT</v-btn>
                </v-card>
            </v-col>
        </v-row>
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
    },
    created() {
        this.$store.commit('onAuthStateChanged')
    },
}
</script>
