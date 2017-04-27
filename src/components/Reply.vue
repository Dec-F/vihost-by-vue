<template>
<div class="relative-wrap" >
    <div class="relative">
        <div class="msg-box">
             <h3 class="msg-setting-box">
                标签管理
                <div class="moreaction">
                    <a href="javascript:;" @click="goback()"><i class="el-icon-plus"></i>添加文章</a>
                    <a href="javascript:;" @click="goback()"><i class="el-icon-arrow-left"></i>返回</a>
                    <a href="javascript:;" @click="refresh()"><i class="el-icon-loading"></i>刷新</a>
                </div>
             </h3>
             <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="用户管理" name="first">关注欢迎语</el-tab-pane>
                <el-tab-pane label="配置管理" name="second">关键词自动回复</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">无匹配自动回复</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style>
    * {
        text-align: left;
    }
    .msg-setting-box {
        border-bottom: 1px solid #ccc;
        line-height: 28px;
        padding-bottom: 4px;
        margin-bottom: 15px;
    }

    .msg-box {
        padding: 15px;
    }
    .moreaction {
        float: right;
    }
</style>