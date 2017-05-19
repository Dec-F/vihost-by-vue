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

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
 
        { path: '/',name:'登录', component: Login },
        { path: '/index',name:'首页', component: Index,
        children:[
        { path: '', name:'',component: MainContent },
        { path: '/depart',name:'部门首页', component: DepartmentIndex },
        {path:'/serviceWindow',name:'服务窗'},
        { path: '/serviceWindow/menu',name:'菜单管理', component: MenuManagement },
        { path: '/serviceWindow/reply',name:'回复管理', component: Reply },
        { path: '/QR',name:'二维码', component: QR},
        { path: '/MsgManagement',name:'', component: MsgManagement },
        { path: '/EditId',name:'账号资料', component: EditID },
        { path: '/SettledList',name:'入驻部门', component: SettledList },
        { path: '/AddSettled',name:'添加入驻', component: AddSettled },
        { path: '/articleList',name:'', component: articleList },
        { path: '/articleColumn',name:'', component: articleColumn },
        { path: '/BulletinList',name:'', component: BulletinList },
        { path: '/Announcement',name:'', component: Announcement },
        { path: '/TagsManagement',name:'', component: TagsManagement },
        { path: '/DepartmentAccount',name:'', component: DepartmentAccount },
        { path: '/AddArticle',name:'', component: AddArticle },
        ]
     }
    ]
})
