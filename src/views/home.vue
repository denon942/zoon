<template>
  <div>
    <TopHeader/>

    <v-img :src="require('@/assets/image/sample.png')" aspect-ratio="1" max-height="500" style="display:flex; flex-flow:row nowrap; justify-content:center; align-items:center"></v-img>

    <h1 style="width: max-content;margin:80px auto 50px">これからのオンライン作業に対応</h1>

    <v-row no-gutters style="width: 80%; margin: 20px auto 30px;">
      <v-col cols="6" style="padding: 20px;">
        <!--時計かなんかのアイコン-->
        <p class="subheading font-weight-regular">指定時間以上何も作業がなければ通知を飛ばし、緊張感を維持</p>
      </v-col>
      <v-col cols="6" style="padding: 20px;">
        <!--ログとかメモっぽいアイコン-->
        <p class="subheading font-weight-regular">簡単な在席・作業管理で対面と同様の環境を実現する</p>
      </v-col>
    </v-row>
    <v-row no-gutters style="width: 80%; margin: 20px auto;">
      <v-col cols="6" style="padding: 20px;">
        <!--それらしいアイコン-->
        <p class="subheading font-weight-regular">資料・画面の共有機能で、オンラインの利便性を最大限活かす</p>
      </v-col>
      <v-col cols="6" style="padding: 20px;">
        <!---->
        <p class="subheading font-weight-regular">必要時以外は個人にフォーカスしない事で、意見を出しやすい環境を作る</p>
      </v-col>
    </v-row>

    <h2 style="width: max-content;margin:150px auto 30px; text-align:center;">これから主流となるオンラインでのコミュニケーションを、<br>円滑に進める為のビデオチャットツール</h2>

    <div style="width:max-content; margin: 0 auto;">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>・最低限の機能のみの提供で、ミーティングに集中できる</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>・アンケート・投票機能でオンラインで足りない部分を補う</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>

    <h1 style="width: max-content;margin:100px auto 30px; text-align:center;">さっそく使ってみましょう！</h1>

    <div style="width: max-content; margin: 0 auto 100px;">
      <v-btn depressed class="title" style="background-color: #83B590; color:white; padding: 20px 20px">zoonを使ってみる</v-btn>
    </div>



  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '@/components/TopHeader'

export default {
  name: 'Home',
  components:{
      TopHeader,
  }
}
</script>
