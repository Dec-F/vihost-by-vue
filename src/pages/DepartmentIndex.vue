<template>
    <div class="relative-wrap">
        <div class="relative msg-box">
            <h3 class="msg-setting-box">
                标签管理
                <BackAndRefresh/>
            </h3>
            <div style="width:100%; height:100px;background: red;padding: 50px 100px">

            </div>
        </div>
    </div>
</template>

<script>
import BackAndRefresh from 'components/BackAndRefresh'
export default {
    name: 'dapartmentIndex',
    components: { 
        BackAndRefresh
    },
}
</script>
<style scoped>
* {text-align: left}
.msg-setting-box {
    border-bottom: 1px solid #ccc;
    line-height: 28px;
    padding-bottom: 4px;
    margin-bottom: 15px;
}

.msg-box {
    padding: 15px;
}
</style>