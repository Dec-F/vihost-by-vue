import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import MainContent from '../components/Main';
import DepartmentIndex from '../components/DepartmentIndex';
import MenuManagement from '../components/MenuManagement';
import Reply from '../components/Reply.vue';
import QR from '../components/QR';
import MsgManagement from '../components/MsgManagement';
import EditID from '../components/EditID'; 
import SettledList from '../components/SettledList';
import AddSettled from '../components/AddSettled';
import articleList from '../components/articleList';
import articleColumn from '../components/articleColumn';
import BulletinList from '../components/BulletinList';
import Announcement from '../components/Announcement';
import TagsManagement from '../components/TagsManagement';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: MainContent },
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
    ]
})
