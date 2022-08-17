<template>
    <div>
        <h1>1111</h1>
        <button @click="createWindow">打开新窗口</button>
    </div>

</template>


<script setup lang="ts">
    import {sendCmd,invokeCmd} from '../../api-node/utils'
    import {useRouter} from 'vue-router'

    const router =useRouter()
    function createWindow(){
        sendCmd('open-diong')
        // router.push({path:'/login/index'})
    }
</script>