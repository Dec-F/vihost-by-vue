<template>
    <div class="relative-wrap">
        <div class="relative msg-box">
            <h3 class="msg-setting-box">
                添加文章
                <BackAndRefresh></BackAndRefresh>
            </h3>
            <form action="">
                <el-row>
                    <el-col :span="3" class="lineH">标题</el-col>
                    <el-col :span="10"><el-input v-model="title" autofocus></el-input></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">简介</el-col>
                    <el-col :span="20"><el-input type="textarea" :rows="5" v-model="content"></el-input></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3" class="lineH">栏目</el-col>
                    <el-col :span="20">
                        <el-select placeholder="请选择">
                            <el-option>asd</el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row>                    
                    <el-col :span="3">是否审核</el-col>
                    <el-col :span="10">
                        <input type="radio" @click="isAdd = true" class="dift" checked name="radio1" id="radio1"><label for="radio1"> 内部添加 </label>
                        <input type="radio" @click="isAdd = false" class="dift" name="radio1" id="radio2"><label for="radio2"> 外部url</label>
                        <!--<el-radio class="radio" @click="isAdd = true" v-model="radio1" label="q1">内部添加</el-radio>
                        <el-radio class="radio" @click="isAdd = false" v-model="radio1" label="q2">外部url</el-radio>-->
                    </el-col>
                </el-row>
                <div v-if="isAdd">
                    <el-row>
                        <el-col :span="3">点赞</el-col>
                        <el-col :span="5">
                            <input type="checkbox" class="dift" id="like" v-model="like" /><label for="like"> 启用</label>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">评论</el-col>
                        <el-col :span="5">
                            <input type="checkbox" class="dift" id="comment" v-model="comment" /><label for="comment"> 启用</label>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">封边图片</el-col>
                        <el-col :span="4"><img src="http://fwc.vihost.cn/Public/images/default/01.jpg"></el-col>
                        <el-col :span="12">
                            <el-upload action="">
                                <el-button type="primary">点击上传</el-button>
                                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">内容</el-col>
                        <el-col :span="20"><el-input type="textarea" :rows="5" v-model="content"></el-input></el-col>
                    </el-row>
                    
                </div>
                <el-row v-else>
                    <el-col :span="3" class="lineH">链接</el-col>
                    <el-col :span="10"><el-input>https:baidu.com</el-input></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3" class="lineH">排序</el-col>
                    <el-col :span="10"><el-input>23</el-input></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3" class="lineH">发表日期</el-col>
                    <el-col :span="10">
                        <el-date-picker v-model="datepicker" ype="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
                    </el-col>
                </el-row>
                <el-row class="submitBox">
                    <el-button type="primary">提交</el-button>
                </el-row>
            </form>
        </div>
    </div>
</template>

<script>
import BackAndRefresh from 'components/BackAndRefresh';
export default {
    name: 'msg',
    data() {
        return {
            // pickerOptions0: {
            //     disabledDate(time) {
            //         return time.getTime() < Date.now() - 8.64e7;
            //     }
            // },
            title: '',
            content: '',
            checked: true,
            radio1: 'q1',
            isAdd: true,
            like: '',
            comment: '',
            datepicker: ''
            
        }
    },
    components: {
        BackAndRefresh
    },

}

</script>

<style scoped>
* {
    text-align: left;
}

.msg-box {
    padding: 15px;
}
.dift {
    border: 1px solid #bfcbd9;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
    box-sizing: border-box;
    vertical-align: middle;
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

.el-row {
    margin: 20px 0
}

.el-col-3 {
    text-align: right;
    margin-right: 20px;
}

.lineH {
    line-height: 34px;
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
