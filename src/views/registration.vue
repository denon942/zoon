<template>
<v-container class="ma-0 pa-0" fluid>
    <v-layout class="ma-0 pa-0" wrap>
        <v-flex xs12 lg12>
            <v-row justify="center" class="ma-0 pa-0" style="background-color: #F6F6F6">
                <v-col cols="auto">
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-col cols="auto" class="mt-12 mr-4">
                            <router-link to="/">
                                <!-- img画像配置して画像クリックすればhomeへ -->
                            </router-link>
                        </v-col>
                    </v-row>
                    <v-card tile width="600" class="ma-0 pa-0" outlined>
                        <v-tabs v-model="tabs" color="green">
                            <v-tab v-on:click="tab = 0" :href="`#tab-0`">ログイン</v-tab>
                            <v-tab v-on:click="tab = 1" :href="`#tab-1`">新規登録</v-tab>
                        </v-tabs>
                        <v-row class="ma-0 pa-0">
                            <Login v-if="tab == 0" />
                            <Regist v-if="tab == 1" />
                        </v-row>
                    </v-card>
                    <v-row justify="end">
                        <v-col cols="auto">
                            <v-btn to="/" elevation="0">
                                ▲ホームへ
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import Regist from '@/components/Regist'
import Login from '@/components/Login'
export default {
    data() {
        return {
            array: {},
            tab: 1,
            tabs: 'tab-1'
        }
    },
    components: {
        Regist,
        Login
    },
    methods: {
        signUp: async function () {
            this.$store.errorCode = ''
            this.array['email'] = this.mailaddress
            this.array['password'] = this.password
            await this.$store.commit('registUser', this.array)
        }
    },
}
</script>

<style lang="scss">
.v-application--wrap {
    background-color: #F6F6F6
}
</style>
