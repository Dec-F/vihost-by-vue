<template>
<div class="wrap">
    <el-menu theme="dark" :default-active="activeIndex"  mode="horizontal"  menu-trigger='click'>
        <router-link to='/'><el-menu-item index="1">服务窗管理平台</el-menu-item></router-link>
        <el-submenu index="2">
            <span slot="title">产品与服务</span>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">公积金管理局</el-menu-item>
    </el-menu>
        <el-col :span='3' style="position:absolute;">
            <el-menu theme='dark' mode='vertical' menu-trigger='click' :unique-opened = "true" >
                <el-submenu index="v-1">
                    <span slot="title">基础设置</span>
                        <router-link to='/depart'><el-menu-item index="v-1-1" class='menu-mixin'>部门首页</el-menu-item></router-link>
                </el-submenu>
                <el-submenu index="v-2">
                    <span slot="title">服务窗</span>
                        <router-link to='/menu'><el-menu-item index="v-2-1" class='menu-mixin'>菜单管理</el-menu-item></router-link>
                        <router-link to='/reply'><el-menu-item index="v-2-2" class='menu-mixin'>回复管理</el-menu-item> </router-link>                   
                </el-submenu>
                <el-menu-item index='v-3' class="icon-wrap">二维码<i class='el-icon-picture icon-item'></i></el-menu-item>
                <el-submenu index="v-4">
                    <span slot="title">文章管理</span>
                        <el-menu-item index="v-4-1" class='menu-mixin'>菜单管理</el-menu-item>
                        <el-menu-item index="v-4-2" class='menu-mixin'>回复管理</el-menu-item>                    
                </el-submenu>
                <el-submenu index="v-5">
                    <span slot="title">用户管理</span>
                        <el-menu-item index="v-5-1" class='menu-mixin'>菜单管理</el-menu-item>
                        <el-menu-item index="v-5-2" class='menu-mixin'>回复管理</el-menu-item>                    
                </el-submenu>
                <el-menu-item index="v-6" class="icon-wrap">公积金<i class='el-icon-arrow-right icon-item'></i></el-menu-item>
                <el-menu-item index="v-7" class="icon-wrap">附近地址集<i class='el-icon-arrow-right icon-item'></i></el-menu-item>
                <el-menu-item index="v-8" class="icon-wrap">相册管理<i class='el-icon-arrow-right icon-item'></i></el-menu-item>
                <el-menu-item index="v-9" class="icon-wrap">留言板管理<i class='el-icon-arrow-right icon-item'></i></el-menu-item>
                <el-menu-item index="v-10" class="icon-wrap">修改账号资料<i class='el-icon-arrow-right icon-item'></i></el-menu-item>            
            </el-menu>
            
        </el-col>
        <router-view>
        <!--<MainContent></MainContent>-->
        </router-view>
        <!--<DepartmentIndex></DepartmentIndex>-->
        <!--<MenuManagement></MenuManagement>-->
        <!--<Reply></Reply>-->
</div>
</template>
<script>
// import  MainContent  from './components/Main';
// import DepartmentIndex from './components/DepartmentIndex';
// import MenuManagement from './components/MenuManagement';
// import Reply from './components/Reply.vue';
 export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    // components:{
    //     MainContent,
    //     DepartmentIndex,
    //     MenuManagement,
    //     Reply
    // }
  }
</script>


<style>
html,body,#app,.wrap{
    width: 100%;
    /*height: 100%;*/
    text-align: center;
};
*{
    padding: 0;
    margin: 0
}
.menu-mixin{
    background-color: #1D8CE0
}
.menu-mixin:hover{
    background-color: #475669
}
.icon-wrap{
    position: relative
}
.icon-item{
    position: absolute;
    top: 20px;
    right: 10px
}
.wrap{
    background-color: #324057
}
.relative{
    position: relative;
    left:12.5%;
    width: 87.5%;
    background-color: #fff
}
.relative-wrap{
    overflow: hidden
}
.relative p{
    text-align: left;
    margin: 20px 0 0 20px
}
a{
    text-decoration: none
}

</style>