<template>
    <div>
        <div class="head">
            <el-button-group>
                <el-button icon="edit">文字</el-button>
                <el-dropdown style="margin-left:50px;line-height:36px;cursor:pointer;">
                    <span class="el-dropdown-link">下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i></span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><a href="javascript:;"><i class="el-icon-document"></i>新建图文广播</a></el-dropdown-item>
                        <el-dropdown-item divided><a href="javascript:;"><i class="el-icon-document"></i>从文章列表中选取</a></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-button-group>
        </div>
        <el-input type="textarea" :rows="16" v-model="textarea1" @change="cha()"></el-input>
        <div class="lastwordNum">还可以输入 <span>{{count}}</span> 字</div>        
        <div style="margin-top: 20px;">
            <el-button type="success">保 存</el-button>
            <el-button type="info">取 消</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            count: 600,
            textarea1: '',
        }
    },
    methods: {
        cha: function () {
            this.count = 600 - this.textarea1.length;
        }
    }

}
</script>

<style>
* {
    text-align: left;
}

.head {
    overflow: hidden;
    background: #eee;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-radius: 4px;
}

.head li {
    cursor: pointer;
    width: 160px;
}

.el-tab-pane {
    margin-left: 50px;
}

.lastwordNum {
    height: 40px;
    line-height: 40px;
    text-align: right;
    padding-right: 20px;
    background: #ccc;
}

.lastwordNum span {
    font-size: 20px;
    color: #F25835;
}

</style>