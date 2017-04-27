<template>
    <div class="relative-wrap">
        <div class="relative">
            <div class="msg-box">
                <h3 class="msg-setting-box">
                    文章栏目
                    <div class="moreaction">
                        <a href="javascript:;"><i class="el-icon-plus"></i>添加栏目</a>
                        <a href="javascript:;" @click="goback()"><i class="el-icon-arrow-left"></i>返回</a>
                        <a href="javascript:;" @click="refresh()"><i class="el-icon-loading"></i>刷新</a>
                    </div>
                </h3>
                <div class="content-itemlist">
                    <div class="presentation">列表</div>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="id" label="ID" width="140px"></el-table-column>
                        <el-table-column prop="name" label="分类名称" width="140px"></el-table-column>
                        <el-table-column prop="sort" label="排序" width="100px"></el-table-column>
                        <el-table-column prop="style" label="类型" width="120px"></el-table-column>
                        <el-table-column prop="editDate" label="最后编辑时间" width="260px"></el-table-column>
                        <el-table-column label="操作">
                            <template scope="scope">
                                <el-button type="text" size="small" icon="edit">编辑</el-button>
                                <el-button type="text" size="small" icon="delete2">删除</el-button>
                                <el-button type="text" size="small" icon="document">查看文章</el-button>
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
                id: '2016-05-02',
                name: '王小虎',
                sort: '10',
                style: '图文',
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

ul {
    list-style: none;
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

.el-table__fixed-right {
    width: 20%;
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

.el-table_1_column_6 .el-button--text {
    color: #1f2d3d
}

.el-table_1_column_6 .el-button--text:hover {
    color: #00aaef
}
</style>