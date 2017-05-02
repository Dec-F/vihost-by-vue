<template>
    <div class="relative-wrap">
        <div class="relative">
            <div class="msg-box">
                <h3 class="msg-setting-box">
                    标签管理
                    <div class="moreaction">
                        <a href="javascript:;" @click="goback()"><i class="el-icon-plus"></i>添加文章</a>
                        <a href="javascript:;" @click="goback()"><i class="el-icon-arrow-left"></i>返回</a>
                        <a href="javascript:;" @click="refresh()"><i class="el-icon-loading"></i>刷新</a>
                    </div>
                </h3>
                <div class="content-itemlist">
                    <div class="presentation">列表</div>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="id" label="序号" width="120px"></el-table-column>
                        <el-table-column prop="AlipayID" label="支付宝id"></el-table-column>
                        <el-table-column prop="name" label="名称" width="160px"></el-table-column>
                        <el-table-column prop="editDate" label="最后编辑时间"></el-table-column>
                        <el-table-column label="操作" >
                            <template scope="scope">
                                <el-button type="text" size="small" icon="edit">编辑</el-button>
                                <el-button type="text" size="small" icon="delete2">删除</el-button>
                                <el-button type="text" size="small">链接地址</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <el-row class='title-top'>
                <el-col :span='2'>
                    <h3>标签管理</h3>
                </el-col>
                <el-col :offset='16' :span='2'>
                    sdsdsd
                </el-col>
                <el-col :span='2'>
                    sds
                </el-col>
                <el-col :span='2'>
                    sda
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
                id: '42',
                AlipayID: 'sd',
                name: '王小虎',
                editDate: '17-4-26 12:45:25',
            }]
        }
    }
}
</script>

<style scoped>
* {
    text-align: left;
}

.msg-setting-box {
    border-bottom: 1px solid #ccc;
    line-height: 28px;
    padding-bottom: 4px;
    margin-bottom: 15px;
}

.msg-box {
    padding: 15px;
}

.moreaction {
    float: right;
}

.presentation {
    width: 60px;
    height: 40px;
    line-height: 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid #ddd;
    text-align: center;
    border-bottom: 1px solid #fff;
    z-index: 1;
    position: relative;
    top: 1px;
}

.el-table_1_column_11 .el-button--text {
    color: #1f2d3d
}

.el-table_1_column_11 .el-button--text:hover {
    color: #00aaef
}

.title-top{
    padding-top: 20px
}
</style>