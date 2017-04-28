<template>
    <div class="moreaction">
        <a href="javascript:;" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
        <a href="javascript:;" @click="refresh"><i class="el-icon-loading"></i>刷新</a>
    </div>
</template>
<script>
export default {
    name:'backAndRefresh',
    methods: {
        goback(){
            window.history.go(-1)
        },
        refresh: function () {
            window.location.reload();
        }
    }
}
</script>

<style scoped>
.moreaction a {
    font-size: 16px;
    font-weight: 400;
    margin: 0 4px;
}

.moreaction a span {
    vertical-align: middle;
    display: inline-block;
    margin-right: 4px
}
</style>