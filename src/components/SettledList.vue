<template>
    <div class="relative-wrap">
        <div class="relative">
            <div class="box">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="name" label="部门名称"></el-table-column>
                    <el-table-column prop="fwc" label="服务窗"></el-table-column>
                    <el-table-column prop="gzh" label="公众号"></el-table-column>
                    <el-table-column prop="status" label="应用状态"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<style scoped>
* {
    text-align: left;
}

.box {
    padding: 0.8rem;
}
</style>
<script>
export default {
    data() {
        return {
            tableData: [{
                name: '人社局',
                fwc: '开通中',
                gzh: '开通中',
                status: '接入中'
            }, {
                name: '人社局',
                fwc: '开通中',
                gzh: '开通中',
                status: '接入中'
            }, {
                name: '人社局',
                fwc: '开通中',
                gzh: '开通中',
                status: '接入中'
            }, {
                name: '人社局',
                fwc: '开通中',
                gzh: '开通中',
                status: '接入中'
            }]
        }
    }
}
</script>