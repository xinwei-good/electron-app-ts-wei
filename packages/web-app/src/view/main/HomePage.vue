<template>
    <div>
        <h1>1111</h1>
        <button @click="">打开新窗口</button>
        <button @click="updateNow">检测更新</button>
       <el-input v-model="input" placeholder="Please input" />

    <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
  >
    <span>有新版本更新是否更新</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="checkdilog"
          >确认更新</el-button
        >
      </span>
    </template>
  </el-dialog>
    </div>
    
</template>


<script setup lang="ts">
    import { ref } from 'vue'
    import {sendCmd,invokeCmd,bindEvent} from '../../api-node/utils'
    import {useRouter} from 'vue-router'
    const input=ref('22')
    let dialogVisible=ref(false);
    const router =useRouter()
    function updateNow(){
        sendCmd('Detection-update')
    }
    checkingfors()
    async function checkingfors() {
        let res = await window.updateSoftware.checkingUpdate((event, date) => {
            console.log(event);
            console.log(date);
            input.value=date.message
        });
    }
    updateAvailable() //检测到有新版本回传
     async function updateAvailable() {
        let res = await window.updateSoftware.updateAvailable((event, date) => {
            if(date){
                dialogVisible.value=true
            }
        });
     }

     async function checkdilog() {
        sendCmd('downLoadUpdate')
        dialogVisible.value = false
     }
     async function updateDownloading() {
        let res = await window.updateSoftware.updateDownloading((event, date) => {
            console.log(date);  
        });
     }
     updateDownloaded()
     async function updateDownloaded() {
        let res = await window.updateSoftware.updateDownloaded((event, date) => {
            console.log(date);  
            console.log('更新完成');
            
        });
     }
</script>