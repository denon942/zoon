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
        <!-- 追記モーダルチャット -->
        <v-overlay
                :opacity="opacity"
                :value="overlay"
            >
                <v-row class="ma-0 pa-0" align="end">
                    <v-col cols="auto">
                        <v-btn
                            color="orange lighten-2"
                            @click="overlay = false"
                            tile
                        >
                            CLOSE
                        </v-btn>
                        <v-card class="white display-1 overflow-y-auto" max-height="470" height="470" min-width="375" max-width="375" elevation="0" tile>
                            <v-card-text
                                v-for="(item,index) in chat"
                                :key="index"
                                :index="index"
                                class="black--text"
                            >
                                {{ item.name }}:
                                <v-card-text
                                    class="title pt-0 ma-0">
                                    {{item.content}}
                                </v-card-text>
                            </v-card-text>
                        </v-card>

                        <v-card class="display-1 py-2 pl-5 ma-0" outlined max-height="60" elevation="0">
                            <v-row class="ma-0 pa-0" justify="end">
                                <v-col cols="10" class="ma-0 pa-0">
                                    <v-text-field
                                        label="Message"
                                        class="ma-0 black--text"
                                        v-model="coment"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="2" class="ma-0 pa-0 py-1">
                                    <v-btn class="pa-0 ma-0 ml-1" tile large color="teal" icon @click="send">
                                        <v-icon class="pa-0 ma-0">mdi-send</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-overlay>
    </v-container>
</template>
<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            overlay:false,
            chat:[],
            chat_ire:[],
            opacity: 0.4,
            coment:"",
            name:""
        }
    },
    methods: {
        onResize () {
            this.x = window.innerWidth
            this.y = window.innerHeight
        },
        change:function(){
            this.overlay = !this.overlay
        },
        getChats(){
            firebase.firestore().collection('room').doc('001').collection('comments').orderBy('createdAt', 'asc').get().then(async snapshot => {
                    await snapshot.forEach(doc => {
                    //contentは要素
                    //pushは配列データそのもの
                    // this.allData.push(doc.data().content)
                    this.chat_ire.push({
                        content:doc.data().content,
                        name:doc.data().name
                    })
                })
                this.chat = this.chat_ire
                this.chat_ire = []
            })
        },
        send:function(){
            this.name = this.user_name
            firebase.firestore().collection('room').doc('001').collection('comments').add({
                content: this.coment,
                createdAt: new Date(),
                name:this.name
            })

            this.chat.push({
                content:this.coment,
                name:this.name
            })
            this.coment = ""
        }
    },
    mounted() {
        firebase.firestore().collection('room').doc('001').collection('comments').onSnapshot(() => {
            this.getChats()
        })
        
    },
    computed:{
        user_id:{
            get(){
                return this.$store.getters.user_id
            },
            set(value){
                return this.$store.commit('set_user_id',value)
            }
        },
        user_name(){
            return this.$store.getters.user_fname
        },
    },
    created() {
        this.$store.commit('onAuthStateChanged')
    },
}
</script>
