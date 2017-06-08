<template>
    <div class="relative-wrap">
        <div class="relative">
            <i>tips:服务窗底栏菜单</i>
            <br/>
            <i>最多可添加4个主菜单(包括对话功能)，每个主菜单最多可添加5个子菜单</i>
    
            <el-row>
                <el-col :span='8' :offset='2'>
                    <section class="preview">
                        <div class="preview-title">政务一网</div>
                        <div class="preview-menu">
                            <span class="preview-dialog menu-item" v-if="dialog">
                                <i class="el-icon-message"></i>
                            </span>
                            <span class="menu-item" v-for="(item,index) in menu[0].children" @click='openSubmenu(index)'>
                                {{item.label}}
                                <ul class="menu-item-submenu" v-if="index===submenu">
                                    <li v-for="children in item.children" class="submenu-item">{{children.label}}</li>
    
                                </ul>
                            </span>
                        </div>
                    </section>
                </el-col>
                <el-col :span='8'>
                    <section>
                        <div class="dialog-toggle">
                            <span>对话框功能</span>
                            <el-switch v-model="dialog" @change='toggleDialog'>
                            </el-switch>
                        </div>
                        <el-tree :data="menu" node-key="id" default-expand-all :render-content="renderContent" :expand-on-click-node='false'>
                        </el-tree>
                        <div class="save-button">
                            <el-button type='primary' @click='saveMenu'>保存</el-button>
                        </div>
                    </section>
                </el-col>
            </el-row>
            <el-dialog title='菜单设置' :visible.sync="inputActive" class="input-form" size='tiny'>
                <el-form :model="inputForm" :rules='rules' ref='inputForm'>
                    <el-form-item label="菜单名称" prop='name'>
                        <el-input v-model="inputForm.name" auto-complete="off"></el-input>
                    </el-form-item>
    
                    <el-form-item label='菜单类型' v-if="inputType==2" prop="type">
                        <el-select v-model="inputForm.type" placeholder="请选择菜单类型">
                            <el-option label="关键词回复" :value="1"></el-option>
                            <el-option label="栏目" :value="2"></el-option>
                            <el-option label="附近地址集" :value="3"></el-option>
                            <el-option label="留言板" :value="4"></el-option>
                            <el-option label="相册" :value="5"></el-option>
                            <el-option label="附近地图" :value="6"></el-option>
                            <el-option label="微首页" :value="7"></el-option>
                            <el-option label="url链接" :value="8"></el-option>
                        </el-select>
                    </el-form-item>
    
                    <el-form-item :label='inputLabel[inputForm.type-1]' v-if="[6,8].indexOf(inputForm.type)!==-1" prop='textContent'>
                        <el-input v-model="inputForm.textContent" auto-complete="off" :placeholder="inputPlaceholder[inputForm.type]"></el-input>
                    </el-form-item>
                    <el-form-item label='菜单效果' v-if="[1,2,3].indexOf(inputForm.type)!==-1" prop="selectContent">
                        <el-select v-model="inputForm.selectContent" :placeholder="'请选择'+inputLabel[inputForm.type-1]">
                            
                        </el-select>
                    </el-form-item>
    
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="cancel">取 消</el-button>
                    <el-button type="primary" @click="inputValidate(inputForm)">确 定</el-button>
                </div>
            </el-dialog>
    
        </div>
    </div>
</template>


<script>
import menuAPI from 'req/serviceWindow/menu';


