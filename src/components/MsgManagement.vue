<template>
    <div class="msg-box">
        <div class="msg-setting-box">
            留言板设置
            <div class="moreaction">
                <a href="javascript:;" onclick="goback()"><span><icon name="refresh"></icon></span>返回</a>
                <a href="javascript:;" onclick="refresh()"><span><icon name="chevron-left"></icon></span>刷新</a>
            </div>            
        </div>
        
        <form action="" class="clearfix">
            <div class="arrangement">
                <label for="msgtitle">集合标题</label>
                <input type="text" id="msgtitle" >
            </div>
            <div class="arrangement">
                <label for="msgtitle">简介</label>
                <textarea name="" id="" ></textarea>
            </div>
            <div class="arrangement">
                <label for="msgtitle">集合标题</label>
                <input type="text" id="msgtitle" >
            </div>
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
    .msg-setting-box {border-bottom: 1px solid #ccc;line-height: 28px;padding-bottom: 4px;font-size: 20px;font-weight: bold;margin-bottom: 15px;}
    .moreaction {float: right;}
    .clearfix {clear:both;}
    .moreaction a {font-size: 16px; font-weight: 400; margin: 0 4px; }
    .moreaction a span {vertical-align: middle;display:inline-block;margin-right:4px}
    .arrangement {line-height:44px;padding:6px 0;}
    .arrangement label {width:100px; text-align:right; display:inline-block;font-size:14px;padding-right:10px;}
    .arrangement input[type='text'] {outline:none; border: 1px solid #ccc;border-radius:4px;height:30px;width:60%;}

</style>