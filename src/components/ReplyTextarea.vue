<template>
    <div>
        <div class="head">
            <el-button-group>
                <el-button icon="edit">文字</el-button>
                <el-dropdown style="margin-left:50px;line-height:36px;cursor:pointer;">
                    <span class="el-dropdown-link">图文
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-show="textareVal">
                            <router-link to='/AddArticle'>
                                <i class="el-icon-document"></i><span>新建图文广播</span>
                            </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <a href="javascript:;">
                                <i class="el-icon-document"></i><span>从文章列表中选取</span></a>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-button-group>
        </div>
        <el-input type="textarea" :rows="16" v-model="textarea1" @change="cha()" maxlength="600"></el-input>
        <div class="lastwordNum">还可以输入
            <span>{{count}}</span> 字</div>
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
    props: {textareVal: Boolean},
    computed: {
        cha: function () {
            this.count = 600 - this.textarea1.length;
        }
    }
 
}
 
</script>

<style scoped>
* {
    text-align: left;
}

.head {
    overflow: hidden;
    background: #eee;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-radius: 4px;
    height: 36px;
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

.el-button-group {
    margin-left: 1px;
    vertical-align: top !important;
}
</style>