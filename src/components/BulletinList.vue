<template>
    <div class="relative-wrap">
        <div class="relative">
            <div class="msg-box">
                <h3 class="msg-setting-box">
                    公告列表
                    <div class="moreaction">
                        <a href="javascript:;"><i class="el-icon-plus"></i>推送公告</a>
                        <a href="javascript:;" @click="goback()"><i class="el-icon-arrow-left"></i>返回</a>
                        <a href="javascript:;" @click="refresh()"><i class="el-icon-loading"></i>刷新</a>
                    </div>
                </h3>
                <div class="content-itemlist">
                    <div class="presentation">列表</div>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="id" label="ID" width="70px"></el-table-column>
                        <el-table-column prop="content" label="内容"></el-table-column>
                        <el-table-column prop="publisher" label="发布者" width="80px"></el-table-column>
                        <el-table-column prop="startDate" label="开始时间"></el-table-column>
                        <el-table-column prop="endDate" label="结束时间"></el-table-column>
                        <el-table-column prop="status" label="状态" width="90px"></el-table-column>
                        <el-table-column prop="pageviews" label="浏览量" width="120px"></el-table-column>
                        <el-table-column prop="publisherJob" label="发布职位"></el-table-column>
                        <el-table-column label="操作" width="220px">
                            <template scope="scope">
                                <el-button type="text" size="small" icon="edit">编辑</el-button>
                                <el-button type="text" size="small" icon="delete2">删除</el-button>
                                <el-button type="text" size="small">链接地址</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                id: '20',
                content: 'sd',
                publisher: '王小虎',
                startDate: '17-4-26 12:45:25',
                endDate: '17-4-26 12:45:25',
                status: '未启用',
                pageviews: '234423345',
                publisherJob: 'hgf',
                
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
</style>