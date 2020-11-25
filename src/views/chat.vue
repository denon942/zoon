<template>
    <v-container class="ma-0 pa-0" fluid>
        <v-row justify="center" class="ma-0 pa-0 mt-3">
            <v-col cols="7" class="ma-0 pa-0">
                <v-card height="650" tile>
                    VIDEO
                </v-card>
            </v-col>
            <v-col cols="4" class="ma-0 pa-0">
                <v-card  height="650" tile elevation="2">
                    <v-card  height="560" tile elevation="0">
                    
                    </v-card>
                   
                    <v-form>
                        <v-container >
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        v-model="message"
                                        outlined
                                        clearable
                                        label="メッセージを入力"
                                        type="text"
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
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
