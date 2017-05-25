<template>
    <section class="relative-wrap">
        <div class="relative">
            <i>tips:用于生活号推广的二维码</i>
            <el-row style="paddingTop:100px;paddingLeft:120px">
                <el-col :span='4'>
                    <el-button @click='toggleUpload'>上传中间图片</el-button>
                    <my-upload v-model="uploadShow" field='QRIcon' url='/qr'></my-upload>
                    <img :src="imgDataUrl">
                </el-col>
                <el-col :span='4'>
                    <el-button @click='getNewQR'>生成二维码</el-button>
                </el-col>
            </el-row>
            <el-row style="margin:50px 0 0 100px">
                <el-col :span='8'>
                    <img :src="QRUrl" alt="" style="background:#000000;width:300px;height:300px;">
                </el-col>
                <el-col :span='12' :offset='2'>
                    <div>
                        <table cellspacing='20'>
                            <caption>
                                <h3>下载二维码</h3>
                            </caption>
                            <tr>
                                <th>二维码边长（cm）</th>
                                <th>建议扫描距离（米）</th>
                                <th>下载链接</th>
                            </tr>
                            <tr>
                                <td>4cm</td>
                                <td>0.25m</td>
                                <td>
                                    <a :href='downloadUrl[0]' download='QR' class='QR-download'>下载</a>
                                </td>
                            </tr>
                            <tr>
                                <td>8cm</td>
                                <td>0.5m</td>
                                <td>
                                    <a :href='downloadUrl[1]' download='QR' class='QR-download'>下载</a>
                                </td>
                            </tr>
                            <tr>
                                <td>15cm</td>
                                <td>1m</td>
                                <td>
                                    <a :href='downloadUrl[2]' download='QR' class='QR-download'>下载</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script>
import myUpload from 'components/ImageUpload';
import * as QR from 'req/QR';

export default {
    data() {
        return {
            uploadShow: false,
            imgDataUrl: '',
            downloadUrl: [],
            QRUrl: ''
        }
    },
    created() {
        this.getQR()
    },
    methods: {
        toggleUpload() {
            this.uploadShow = !this.uploadShow
        },
        getQR() {
            QR.getQR(this.$store.state.userToken).then(res => {
                this.downloadUrl = res.data.downloadUrl;
                this.QRUrl = res.data.QRUrl
            })
        },
        getNewQR() {
            QR.getNewQR(this.$store.state.userToken).then(res => {
                this.downloadUrl = res.data.downloadUrl;
                this.QRUrl = res.data.QRUrl
            })
        }

    },
    components: {
        myUpload
    }
}
</script>



<style scoped>
h3 {
    background-color: #00AAEF;
    color: #ffffff;
    padding: 20px 10px
}

.QR-download {
    color: #00AAEF
}

th {
    padding: 10px 50px
}
</style>