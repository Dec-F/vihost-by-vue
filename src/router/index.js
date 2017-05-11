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
 
        { path: '/', component: Login },
        { path: '/index', component: Index,
        children:[
        { path: '', component: MainContent },
        { path: '/depart', component: DepartmentIndex },
        { path: '/menu', component: MenuManagement },
        { path: '/reply', component: Reply },
        { path: '/QR', component: QR},
        { path: '/MsgManagement', component: MsgManagement },
        { path: '/editId', component: EditID },
        { path: '/SettledList', component: SettledList },
        { path: '/AddSettled', component: AddSettled },
        { path: '/articleList', component: articleList },
        { path: '/articleColumn', component: articleColumn },
        { path: '/BulletinList', component: BulletinList },
        { path: '/Announcement', component: Announcement },
        { path: '/TagsManagement', component: TagsManagement },
        { path: '/DepartmentAccount', component: DepartmentAccount },
        { path: '/AddArticle', component: AddArticle },
        ]
     }
    ]
})
