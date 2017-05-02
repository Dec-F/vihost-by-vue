<template>
    <div class="head">
        <el-button-group>
            <el-button icon="edit">文字</el-button>
            <el-dropdown style="margin-left:50px;line-height:36px;cursor:pointer;">
                <span class="el-dropdown-link">下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><a href="javascript:;"><i class="el-icon-document"></i>新建图文广播</a></el-dropdown-item>
                    <el-dropdown-item divided><a href="javascript:;"><i class="el-icon-document"></i>从文章列表中选取</a></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-button-group>
    </div>
    <el-input type="textarea" :rows="16"></el-input>
    <div class="lastwordNum">还可以输入 <span>600</span> 字</div>
    <div style="margin-top: 20px;">
        <el-button type="success">保 存</el-button>
        <el-button type="info">取 消</el-button>
    </div>
    </el-tab-pane>
    <el-tab-pane label="关键词自动回复" name="second">sdfd</el-tab-pane>
    <el-tab-pane label="无匹配自动回复" name="third">dfgg</el-tab-pane>
</template>

<script>
    export default {
        

    }
</script>