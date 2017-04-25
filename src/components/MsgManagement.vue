<template>
    <div class="msg-box">
        <div class="msg-setting-box">
            留言板设置
            <div class="moreaction">
                <a href="javascript:;" @click="goback()"><i class="el-icon-arrow-left"></i>返回</a>
                <a href="javascript:;" @click="refresh()"><i class="el-icon-loading"></i>刷新</a>
            </div>            
        </div>
        <form action="" class="clearfix">
            <div class="arrangement lineHeight">
                <span id="msgtitle">集合标题</span>
                <el-input v-model="title" autofocus></el-input>
            </div>
            <div class="arrangement">
                <span id="synopsis">简介</span>
                <el-input  type="textarea"  :rows="5" v-model="content"></el-input>
            </div>
            <div class="arrangement">
                <span id="coverImg">封边图片</span>
                <img src="http://fwc.vihost.cn/Public/images/default/01.jpg">
                <el-input class="file" type='file'></el-input>
            </div>
            <div class="arrangement lineHeight">
                <span>是否审核</span>
                <el-checkbox v-model="checked">备选项</el-checkbox>
            </div>
            <div class="arrangement submitBox"><el-button type="primary">提交</el-button></div>
        </form>
    </div>
</template>

<script>
    export default {
        name:'msg',
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
    i {vertical-align: middle;font-size: 15px}
    .msg-box {padding: 15px;}
    input, textarea {color: #555;}
    .msg-setting-box {border-bottom: 1px solid #ccc;line-height: 28px;padding-bottom: 4px;font-size: 20px;font-weight: bold;margin-bottom: 15px;}
    .moreaction {float: right;}
    .clearfix {clear:both;}
    .moreaction a {font-size: 16px; font-weight: 400; margin: 0 4px; }
    .moreaction a span {vertical-align: middle;display:inline-block;margin-right:4px}
    .lineHeight {line-height: 44px;}
    .arrangement {padding:10px 0;}
    .arrangement span {width:100px; text-align:right; display:inline-block;font-size:14px;padding-right:10px;}
    .arrangement .el-input, .arrangement .el-textarea {padding: 10px;width:60%;}
    .arrangement #synopsis {position: relative;top: -60px;}
    .arrangement #coverImg {position: relative;top: -35px;}
    .synopsis {width:60%;height:60px;} 
    .borde {border: 1px solid #ccc; border-radius: 4px;}
    .arrangement img {margin: 0 10px;}
    .arrangement .file {position: relative;top: -35px; width: 40%;}    
    .submitBox {text-align: center;}
    .arrangement .el-checkbox {margin-left: 10px;}
</style>
