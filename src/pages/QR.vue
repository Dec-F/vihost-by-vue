<template>
    <section class="relative-wrap">
        <div class="relative">
            <el-row style="paddingTop:100px;paddingLeft:120px">
                <el-col :span='3'>
                    <el-button>上传中间图片</el-button>
                </el-col>
                <el-col :span='3'>
                    <el-button>上传中间图片</el-button>
                </el-col>
            </el-row>
            <el-row style="margin:50px 0 0 125px">
                <el-col :span='9'>
                    <img src="" alt="" style="background:#000000;width:300px;height:300px;">
                </el-col>
                <el-col :span='12'>
                    <div>
                        <table cellspacing='20'>
                            <caption><h3>下载二维码</h3></caption>
                            <tr>
                                <th >二维码边长（cm）</th>
                                <th >建议扫描距离（米）</th>
                                <th >下载链接</th>
                            </tr>
                            <tr>
                                <td>sdsd</td>
                                <td>sdsd</td>
                                <td>sdsd</td>
                            </tr>
                            <tr>
                                <td>sdsd</td>
                                <td>sdsd</td>
                                <td>sdsd</td>
                            </tr>
                            <tr>
                                <td>sdsd</td>
                                <td>sdsd</td>
                                <td>sdsd</td>
                            </tr>
                        </table>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>



<style scoped>
h3{
    background-color: #00AAEF;
    color: #ffffff;
    padding: 20px 10px
}
th{
    padding: 10px 50px
}
</style>