<template>
    <content class="ma-0 pa-0">
        <v-container class="ma-0 pa-0" fluid>
            <v-layout class="ma-0 pa-0" wrap>
                <v-flex xs12 lg12>
                    <v-row class="ma-0 pa-0" style="background-color: #F6F6F6">
                        <v-col cols="12" lg="12">
                            <v-row justify="center" class="ma-0 pa-0">
                                <v-col cols="12" lg="12">
                                    <v-card class="ma-0 pa-0" elevation="0" style="background-color: #F6F6F6">
                                        <p class=" justify-center font-weight-light" :class="size">ようこそ</p>
                                        <v-row justify="center" class="ma-0 pa-0">
                                            <p class="mt-12 display-3" :class="size">
                                                {{user_fname}}
                                                <span class="display-1">さん</span>
                                            </p>
                                        </v-row>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-card class="ma-0 pa-0" elevation="0" >
                            <v-row justify="end" align="end" class="ma-0 pa-0 mt-2">
                                <v-col>
                                    <v-btn
                                        outlined
                                        large
                                        color="primary"
                                        to="chat"
                                        class="mb-5"
                                        width="150"
                                    >
                                    <span style="font-size:18px">
                                        チャット
                                    </span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-row>
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-card class="ma-0 pa-0" elevation="0" >
                            <v-row justify="end" align="end" class="ma-0 pa-0">
                                <v-col>
                                    <v-btn
                                        outlined
                                        large
                                        color="error"
                                        to="./"
                                        class="mb-5"
                                        width="150"
                                    >
                                    <span style="font-size:18px">
                                        ログアウト
                                    </span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-row>
                </v-flex>
            </v-layout>
        </v-container>
    </content>                                  
</template>
<script>
    export default {
        data() {
        return {
            //ユーザーの名前    
            user_fname:"たろう",
            size:"display-2",
        }
    },
    }
</script>
