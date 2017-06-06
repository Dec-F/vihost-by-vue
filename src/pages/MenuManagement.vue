<template>
    <div class="relative-wrap">
        <div class="relative">
            <i>tips:服务窗底栏菜单</i>
            <br/>
            <i>最多可添加4个主菜单(包括对话功能)，每个主菜单最多可添加5个子菜单</i>
    
            <el-row>
                <el-col :span='8' :offset='2'>
                    <img src="http://oq6scdosy.bkt.clouddn.com/phone.png" alt="">
                </el-col>
                <el-col :span='8'>
                    <section>
                        <div class="dialog">
                            <span>对话框功能</span>
                            <el-switch v-model="dialog" on-text="" off-text="" @change='sss'>
                            </el-switch>
                        </div>
                        <el-tree :data="menu" node-key="id" default-expand-all :render-content="renderContent" :expand-on-click-node='false'>
                        </el-tree>
    
                    </section>
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<script>

export default {

    data() {
        return {
            menu: [{
                id: 0,
                label: '底栏菜单',
                children: [{
                    id: 1,
                    label: '一级 1',
                    parent: 0,
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        parent: 1
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    parent: 0,
                    children: [{
                        id: 5,
                        label: '二级 2-1',
                        parent: 2,
                    }, {
                        id: 10,
                        label: '二级 2-2',
                        parent: 2
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    parent: 0,
                    children: [{
                        id: 6,
                        label: '二级 3-1',
                        parent: 3,
                    }, {
                        id: 7,
                        label: '二级 3-2',
                        parent: 3
                    }]

                }]
            }],
            dialog: true
        }
    },

    methods: {
        sss(){
            if(this.menu[0].children.length>3){
                this.$message({
                    type:'error',
                    message:'请删除一个主菜单后再开启'
                })
                this.dialog=false
            }
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

            this.$prompt('请输入菜单名字', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: 'done'
                });
                data.label = value
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
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
                label: '新建菜单',
                parent: data.id
            };

            if (data.id === 0) {
                tem.children = []
                if (data.children.length >= 3 && this.dialog) {
                    this.$message({
                        type: 'error',
                        message: '关闭对话功能后才能继续添加菜单'
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

            data.children.push(tem)
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
    padding-left: 20px;
    vertical-align: text-top
}
.dialog{
    padding: 10px 0 ;
}
</style>

