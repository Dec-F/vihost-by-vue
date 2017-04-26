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
    ]
})
