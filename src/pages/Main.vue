<template>
    <div class="main relative-wrap">
        <div class="main-content clear-fix relative">
            <el-row class="notice">
                <el-col :span='4'>
                    <a :href='fetchData.notice.href'> 公告：{{fetchData.notice.title}}</a>
                </el-col>
            </el-row>
            <el-row class="data-show">
                <h5> 账户与数据统计</h5>
                <el-col :span='4'>
                    <figure style="float:left">
                        <img :src='avatar' alt="头像" style='width:70px;height:75px'>
                        <figcaption>
                            <!--<span><i class="el-icon-setting"></i>设置</span>-->
                        </figcaption>
                    </figure>
                    <br/>
                    <span style="">{{name}}</span>
                    <br/>
                    <span>{{fetchData.area}}</span>
                    <span></span>
                </el-col>
                <el-col :span='7' :offset='13'>
                    <el-badge :value='fetchData.inform' :max='99' class='badge'>
                        <el-button size='large'>
                            评论
                        </el-button>
                        </el-badge>
                
                    <el-badge :value='fetchData.leaveWords' :max='99' class='badge'>
                        <el-button size='large'>
                            留言
                        </el-button>
                        </el-badge>
                
                    <el-badge :value='fetchData.subscribe' :max='99' class='badge'>
                        <el-button size='large'>
                            预约
                        </el-button>
                        </el-badge>
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
    data() {
        return {
            fetchData: {
                notice: {
                    title: '',
                    href: ''
                },
                area: '',
                inform:27,
                leaveWords:200,
                subscribe:87
            },
        }
    },
    computed: {
        avatar() { return this.$store.state.avatar },

        name() { return this.$store.state.name }

    },
    methods: {

    }

}
</script>
<style scoped>
.main {
    height: calc(100%-60px);
}

.main-content {
    /*position: relative;*/
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


h5 {
    text-align: left;
    padding: 5px 0 20px 0px
}

.data-item {
    background-color: #13CE66;
    height: 100px;
    margin-left: 5px
}
.badge{
    margin: 10px
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