<template>
    <div class="relative-wrap">
        <div class="relative">
            <div class="msg-box">
                <h3 class="msg-setting-box">
                    发布公告
                    <BackAndRefresh/>
                </h3>
                <form action="" class="clearfix">
                    <div class="arrangement lineHeight">
                        <span id="msgtitle">公告内容</span>
                        <el-input v-model="id"></el-input>
                    </div>
                    <div class="arrangement">
                        <span id="synopsis">公告开始时间</span>
                        <el-input v-model="phone"></el-input>
                    </div>
                    <div class="arrangement">
                        <span id="coverImg">公告结束时间</span>
                        <el-input v-model="email"></el-input>
                    </div>
                    <div class="arrangement">
                        <span id="synopsis">状态</span>
                        <el-radio v-model="radio" label="1">启用</el-radio>
                        <el-radio v-model="radio" label="2">禁用</el-radio>
    
                    </div>
                    <div class="arrangement">
                        <span id="coverImg">发布位置</span>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="城市一网"></el-checkbox>
                            <el-checkbox label="人社局"></el-checkbox>
                            <el-checkbox label="旅游局"></el-checkbox>
                        </el-checkbox-group>
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
import BackAndRefresh from 'components/BackAndRefresh'
export default {
    name: 'msg',
    data() {
        return {
            id: '',
            phone: '',
            email: '',
            radio: '1',
            company: '',
            province: '',
            city: '',
            county: '',
            cities: [
                { value: 'Beijing', label: '北京' },
                { value: 'Shanghai', label: '上海' },
                { value: 'Nanjing', label: '南京' },
                { value: 'Chengdu', label: '成都' },
                { value: 'Shenzhen', label: '深圳' },
                { value: 'Guangzhou', label: '广州' }
            ],
            checkList: [],
            
        }
    },
    components: {
        BackAndRefresh
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

input {
    height: 36px;
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
    font-size: 16px;
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

.arrangement .el-input {
    padding: 0 10px;
    width: 22%;
}

.arrangement:nth-child(1) .el-input {
    width: 50%;
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

.el-radio {
    margin-left: 10px;
}

.el-button {
    padding: 10px 50px;
}

.el-checkbox-group {
    display: inline-block;
}
</style>
