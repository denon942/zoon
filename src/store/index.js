import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    array: {},
        user: {},
        user_id:'',
        // ユーザアイコン
        user_image:'',
        // ログイン情報のフラグ
        status: false,
        // メールアドレス・パスワード
        user_email: "",
        user_pass: "",
        // 氏名・かな
        user_fname: "",
        user_fname_kana: "",
        user_name: "",
        user_name_kana: "",
        // 郵便番号住所
        user_post:"",
        user_address: "",
        // 電話番号
        user_tel:"",
        // 性別
        user_gender:0,
        // 誕生日
        user_year:0,
        user_month:0,
        user_day:0,
  },
  getters: {
    user_id(state){
        return state.user_id
    },
    user_image(state){
        return state.user_image
    },
    user_fname(state){
        return state.user_fname
    },
    user_name(state) {
        return state.user_name
    },
    user_fname_kana(state) {
        return state.user_fname_kana
    },
    user_name_kana(state) {
        return state.user_name_kana
    },
    user_year(state) {
        return state.user_year
    },
    user_month(state) {
        return state.user_month
    },
    user_day(state) {
        return state.user_day
    },
    user_email(state) {
        return state.user_email
    },
    user_post(state) {
        return state.user_post
    },
    user_address(state) {
        return state.user_address
    },
    user_tel(state) {
        return state.user_tel
    },
    user_nickname(state) {
        return state.nickname
    }
  },
  mutations: {
    // ここからセッター //
    set_user_id(state, payload) {
        state.user_id = payload
    },
    set_user_image(state, payload) {
        state.user_image = payload
    },
    set_user_fname(state, payload) {
        state.user_fname = payload
    },
    set_user_name(state, payload) {
        state.user_name = payload
    },
    set_user_fname_kana(state, payload) {
        state.user_fname_kana = payload
    },
    set_user_name_kana(state, payload) {
        state.user_name_kana = payload
    },
    set_user_email(state, payload) {
        state.user_email = payload
    },
    set_user_post(state, payload) {
        state.user_post = payload
    },
    set_user_address(state, payload) {
        state.user_address = payload
    },
    set_user_nickname(state, payload) {
        state.user_nickname = payload
    },
    //登録
    registUser(state,array) {
      firebase.auth().createUserWithEmailAndPassword(
          array['email'],
          array['password']
      )
      .then(function() {
          // ユーザ情報の変更などに検知
          firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                  // User logged in already or has just logged in.
                  // ユーザーIDの取得
                  console.log(user.uid);
                  // ユーザIDをドキュメントIDとしてコレクションにarrayの中身をフィールドとして追加
                  state.user_id = user.uid
                  firebase.firestore().collection("users").doc(state.user_id)
                  .set(array)
                  .then(function () {
                      // 正常にデータ保存できた時の処理
                      console.log('success')
                      firebase.firestore().collection("judge").doc(state.user_id)
                      .set({judge:0})
                      .then(function () {
                          // 正常にデータ保存できた時の処理
                          console.log('success')
                          router.push('/chat')
                      })
                  })
              } else {
                  // User not logged in or has just logged out.
              }
          })
      })
    },
    //ログイン
    user_login(state,array)
    {
      firebase.auth().signInWithEmailAndPassword(
          array['email'],
          array['password'])
      .then(()=>{
          router.push('/chat')
      })
    },
    //ログインチェック
    onAuthStateChanged(state) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User logged in already or has just logged in.
            // ユーザーIDの取得
            // console.log(user.uid);
            // this.user_id = user.uid
            // ドキュメントIDをユーザIDとしているのでユーザIDを持ってきてそこからフィールド取り出し
            firebase.firestore().collection('users').doc(user.uid).get().then( doc => {
                console.log(doc.data())
                state.user_id = user.uid
                // ユーザアイコン
                state.user_image = doc.data().user_image
                // メールアドレス
                state.user_email = doc.data().email
                // // 氏名・かな
                state.user_fname = doc.data().firstname
                state.user_fname_kana = doc.data().firstkana
                state.user_name = doc.data().lastname
                state.user_name_kana = doc.data().lastkana
                // 郵便番号
                state.user_post = doc.data().post
                // // 住所
                state.user_address = doc.data().address
                /// 性別
                state.user_gender = doc.data().sex
                // 誕生日
                state.user_year = doc.data().birthYear
                state.user_month = doc.data().birthMonth
                state.user_day = doc.data().birthDay
            })
        } else {
            // User not logged in or has just logged out.
            //router.push('/')
        }
      })
    },
    logout() {
        firebase.auth().signOut()
        router.push('/')
    }
  },
  actions: {
  },
  modules: {
  }
})