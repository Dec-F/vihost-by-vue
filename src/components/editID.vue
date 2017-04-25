<template>
    <div class="msg-box">
        <div class="msg-setting-box">
            账号资料
            <div class="moreaction">
                <a href="javascript:;" onclick="goback()"><i class="el-icon-arrow-left"></i>返回</a>
                <a href="javascript:;" onclick="refresh()"><i class="el-icon-loading"></i>刷新</a>
            </div>            
        </div>
        <form action="" class="clearfix">
            <div class="arrangement lineHeight">
                <span id="msgtitle">账号</span>
                <el-input v-model="id"></el-input>
            </div>
            <div class="arrangement">
                <span id="synopsis">手机</span>
                <el-input v-model="phone"></el-input>
            </div>
            <div class="arrangement">
                <span id="coverImg">邮箱</span>
                <el-input v-model="email"></el-input>
            </div>
            <div class="arrangement">
                <span id="synopsis">姓名/昵称</span>
                <el-input v-model="name"></el-input>
            </div>
            <div class="arrangement">
                <span id="coverImg">组织/公司</span>
                <el-input v-model="company"></el-input>
            </div>
            <div class="arrangement ">
                <span>地区</span>
                <el-select v-model="province" placeholder="请选择">
                    <el-option v-for="item in cities" :label="item.label" :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                </el-select>
                <el-select v-model="city" placeholder="请选择">
                    <el-option v-for="item in cities" :label="item.label" :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                </el-select>
                <el-select v-model="county" placeholder="请选择">
                    <el-option v-for="item in cities" :label="item.label" :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                </el-select>
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
                id: '',
                phone: '',
                email: '',
                name: '',
                company: '',
                province: '',
                city: '',
                county: '',
                cities: [
                    {value: 'Beijing',  label: '北京'}, 
                    {value: 'Shanghai', label: '上海'}, 
                    {value: 'Nanjing', label: '南京'}, 
                    {value: 'Chengdu', label: '成都'}, 
                    {value: 'Shenzhen',label: '深圳'}, 
                    {value: 'Guangzhou', label: '广州'}
                ],
            }
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
    .synopsis {width:60%;height:60px;} 
    .borde {border: 1px solid #ccc; border-radius: 4px;}
    .arrangement img {margin: 0 10px;}
    .submitBox {text-align: center;}
    .arrangement .el-checkbox {margin-left: 10px;}
</style>
