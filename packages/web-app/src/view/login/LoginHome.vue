<template>
    <div>
        登录页
    </div>

</template>

<script setup lang="ts">
    import {sendCmd,invokeCmd} from '../../api-node/utils'

    function createWindow(){
        sendCmd('open-diong')
    }
</script>