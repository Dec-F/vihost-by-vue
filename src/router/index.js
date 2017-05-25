import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from 'pages/Login';
import Index from 'pages/Index';
import MainContent from 'pages/Main';
import DepartmentIndex from 'pages/DepartmentIndex';
import MenuManagement from 'pages/MenuManagement';
import Reply from 'pages/Reply.vue';
import QR from 'pages/QR';
import MsgManagement from 'pages/MsgManagement';
import EditID from 'pages/EditID';
import SettledList from 'pages/SettledList';
import AddSettled from 'pages/AddSettled';
import articleList from 'pages/articleList';
import articleColumn from 'pages/articleColumn';
import BulletinList from 'pages/BulletinList';
import Announcement from 'pages/Announcement';
import TagsManagement from 'pages/TagsManagement';
import DepartmentAccount from 'pages/DepartmentAccount';
import AddArticle from 'pages/AddArticle';
import Layout from '../components/Layout.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [

        { path: '/login', name: '登录', component: Login },
        {
            path: '/',
            name: '首页',
            component: Index,
            redirect: '/main',
            children: [
                { path: 'main', name: '后台首页', component: MainContent },

                { path: 'depart', name: '部门首页', component: DepartmentIndex },
                {
                    path: 'serviceWindow',
                    name: '服务窗',
                    component: Layout,
                    redirect: '/serviceWindow/menu',
                    children: [
                        { path: 'menu', name: '菜单管理', component: MenuManagement },
                        { path: 'reply', name: '回复管理', component: Reply }
                    ]
                },
                { path: 'QR', name: '二维码', component: QR },
                { path: 'MsgManagement', name: '留言板管理', component: MsgManagement },
                { path: 'EditId', name: '账号资料', component: EditID },
                {
                    path: 'settled', name: '入驻部门', component: Layout, redirect: '/settled/list',
                    children: [
                        { path: 'list', name: '列表', component: SettledList },
                        { path: 'addSettled', name: '添加入驻', component: AddSettled }
                    ]
                },
                {
                    path: 'article', name: '文章管理', component: Layout, redirect: '/article/list',
                    children: [
                        { path: 'list', name: '列表', component: articleList },
                        { path: 'column', name: '栏目', component: articleColumn }
                    ]
                },
                {
                    path: 'bulletin', name: '公告管理', component: Layout,
                    children: [
                        { path: 'list', name: '列表', component: BulletinList },
                        { path: 'addBulletin', name: '发布', component: Announcement }
                    ]
                },
                { path: 'tagsManagement', name: '', component: TagsManagement },
                { path: 'departmentAccount', name: '', component: DepartmentAccount },
                { path: 'addArticle', name: '', component: AddArticle },

            ]
        },
    ]
})
