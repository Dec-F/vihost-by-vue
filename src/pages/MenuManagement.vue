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
            menu:
            [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    parent: 1,
                    children: [{
                        id: 8,
                        label: '三级 1-1-1',
                        parent: 4
                    }, {
                        id: 9,
                        label: '三级 1-1-2',
                        parent: 4
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
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
        }
    },

    methods: {

        //通过id在tree上查找节点
        //参数    root：要解析的根节点    id:触发函数的节点id    isParent：操作父节点？
        //返回    indexArr:id解析后的数组  node:tree上的数据节点(isParent决定是不是父节点)  currentIndex:触发函数节点的最末级索引
        resolveData(root, id, isParent = false) {
            let indexArr = id.split('-'), indexPop = null, node = null;
            if (isParent) indexPop = parseInt(indexArr.pop());
            node = indexArr.reduce((acc, val) => {
                return acc.children[val - 1]
            }, root)

            return {
                indexArr: indexArr,
                node: node,
                currentIndex: indexPop - 1
            }
        },
        insertAfter(store, data) {
            let { indexArr, node, currentIndex } = this.resolveData(this.menu[0], data.id, true);

            let id = indexArr.length === 0 ? (node.children.length + 1).toString() : indexArr.join('-') + '-' + (node.children.length + 1)

            node.children.push({ id: id, label: "新建节点" })
        },
        edit(store, data) {
            let { indexArr, node, currentIndex } = this.resolveData(this.menu[0], data.id);
            console.log(data);
            console.log(indexArr, node, currentIndex);
            this.$prompt('菜单名', '编辑', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    node.label = value
                })
        },
        remove(store, data) {
            let { indexArr, node, currentIndex } = this.resolveData(this.menu[0], data.id, true);

            console.log(node.children.splice(currentIndex, 1))

            node.ch
        },

        renderContent(h, { node, data, store }) {
            return (
                <span>
                    <span>
                        <span>{node.label}</span>
                    </span>
                    <span style="float: right; margin-right: 20px">
                        <i class='el-icon-plus' on-click={() => this.insertAfter(store, data)}></i>
                        <i class='el-icon-edit' on-click={() => this.edit(store, data)}></i>
                        <i class='el-icon-delete' on-click={() => this.remove(store, data)}></i>
                    </span>
                </span>);
        },

        //将tree解析为map，方便编辑操作
        getMap(arr) {
            return arr.reduce((acc, val) => {

                acc[val.id] = val
                
                if (val.children) {
                    acc = Object.assign(acc, this.getMap(val.children))
                }

                return acc
            }, {})
        },

    },
    computed: {
        map() {
            return this.getMap(this.menu)
        }
    }
};
</script>


<style scoped>
.el-col {
    text-align: left
}
</style>

