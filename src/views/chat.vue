<template>
<v-container class="ma-0 pa-0" fluid>
    <v-row justify="center" class="ma-0 pa-0 mt-3">
        <!-- ビデオ表示領域 -->
        <v-col cols="7" class="ma-0 pa-0">
            <v-card height="650" tile elevation="1" class="grey">
                VIDEO
            </v-card>
        </v-col>

        <!-- チャット表示領域 -->
        <v-col cols="4" class="ma-1 pa-0">
            <!-- チャット履歴 -->
            <v-card class="white display-1 overflow-y-auto" max-height="585" tile elevation="0" min-height="585">
                <v-card-text v-for="(item,index) in chat" :key="index" :index="index" class="black--text">
                    {{ item.name }}:
                    <v-card-text class="title pt-0 ma-0">
                        {{item.content}}
                    </v-card-text>
                </v-card-text>
            </v-card>

            <!-- 入力領域 -->
            <v-row justify="center" class="ma-0 pa-0 mt-2">
                <!-- テキストボックス -->
                <v-col cols="9" class="ma-0 pa-0" elevation="0">
                    <v-form>
                        <v-container class="pa-0 ma-0">
                            <v-text-field v-model="coment" outlined clearable label="メッセージを入力" type="text">
                            </v-text-field>
                        </v-container>
                    </v-form>
                </v-col>

                <!-- 別画面で表示ボタン -->
                <v-col cols="auto" class="ma-0 pa-0 pl-2">
                    <v-btn height="56" color="primary" dark @click="send">
                        <v-icon>mdi-send</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <v-footer dark padless>
        <v-card class="flex" flat tile min-height="122">
            <v-card-title class="teal">
                <strong class="subheading">Zoon!</strong>

                <v-spacer></v-spacer>

                <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon to="/mypage">
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <strong>Zoon</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</v-container>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            overlay: false,
            chat: [],
            chat_ire: [],
            opacity: 0.4,
            coment: "",
            name: "",
            icons: [
                'mdi-home',
            ],
        }
    },
    methods: {
        onResize() {
            this.x = window.innerWidth
            this.y = window.innerHeight
        },
        change: function () {
            this.overlay = !this.overlay
        },
        getChats() {
            firebase.firestore().collection('room').doc('001').collection('comments').orderBy('createdAt', 'asc').get().then(async snapshot => {
                await snapshot.forEach(doc => {
                    //contentは要素
                    //pushは配列データそのもの
                    // this.allData.push(doc.data().content)
                    this.chat_ire.push({
                        content: doc.data().content,
                        name: doc.data().name
                    })
                })
                this.chat = this.chat_ire
                this.chat_ire = []
            })
        },
        send: function () {
            this.name = this.user_name
            firebase.firestore().collection('room').doc('001').collection('comments').add({
                content: this.coment,
                createdAt: new Date(),
                name: this.name
            })

            this.chat.push({
                content: this.coment,
                name: this.name
            })
            this.coment = ""
        }
    },
    mounted() {
        firebase.firestore().collection('room').doc('001').collection('comments').onSnapshot(() => {
            this.getChats()
        })
    },
    computed: {
        user_id: {
            get() {
                return this.$store.getters.user_id
            },
            set(value) {
                return this.$store.commit('set_user_id', value)
            }
        },
        user_name() {
            return this.$store.getters.user_fname
        },
    },
    created() {
        this.$store.commit('onAuthStateChanged')
    },
}
</script>
