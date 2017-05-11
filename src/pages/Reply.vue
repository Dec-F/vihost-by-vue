<template>
    <div class="relative-wrap">
        <div class="relative">
            <div class="msg-box">
                <h3 class="msg-setting-box">
                    标签管理
                    <BackAndRefresh/>
                </h3>
                <el-tabs v-model="activeName" type="card" style="width:80%;margin-left: 50px;">
                    <el-tab-pane label="关注欢迎语" name="first">
                        <ReplyTextarea :textareVal="!flagnew"></ReplyTextarea>
                    </el-tab-pane>
                    <el-tab-pane label="关键词自动回复" name="second">
                        <el-button type="success" @click="flag = !flag" v-show="!flag">创建新规则</el-button>
                        <br>
                        <transition name="fade">
                            <form v-show="flag">
                                <el-row :gutter="20" class="span1">
                                    <el-col :span="3" class="tx-r">规则名称</el-col>
                                    <el-col :span="20" style="position:relative;">
                                        <el-input v-model="ruleName" placeholder="最多30字,不能为空" maxlength="30" @change="lastw()" autofocus @focus="titleLWShow = true" @blur="titleLWShow = false"></el-input>
                                        <span v-show="titleLWShow" class="lastWord-box">还可以再输入 <label class="lastWord1">{{titleLastW}}</label> 字</span>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" class="span1">
                                    <el-col :span="3" class="tx-r">关键词</el-col>
                                    <el-col :span="20">
                                        <div :class="{'keyword-box': isShow}">
                                            <span v-for="(val, index) in keywordArr" @click="delKeyword(index)">{{val}}</span>
                                            <el-input v-show="inpShow" v-model="keyword" @keyup.enter.native="smkeyword()" placeholder="最多10个关键词，用回车分隔，不能为空"></el-input>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" class="span1">
                                    <el-col :span="3" class="tx-r">关键词</el-col>
                                    <el-col :span="20">
                                        <ReplyTextarea :textareVal="flagnew"></ReplyTextarea>
                                    </el-col>
                                </el-row>
                            </form>
                        </transition>
                    </el-tab-pane>
                    <el-tab-pane label="无匹配自动回复" name="third">
                        <ReplyTextarea :textareVal="!flagnew"></ReplyTextarea>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import ReplyTextarea from 'components/ReplyTextarea';
import BackAndRefresh from 'components/BackAndRefresh'
export default {
    data() {
        return {
            activeName: 'first',
            ruleName: '',
            keyword: '',
            keywordArr: [], 
            flag: false,
            titleLastW: 30,
            inpShow: true,
            titleLWShow: false,
            isShow: false,
            flagnew: false,
        }
    },
    components: { 
        ReplyTextarea,
        BackAndRefresh
    },
    methods: {
        lastw: function () {
            this.titleLastW = '30' - this.ruleName.length;
        },
        smkeyword: function () { 
            this.isShow = true;           
            const keyword = this.keyword.trim();
            if (!keyword) {
                return false;
            }
            this.keywordArr.push(this.keyword);            
            this.keyword = '';  
            if (this.keywordArr.length >= 10) {
                this.inpShow = !this.inpShow;
            }
        },
        delKeyword: function (index) {
            this.keywordArr.splice(index, 1);
            if (this.keywordArr.length >= 10) {
                this.inpShow = false;
            } else {
                this.inpShow = true;
            } 
            if (this.keywordArr.length == 0) {
                this.isShow = false;    
            }
        }       
    }
}

</script>
<style scoped>
.tx-r {
    text-align: right;
}

* {
    text-align: left;
    list-style: none;
    font-size: 14px;
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

.span1 {
    line-height: 34px;
    margin: 10px 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}

.lastWord-box {
    font-size: 14px;
    margin-right: 20px;
    position: absolute;
    top: 0;
    right: 10px;
}
.lastWord1 {
    color: #F25835;
}

.keyword-box {
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
}

.keyword-box span {
    word-break: break-word;
    cursor: pointer;
    color: #08c;
    margin: 0 10px;
}

.keyword-box span:hover {
    text-decoration: line-through;
}
</style>