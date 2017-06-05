<template>
    <div class="relative-wrap">
        <div class="relative msg-box">
            <h3 class="msg-setting-box">
                标签管理
                <BackAndRefresh/>
            </h3>
            <div class="wrap">
                <div class="wrap-left">
                    <div class="wrap-left-title">
                        <img src="http://fwc.vihost.cn/data/upload/logo.png" alt="">
                        <span class="title1">城市一网</span>
                    </div>
                    <div class="carousel">
                        <img src="http://fwc.vihost.cn/data/upload/2017/05/25/59266b95a52ca.png" alt="">
                    </div>
                    <dl class="users">
                        <dt class="my-user">我的应用</dt>
                        <dd class="my-user-list" v-for="item in dataArr" @mouseenter="addOrReduce(item)">
                            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4207463768,3303730421&fm=117&gp=0.jpg" alt="">
                            <span class="user-name">{{item.title}}</span>
                            <div class="operation" v-show="item.flaga">
                                <!--<img src="http://fwc.vihost.cn/static/images/cityOneNetworkImg/reduce.png" alt="">-->
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4262602734,1119668098&fm=23&gp=0.jpg" alt="">
                                <img src="http://fwc.vihost.cn/static/images/cityOneNetworkImg/add.png" alt="">
                            </div>
                            <div class="move" v-show="item.flagm">☰</div>
                        </dd>
                        
                    </dl>
                </div>

                <div class="wrap-right">right</div>
            </div>
        </div>
    </div>
</template>

<script>
import BackAndRefresh from 'components/BackAndRefresh'
export default {
    name: 'dapartmentIndex',
    components: { 
        BackAndRefresh
    },
    data() {
        return {
            dataArr: [
                {
                    title: '共享单车1',
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4207463768,3303730421&fm=117&gp=0.jpg',
                    flaga: false,
                    flagm: false,
                },
                {
                    title: '共享单车2',
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4207463768,3303730421&fm=117&gp=0.jpg',
                    flaga: false,
                    flagm: false,
                },
                {
                    title: '共享单车3',
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4207463768,3303730421&fm=117&gp=0.jpg',
                    flaga: false,
                    flagm: false,
                },
                {
                    title: '共享单车4',
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4207463768,3303730421&fm=117&gp=0.jpg',
                    flaga: false,
                    flagm: false,
                },
            ],
           
        }
    },
    methods: {
        addOrReduce: function (item) {
            this.dataArr.forEach(function(val, key) {
                val.flaga = false;
            }, this);
            item.flaga = true;
        }
    }
}
</script>
<style scoped>
.disp {display: none;}
* {text-align: left}
.msg-setting-box {
    border-bottom: 1px solid #ccc;
    line-height: 28px;
    padding-bottom: 4px;
    margin-bottom: 15px;
}

.msg-box {
    padding: 15px;
}
img {vertical-align: middle;margin-top: -6px;}
.wrap {
    padding: 50px 80px; overflow:hidden;background: #fff;
}
.wrap-left {width:330px; float:left; margin-right:6%;}
.wrap-right {width:64%; height: 200px; float:left}
.wrap-left-title {text-align:center; height: 50px; line-height: 50px; background: #353535;color: #fff;}
.wrap-left-title img {width:34px; border-radius:50%}
.carousel img {width:330px;height:154px;}
.my-user {background: #f6f5fa; padding: 10px;}
.my-user-list {width:50%;text-indent:15px; float:left; position: relative; padding:10px 0; box-sizing:border-box; border-right:1px solid #f6f5fa; border-bottom: 1px solid #f6f5fa;}
.my-user-list img {width:25px;}
.operation {position:absolute; right:10px; top:10px; z-index: 10}
.operation img {width:16px;}
.move {color: #ccc; position: absolute; right:10px; top:10px;z-index: 10}
.user-name {white-space: nowrap; text-overflow: ellipsis; width: 70%; display: inline-block;overflow: hidden;}

</style>