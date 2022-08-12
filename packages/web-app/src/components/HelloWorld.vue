<script setup lang="ts">
import { ref } from 'vue'
import {sendCmd,invokeCmd} from '../api-node/utils'
defineProps<{ msg: string }>()
const input = ref('')
const count = ref(0)

function snedbai(){
  sendCmd('open-diong')
}

function getIp(){
  fetch('https://api.ipify.org/')
  .then(r => r.text())
  .then(data => console.log(data));
}

function getWindowIp(){
  console.log(window.location.href) 
}
 

</script>

<template>
    


  <BUtton @click="getWindowIp">点击回退</BUtton>  

  <button type="button" @click="count++">count is: {{ count }}</button>
  <div>
       <el-input
        v-model="input"
        placeholder="Please input"
        show-word-limit
        maxlength="90"
        type="text"
        autosize
        input-style="
        padding: 10px;
        white-space: nowrap;
        text-overflow: ellipsis !important;
        overflow: hidden;
        "
      />
  </div>
   
  
 </template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
:deep(.text-ellipsis){
  width: 30px;
  white-space: nowrap;
  text-overflow: ellipsis !important;
  overflow: hidden;
  padding: 10px;
}
</style>
