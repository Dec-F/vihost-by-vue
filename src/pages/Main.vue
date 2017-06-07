<template>
    <div class="main relative-wrap">
        <div class="main-content clear-fix relative">
            <el-row class="notice">
                <el-col>
                    <a :href='resData.notice.href'> 公告：
                        <span class="notice-text">{{resData.notice.title}}</span>
                    </a>
                </el-col>
            </el-row>
            <el-row class="data-show">
                <!--<h5></h5>-->
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
                    <span>{{resData.areaName}}</span>
                    <span></span>
                </el-col>
                <el-col :span='13'>
                    <span class="count-to-pre">今日活跃用户</span>
                    <countTo :startVal='0' :endVal='resData.AU' :duration='5000' class="count-to"></countTo>
                </el-col>
                <el-col :span='7'>
                    <el-badge :value='resData.inform' :max='99' class='badge'>
                        <el-button size='large'>
                            评论
                        </el-button>
                    </el-badge>
    
                    <el-badge :value='resData.leaveWords' :max='99' class='badge'>
                        <el-button size='large'>
                            留言
                        </el-button>
                    </el-badge>
    
                    <el-badge :value='resData.subscribe' :max='99' class='badge'>
                        <el-button size='large'>
                            预约
                        </el-button>
                    </el-badge>
                </el-col>
    
            </el-row>
            <el-row>
                <h5>数据统计</h5>
                <el-col :span='24'>
                    <echarts :styleObj="{height:'500px',width:'100%',background:'#fff'}" :option='barChartOption'>
                    </echarts>
                </el-col>
                <!--<el-col :span='12'>
                                <echarts :styleObj="{height:'500px',width:'100%',background:'#fff'}" :option='radarChartOption'>
                                </echarts>
                            </el-col>-->
            </el-row>
    
        </div>
    </div>
</template>

<script>
import mainReq from 'req/main';
import CountTo from 'vue-count-to';
import Echarts from 'components/Echarts';
import barChartOption from 'src/static/mainEcharts/barChart';
import radarChartOption from 'src/static/mainEcharts/radarChart';
export default {
    name: 'main',
    created() {
        this.$Progress.start()
        this.fetchData().then(res => {
            this.resData = res.data;           
            this.$Progress.finish()
        })
    },
    data() {
        return {
            resData: {
                notice: {
                    title: '',
                    href: ''
                },
                areaName: '',
                inform: 0,
                leaveWords: 0,
                subscribe: 0,
                AU: 1
            },
            barChartOption: barChartOption({ month: 4 }),
            radarChartOption: radarChartOption
        }

    },
    computed: {
        avatar() { return this.$store.state.userInfo.avatar },

        name() { return this.$store.state.userInfo.name }

    },
    methods: {
        fetchData() {
            return mainReq(this.$store.state.userToken)
        }
    },
    components: {
        CountTo,
        Echarts
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

.notice {
    text-align: left
}

.notice-text {
    color: #1D8CE0;
    text-decoration: underline
}

.notice,
.data-show {
    margin-bottom: 20px;
    vertical-align: middle
}

.data-show .el-col+.el-col {
    margin-top: 10px
}

.count-to-pre {
    display: inline-block;
    line-height: 50px;
    font-size: 20px
}

.count-to {
    font-size: 40px;
    vertical-align: bottom;
    color: #FF4949
}

.count-to span {
    color: red;
    font-size: 40px
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

.badge {
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