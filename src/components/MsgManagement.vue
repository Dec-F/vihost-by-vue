<template>
    <div class="relative-wrap">
        <div class="relative">
            <div class="msg-box">
                <h3 class="msg-setting-box">
                    留言板设置
                    <div class="moreaction">
                        <a href="javascript:;" @click="goback()"><i class="el-icon-arrow-left"></i>返回</a>
                        <a href="javascript:;" @click="refresh()"><i class="el-icon-loading"></i>刷新</a>
                    </div>
                </h3>
                <form action="" class="clearfix">
                    <div class="arrangement lineHeight">
                        <span id="msgtitle">集合标题</span>
                        <el-input v-model="title" autofocus></el-input>
                    </div>
                    <div class="arrangement">
                        <span id="synopsis">简介</span>
                        <el-input type="textarea" :rows="5" v-model="content"></el-input>
                    </div>
                    <div class="arrangement">
                        <span id="coverImg">封边图片</span>
                        <img src="http://fwc.vihost.cn/Public/images/default/01.jpg">
                        <el-upload class="upload-demo" action="">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </div>
                    <div class="arrangement lineHeight">
                        <span>是否审核</span>
                        <el-checkbox v-model="checked">备选项</el-checkbox>
                    </div>
                    <div class="arrangement submitBox">
                        <el-button type="primary">提交</el-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'msg',
    data() {
        return {
            title: '',
            content: '',
            checked: true
        }
    },
    methods: {
        refresh: function () {
            location.reload();
        },
        // goback: function () {
        //     history.go(-1);
        // }
    }
}

</script>

<style scoped>
* {
    text-align: left;
}

i {
    vertical-align: middle;
    font-size: 15px
}

.msg-box {
    padding: 15px;
}

input,
textarea {
    color: #555;
}

.msg-setting-box {
    border-bottom: 1px solid #ccc;
    line-height: 28px;
    padding-bottom: 4px;
    margin-bottom: 15px;
}

.moreaction {
    float: right;
}

.clearfix {
    clear: both;
}

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

.lineHeight {
    line-height: 44px;
}

.arrangement {
    padding: 10px 0;
}

.arrangement span {
    width: 100px;
    text-align: right;
    display: inline-block;
    font-size: 14px;
    padding-right: 10px;
}

.arrangement .el-input,
.arrangement .el-textarea {
    padding: 10px;
    width: 60%;
}

.arrangement #synopsis {
    position: relative;
    top: -60px;
}

.arrangement #coverImg {
    position: relative;
    top: -35px;
}

.upload-demo {
    display: inline-block;
}

.synopsis {
    width: 60%;
    height: 60px;
}

.borde {
    border: 1px solid #ccc;
    border-radius: 4px;
}

.arrangement img {
    margin: 0 10px;
}

.submitBox {
    text-align: center;
}

.arrangement .el-checkbox {
    margin-left: 10px;
}

.el-button {
    padding: 10px 50px;
}
</style>
