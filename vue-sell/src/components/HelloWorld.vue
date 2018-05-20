<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{author}}</h2>
    <ul v-for="music in musics" :key="music.id">
      <li>
        {{music.name}}
      </li>
      <br>
      <li>
        <img :src="music.album.picUrl" style="width:200px;" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='; // 远程代理
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      author: 'hyyqc',
      musics: []
    };
  },
  mounted () {
    let _this = this;
    axios.get(API_PROXY + 'http://music.163.com/api/playlist/detail?id=19723756')
      .then((res) => {
        _this.musics = res.data.result.tracks;
        console.log(res);
      }, (error) => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
