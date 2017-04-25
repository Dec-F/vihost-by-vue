<template>
    <div class="msg-box">
        <div class="msg-setting-box">
            留言板设置
            <div class="moreaction">
                <a href="javascript:;" onclick="goback()"><span></span>返回</a>
                <a href="javascript:;" onclick="refresh()"><span></span>刷新</a>
            </div>            
        </div>
        
        <form action="" class="clearfix">
            <div class="arrangement lineHeight">
                <label for="msgtitle">集合标题</label>
                <input type="text" id="msgtitle" class="borde">
            </div>
            <div class="arrangement">
                <label for="synopsis">简介</label>
                <textarea name="" id="synopsis" class="borde" rows="8"></textarea>
            </div>
            <div class="arrangement">
                <label for="coverImg">封边图片</label>
                <img src="http://fwc.vihost.cn/Public/images/default/01.jpg" alt="">
                <input type="file">
            </div>
            <div class="arrangement lineHeight">
                <label>是否审核</label>
                <input type="checkbox" id="flagCheck"><label for="flagCheck" style="width:30px;">审核</label>
            </div>
            <div class="arrangement submitBox"><input type="submit" value="提交"></div>
        </form>
    </div>
</template>

<script>
    export default {
        name:'msg',
        data() {
            return {
                
            }
        },
    }

</script>

<style scoped>
    .msg-box {padding: 15px;}
    input, textarea {color: #555;}
    .msg-setting-box {border-bottom: 1px solid #ccc;line-height: 28px;padding-bottom: 4px;font-size: 20px;font-weight: bold;margin-bottom: 15px;}
    .moreaction {float: right;}
    .clearfix {clear:both;}
    .moreaction a {font-size: 16px; font-weight: 400; margin: 0 4px; }
    .moreaction a span {vertical-align: middle;display:inline-block;margin-right:4px}
    .lineHeight {line-height: 44px;}
    .arrangement {padding:10px 0;}
    label {width:100px; text-align:right; display:inline-block;font-size:14px;padding-right:10px;}
    .arrangement input[type='text'] {outline:none;padding: 10px;width:60%;}
    .arrangement label[for='synopsis'] {position: relative;top: -70px;}
    .arrangement label[for='coverImg'] {position: relative;top: -35px;}
    .synopsis {width:60%;height:60px;} 
    .borde {border: 1px solid #ccc; border-radius: 4px;}
    textarea {width: 60%;resize:none;outline: none;padding: 10px;word-wrap: break-word;}
    .arrangement img {margin: 0 10px;}
    .arrangement input[type='file'] {position: relative;top: -30px;}
    .arrangement input[type='checkbox'] {zoom: 1.2; vertical-align: middle;}
    .arrangement label[for='flagCheck'] {display: inline}
    .submitBox {text-align: center;}
    .submitBox input[type='submit'] {font-size: 14px; padding: 6px 50px; border:1px solid #2e6da4; background: #337ab7;cursor: pointer;color: #fff;border-radius: 4px;}
</style>