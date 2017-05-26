<template>
    <div class="relative-wrap">
        <div class="relative">
            <i>tips:服务窗底栏菜单</i>
            <br/>
            <i>最多可添加4个主菜单(包括对话功能)，每个主菜单最多可添加5个子菜单</i>
    
            <el-row>
                <el-col :span='12'>
                    <el-tree :data="menu" node-key="id" default-expand-all :render-content="renderContent" :expand-on-click-node='false'>
                    </el-tree>
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<script>
let id = 1000;

export default {
    data() {
        return {
            menu: [{
                id: 'root',
                label: '底栏菜单',
                children: [{
                    id: '1',
                    label: '一级 1',
                    children: [{
                        id: '1-1',
                        label: '二级 1-1',
                        children: [{
                            id: '1-1-1',
                            label: '三级 1-1-1'
                        }, {
                            id: '1-1-2',
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: '2',
                    label: '一级 2',
                    children: [{
                        id: '2-1',
                        label: '二级 2-1'
                    }, {
                        id: '2-2',
                        label: '二级 2-2'
                    }]
                }, {
                    id: '3',
                    label: '一级 3',
                    children: [{
                        id: '3-1',
                        label: '二级 3-1'
                    }, {
                        id: '3-2',
                        label: '二级 3-2'
                    }]
                }]
            }]
        }
    },

    methods: {
        insertAfter(store, data) {
            let indexArr = data.id.split('-'),node=null,
                indexPop=parseInt(indexArr.pop())
            console.log(indexPop);
                node=indexArr.reduce((acc, val) => {
                    return acc.children[val - 1]
                }, this.menu[0])
            node.children.push({id:indexArr.join('-')+'-'+(node.children.length+1),label:"sdsd"})
        },
        edit(store, data) {
            let indexArr = data.id.split('-')

        },
        remove(store, data) {
            let indexArr = data.id.split('-')
        },

        renderContent(h, { node, data, store }) {
            return (
                <span>
                    <span>
                        <span>{node.label}</span>
                    </span>
                    <span style="float: right; margin-right: 20px">
                        <i class='el-icon-plus' on-click={() => this.insertAfter(store, data)}></i>
                        <i class='el-icon-edit' on-click={() => this.remove(store, data)}></i>
                    </span>
                </span>);
        }
    }
};
</script>


<style scoped>
.el-col {
    text-align: left
}
</style>