export default {
    mounted() {
        this.$Progress.start()
        menuAPI.getMenu(this.$store.state.userToken).then(({ data }) => {
            this.menu[0].children = data.menu;
            this.dialog = data.dialog;
            this.$Progress.finish()
        }, (err) => {
            this.$Progress.fail()
            this.$message({
                type: 'error',
                message: '获取失败，请刷新'
            })
        })
    },

    data() {
        return {
            menu: [{
                id: 0,
                label: '底栏菜单',
                children: []
            }],
            dialog: true,
            submenu: null,
            inputActive: false,
            inputType: 0,
            inputLabel: ["关键词", "栏目", '附近地址集', "留言板", '相册', '附近地图', '微首页', 'url链接'],
            inputPlaceholder: {
                '6': '用户点击该菜单后，将以此关键字查询相关具体位置',
                '8': '请填写http://或https://开头的网址，用户点击后跳转'
            },

            inputForm: {
                name: '',
                type: null,
                textContent: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 2, max: 6, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                ],
                type: [
                    { required: true, type: 'number', message: '请输入类型', trigger: 'blur' }
                ],
                textContent: [
                    { required: true, message: '请输入关键字', trigger: 'blur' },
                ],
                selectContent:[
                    { required: true, message: '请输入内容', trigger: 'blur' }
                ]
            }
        }
    },

    methods: {

        inputValidate(data) {
            this.$refs.inputForm.validate(valid => {
                if (valid) {
                    this.confirm(data)
                } else {
                    this.cancel()
                }
            })
        },
        confirm() { },
        cancel() { },
        toggleDialog() {
            if (this.menu[0].children.length > 3) {
                this.$message({
                    type: 'error',
                    message: '请删除一个主菜单后再开启'
                })
                this.dialog = false
            }
        },

        openSubmenu(index) {
            if (index === this.submenu) {
                this.submenu = null
            } else {
                this.submenu = index
            }
        },

        saveMenu() {
            this.$Progress.start()
            menuAPI.saveMenu(this.$store.state.userToken).then(() => {
                this.$message({
                    type: 'success',
                    message: '保存成功'
                })
                this.$Progress.finish()
            }).catch(err => {
                this.$Progress.fail()
                this.$message({
                    type: 'error',
                    message: '保存失败'
                })
            })
        },

        renderContent(h, { node, data, store }) {
            if (data.id === 0) {
                return (<span>
                    <span>
                        <span>{node.label}</span>
                    </span>
                    <span class='tree-edit' style="float: right; margin-right: 73px;opacity:0">
                        <i class='el-icon-plus' on-click={() => this.add(store, data)}></i>
                    </span>
                </span>)
            }
            if (!data.children) {
                return (
                    <span>
                        <span>
                            <span>{node.label}</span>
                        </span>
                        <span class='tree-edit' style="float: right; margin-right: 20px;opacity:0">
                            <i class='el-icon-edit' style='margin:0 10px;' on-click={() => this.edit(store, data)}></i>
                            <i class='el-icon-delete' on-click={() => this.remove(store, data)}></i>
                        </span>
                    </span>)
            }
            return (
                <span>
                    <span>
                        <span>{node.label}</span>
                    </span>
                    <span class='tree-edit' style="float: right; margin-right: 20px;opacity:0">
                        <i class='el-icon-plus' on-click={() => this.add(store, data)}></i>
                        <i class='el-icon-edit' style='margin:0 10px;' on-click={() => this.edit(store, data)}></i>
                        <i class='el-icon-delete' on-click={() => this.remove(store, data)}></i>
                    </span>
                </span>);
        },
        getMap(arr) {
            return arr.reduce((acc, val) => {
                acc[val.id] = val

                if (val.children) {
                    acc = Object.assign(acc, this.getMap(val.children))
                }

                return acc
            }, {})
        },
        getIndex(arr, id) {
            let rIndex = null;
            arr.forEach((val, index) => {
                if (val.id === id) {
                    rIndex = index
                }
            })
            return rIndex
        },
        getMaxId(map) {
            let id = 0;
            for (var key in map) {
                if (map.hasOwnProperty(key)) {
                    if (id < parseInt(key))
                        id = parseInt(key);
                }
            }
            return id
        },

        edit(store, data) {
            !data.children ? this.inputType = 2 : this.inputType = 1
            this.inputActive = true;
            this.inputVal().then(val => {
                data.label = val.name
                if (val.type) {
                    data.type = val.type
                }
                this.inputActive = false
            }).catch(err => {
                this.$message('取消编辑');
                this.inputActive = false
            })
        },

        remove(store, data) {
            let arr = this.map[data.parent].children
            if (!arr) {
                arr = this.menu
            }
            arr.splice(this.getIndex(arr, data.id), 1)

        },

        add(store, data) {

            let maxId = this.getMaxId(this.map)

            let tem = {
                id: ++maxId,
                parent: data.id
            };

            if (data.id === 0) {
                tem.children = []
                if (data.children.length === 3 && this.dialog) {
                    this.$message({
                        type: 'error',
                        message: '关闭对话功能后才能继续添加菜单'
                    })
                    return
                }
                if (data.children.length > 3) {
                    this.$message({
                        type: 'error',
                        message: '已达上限，不可添加'
                    })
                    return
                }
            }

            if (data.parent === 0 && data.children.length >= 5) {
                this.$message({
                    type: 'error',
                    message: '最多五个'
                })
                return
            }
            this.inputActive = true;
            if (!data.id) {
                this.inputType = 1
            } else {
                this.inputType = 2
            }

            this.inputVal().then(val => {
                tem.label = val.name
                data.children.push(tem)
                this.inputActive = false
            }).catch(err => {
                this.$message('取消添加');
                this.inputActive = false
            })

        },

        inputVal() {
            this.inputForm.name = '';
            this.inputForm.type = '';
            return new Promise((resolve, reject) => {
                this.confirm = resolve;
                this.cancel = reject;
            })
        }

    },
    computed: {

        map() {
            return this.menu.reduce((acc, val) => {

                acc[val.id] = val

                if (val.children) {
                    acc = Object.assign(acc, this.getMap(val.children))
                }

                return acc
            }, {})
        }
    }

};
</script>


<style scoped>
.el-row {
    margin-top: 80px
}

.el-col {
    text-align: left
}

.el-tree-node__content .tree-edit .el-icon-plus {
    background: #000
}

.el-switch {
    margin-left: 20px;
    vertical-align: text-top
}

.dialog-toggle {
    padding: 10px 0;
}

.preview {
    width: 270px;
    height: 567px;
    background: url('http://oq6scdosy.bkt.clouddn.com/phone.png');
    position: relative
}

.preview-title {
    position: absolute;
    color: #fff;
    font-size: 12px;
    top: 105px;
    left: 112px
}

.preview-menu {
    position: absolute;
    bottom: 82px;
    left: 25px;
    width: 220px;
    text-align: center;
    color: #7f7e7e;
    display: flex
}

.menu-item {
    padding: 5px 6px;
    font-size: 12px;
    display: inline-block;
    flex: auto;
    position: relative;
    cursor: pointer
}

.menu-item:hover {
    background-color: #F6F6F6
}

.menu-item+.menu-item {
    border-left: 3px solid #F6F6F6
}

.menu-item-submenu {
    position: absolute;
    left: 0px;
    bottom: 30px;
    list-style: none;
    width: 100%;
    border: 1px solid #7f7e7e;
}

.submenu-item {
    padding: 10px 0;
}

.submenu-item+.submenu-item {
    border-top: 1px solid #7f7e7e;
}

.save-button {
    text-align: center;
    margin-top: 40px
}

.input-form {
    text-align: left;
}
</style>

