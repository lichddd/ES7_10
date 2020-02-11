<template>
  <div id="app">
    <div class="menu">
      <el-tree :data="codes" @node-click="clickCode"></el-tree>
    </div>
    <div class="code" v-if="current_code">
      {{current_code.code.text}}
    </div>
    <div class="run" v-if="current_code">
      <div class="params">
        <el-input :key="item.key" v-for="item in current_code.code.params" v-model="item.value" placeholder="请输入内容">
          <template slot="prepend">{{item.key}}</template>

        </el-input>

        <el-button @click="run">执行</el-button>
      </div>
      <div class=result>{{result.text}}</div>
    </div>
  </div>
</template>

<script>
import codes from './codes'
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      codes:codes,
      current_code:null,
      result:{text:''},
    };
  },
    mounted() {
  },
  methods: {
    run(){
      let o={};
      this.current_code.code.params.forEach(e => {
        if (e.value) {
          o[e.key]=e.value;
        }
      });
      this.current_code.code.func(this.result,o);
    },
    clickCode(data){
      this.result.text='';
      if (data.code) {
        this.current_code=data;
      }
      else
      {
        this.current_code=null;
        
      }
    }
  },
};
</script>

<style>
*{
  box-sizing: border-box;
}
body {
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}
</style>
<style scoped>
#app > div{
  width:33%;
  height: 100%;
  overflow-y: auto;
  margin: 0px;
  position: absolute;
}
.code{
  padding: 10px;
    white-space: pre-line;
    border-left: solid 1px #aaaaaa;
    border-right: solid 1px #aaaaaa;
    left:33%;
}
.run{
  padding: 10px;
  left:66%;
}
</style>
