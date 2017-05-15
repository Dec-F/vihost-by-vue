<template>
    <div class="main">
        <div class="main-content clear-fix relative">
            <el-row class="notice">
                <el-col :span='4'>
                    <a href="#">公告：接入流程登记主体变更</a>
                </el-col>
            </el-row>
            <el-row class="data-show">
                <h5> 账户与数据统计</h5>
                <el-col :span='4'>
                    <figure style="float:left">
                        <img src="" alt="头像" style='width:70px;height:75px'>
                        <figcaption>
                            <span>
                                <i></i>设置</span>
                        </figcaption>
                    </figure>
                    <br/>
                    <span style="">公积金管理局</span>
                    <br/>
                    <span>安吉县</span>
                    <span></span>
                </el-col>
                <el-col :span='3' class='data-item'>
                </el-col>
                <el-col :span='3' class='data-item'>
                </el-col>
                <el-col :span='3' class='data-item'>
                </el-col>
                <el-col :span='3' class='data-item'>
                </el-col>
                <el-col :span='3' class='data-item'>
                </el-col>
            </el-row>
            <el-row>
                <h5>常用功能与服务</h5>
                <el-col :span='5'>
                    <i class='el-icon-menu'></i>
                    <span>功能配置</span>
                </el-col>
                <el-col :span='5'>
                    <i class='el-icon-menu'></i>
                    <span>功能配置</span>
                </el-col>
                <el-col :span='5'>
                    <i class='el-icon-menu'></i>
                    <span>功能配置</span>
                </el-col>
                <el-col :span='5'>
                    <i class='el-icon-menu'></i>
                    <span>功能配置</span>
                </el-col>
            </el-row>
            <el-row class='service'>
                <el-col :span='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>
                <el-col :span='5'>
                </el-col>
                <el-col :span='5' :offset='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>
                <el-col :span='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>
            </el-row>
            <el-row class='service'>
                <el-col :span='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>
                <el-col :span='5'>
                </el-col>
                <el-col :span='5' :offset='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>
                <el-col :span='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>
            </el-row>
            <el-row class='service'>
                <el-col :span='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>
                <el-col :span='5'>
                </el-col>
                <!--<el-col :span='5' :offset='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>-->
                <el-col :span='5' :offset='10'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>
            </el-row>
            <el-row class='service'>
                <el-col :span='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>
                <el-col :span='5'>
                </el-col>
                <!--<el-col :span='5' :offset='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>-->
                <!--<el-col :span='5'>
                    <i class='el-icon-setting'></i>
                    <span>站点配置</span>
                </el-col>-->
            </el-row>
            <div class="content-box">
                <h5>新产品与服务动态</h5>
                <a href="#">更多动态</a>
                <ul class="dynamic clear-fix">
                    <li>
                        <i class="el-icon-setting"></i>
                        <span>为调研</span>
                    </li>
                    <li>
                        <i class="el-icon-setting"></i>
                        <span>为调研</span>
                    </li>
                    <li>
                        <i class="el-icon-setting"></i>
                        <span>为调研</span>
                    </li>
                    <li>
                        <i class="el-icon-setting"></i>
                        <span>为调研</span>
                    </li>
                </ul>
            </div>
            <div class="content-box">
                <h5>新产品与服务动态</h5>
                <a href="#">更多动态</a>
                <ul class="dynamic clear-fix">
                    <li>
                        <i class="el-icon-setting"></i>
                        <span>为调研</span>
                    </li>
                    <li>
                        <i class="el-icon-setting"></i>
                        <span>为调研</span>
                    </li>
                    <li>
                        <i class="el-icon-setting"></i>
                        <span>为调研</span>
                    </li>
                    <li>
                        <i class="el-icon-setting"></i>
                        <span>为调研</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main',

    methods: {

    }

}
</script>
<style scoped>
.main {
    height: calc(100%-60px);
}

.main-content {
    position: relative;
    left: 12.5%;
    background-color: #D3DCE6;
    padding: 10px 10px 1px 10px
}

.notice,
.data-show {
    margin-bottom: 20px;
}

.el-row {
    background-color: #fff;
    padding: 10px;
}

.main {
    overflow: hidden
}

h5 {
    text-align: left;
    padding: 5px 0 20px 0px
}

.data-item {
    background-color: #13CE66;
    height: 100px;
    margin-left: 5px
}

.service .el-col i,
ul i {
    background-color: #13CE66;
    padding: 30px;
    border-radius: 10px
}

.content-box {
    width: 40%;
    display: inline-block;
    float: left;
    position: relative;
    margin-top: 20px;
    padding: 10px;
    background-color: #fff
}

.content-box+.content-box {
    margin-left: 60px
}

.content-box a {
    position: absolute;
    top: 5px;
    right: 50px
}

.clear-fix::after {
    content: '';
    display: table;
    clear: both
}

.dynamic {
    /*margin-top:20px*/
    list-style: none;
    display: inline-block;
    float: left
}

ul li {
    padding: 10px 0;
}
</style>