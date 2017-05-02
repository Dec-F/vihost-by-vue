<template>
    <div class="relative-wrap">
        <div class="relative">
            <div class="msg-box">
                <h3 class="msg-setting-box">标签管理
                    <div class="moreaction">
                        <a href="javascript:;" @click="goback()"><i class="el-icon-arrow-left"></i>返回</a>
                        <a href="javascript:;" @click="refresh()"><i class="el-icon-loading"></i>刷新</a>
                    </div>
                </h3>
                <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                    <el-tab-pane label="关注欢迎语" name="first">
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
                        <el-input type="textarea" :rows="16"></el-input>
                        <div class="lastwordNum">还可以输入 <span>600</span> 字</div>
                        <div style="margin-top: 20px;">
                            <el-button type="success">保 存</el-button>
                            <el-button type="info">取 消</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="关键词自动回复" name="second">sdfd</el-tab-pane>
                    <el-tab-pane label="无匹配自动回复" name="third">dfgg</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName2: 'first',
            isShow: true
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },

    }
}

</script>
<style scoped>
.show {
    display: none;
}

* {
    text-align: left;
    list-style: none;
}

button {
    padding: 10px 40px;
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
    font-weight: 200;
    font-size: 16px;
}

img {
    vertical-align: middle;
}

.el-tab-pane {
    margin-left: 50px;
}

textarea {
    margin-top: -1px;
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