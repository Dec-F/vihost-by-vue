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
                <el-tabs v-model="activeName" type="card" style="width:80%;">
                    <el-tab-pane label="关注欢迎语" name="first">
                        <Reply-textarea></Reply-textarea>
                    </el-tab-pane>
                    <el-tab-pane label="关键词自动回复" name="second">
                        <el-button type="success" @click="addRule()">创建新规则</el-button>
                        <br>
                        <el-row :gutter="20" style="line-height: 40px; margin: 10px 0;">
                            <el-col :span="3" style="text-align:right;">规则名称</el-col>
                            <el-col :span="20">
                                <el-input v-model="ruleName"></el-input>
                            </el-col>    
                        </el-row>
                        <el-row :gutter="20" style="line-height: 40px; margin: 10px 0;">
                            <el-col :span="3" style="text-align:right;">关键词</el-col>
                            <el-col :span="20">
                                <el-input v-model="keyword"></el-input>
                            </el-col>    
                        </el-row>
                        <el-row :gutter="20" style="line-height: 34px; margin: 10px 0;">
                            <el-col :span="3" style="text-align:right;">关键词</el-col>
                            <el-col :span="20">
                                <Reply-textarea></Reply-textarea>
                            </el-col>    
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="无匹配自动回复" name="third">dfgg</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import ReplyTextarea from './ReplyTextarea';
export default {
    data() {
        return {
            activeName: 'second',
            ruleName: '',
            keyword: ''
        }
    },
    components: { ReplyTextarea },
    methods: {
        addRule: function () {

        }
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
</style>