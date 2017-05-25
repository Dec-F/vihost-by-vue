<template>
    <div class="login">
        <div id="main" style="width:100vw;height:100vh"></div>
        <el-form :model='login' :rules='rules' ref="login" action='1.1.1.1'>
            <h2>管理后台登陆</h2>
            <el-form-item prop='userName'>
                <el-input placeholder="UserName" v-model="login.userName">
    
                </el-input>
            </el-form-item>
            <el-form-item prop='passWord'>
                <el-input placeholder="Password" v-model="login.passWord">
    
                </el-input>
            </el-form-item>
            <el-button type='primary' @click="submitForm('login')">
                登陆
            </el-button>
    
        </el-form>
    
    </div>
</template>

<script>

const echarts = require('echarts')
import option from '../static/op.js';
import china from 'src/static/china.json';

export default {

    mounted() {
        echarts.registerMap('china', china);

        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption(option.option);

    },
    data() {
        return {
            login: {
                userName: '',
                passWord: ''
            },
            rules: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                passWord: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, message: '长度至少为6位', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$store.dispatch('login').then(() => {
                        this.$router.push('/')
                        this.$message({
                            type: 'success',
                            message: '登录成功'
                        })
                    }, (error) => {
                        this.$message({
                            type: 'error',
                            message: '登录错误，如有需要，请联系管理员'
                        })
                    })

                } else {
                    this.$message({
                        type: 'error',
                        message: '格式错误'
                    })
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    color: #D3DCE6;
    margin: 20px
}

.login {
    background-color: #324057;
    height: 100vh;
    width: 100vw
}

.login-section {
    position: absolute;
    top: 50vh;
    transform: translate(0, -50%)
}

.el-input {
    width: 300px;
    display: block;
}

.el-button {
    margin: 0 50px;
    width: 200px
}

.el-form {
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -60%)
}
</style>