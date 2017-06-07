const Mock = require('mockjs')
Mock.setup({
    timeout:2000
})
const tem = {
    indexMessage: {
        'inform|2': ['@csentence'],
        'leaveWords|2': [{
            word: '@ctitle',
            userName: '@cname'
        }],
        'subscribe|2': [{
            word: '@ctitle',
            userName: '@cname',
            date: '@date'
        }]
    },
    indexConfig: {
        title: '城市一网',
        url: 'http://kangle.zj.com',
        coverImg: '@dataImage'
    },
    menuConfig: {
        chatDisplay: '@boolean',
        'menu|1-3': [{
            name: '@ctitle',
            'child|0-2': [{
                name: '@ctitle'
            }]
        }]
    },
    replyConfig: {
        welcomeMessage: '@csentence',
        'keywordReplyConfig|1-3': [{
            keyword: '@ctitle',
            name: '@ctitle',
            replyMessage: '@csentence'
        }],
        allReplyConfig: '@csentence'
    },
    'notice|1-3': [{
        'id|+1': 1,
        content: '@ctitle',
        publisher: '@cname',
        publishDate: '@date',
        startDate: '@date',
        endDate: '@date',
        status: '@boolean',
        PV: '@integer'
    }],
    'artcle|1-5': [{
        type: '@type',
        classification: '',
        title: '@ctitle',
        img: '@image',
        'id|+1': 1
    }],
    'enterDepartment|1-5': [{
        name: '@ctitle',
        serviceStatus: '@boolean',
        HQD: '@boolean',
        appStatus: '@boolean'
    }],
    QR: {
        url: '@url'
    },
    userAndPassword: {
        account: '@word',
        phone: '@natural',
        email: '@email',
        name: '@cname',
        compony: '@cname'
    },
    departmentUser: {}
}

export const mock = function () {
    Mock.mock('/login', {
        userToken: 'dec_fan',

    });
    Mock.mock('/getInfo', {
        name: 'dec_fan',
        email: 'dec_fan@icloud.com',
        avatar: 'http://omqz8y2im.bkt.clouddn.com/business-mix-set-2012.png',
        account: 'dec_fan@icloud.com',
        phone: '17703668430',
        company: '灵猫',
        area: ["120000", "120100", "120101"],
        setting: {
        }
    });
    Mock.mock('/main', {
        areaName: '@county',
        inform: '@integer(10,100)',
        leaveWords: '@integer(10,100)',
        subscribe: '@integer(10,100)',
        notice: {
            href: '@url',
            title: '@ctitle(5,20)'
        },
        AU: '@integer(300,3000)'
    });
    Mock.mock('/qr', {
        QRUrl: 'http://oq6scdosy.bkt.clouddn.com/8941701be0977e6ed208b6afb2777907.png',
        'downloadUrl|3': ['@url']
    })
    Mock.mock('/newqr', {
        QRUrl: 'http://oq6scdosy.bkt.clouddn.com/2017-05-25-1726145765.png',
        'downloadUrl|3': ['@url']
    })
    Mock.mock('/saveInfo', {
        sd: '1'
    })
    Mock.mock('/reply', {
        menu: [{
            id: 1,
            label: '一级 1',
            parent: 0,
            children: [{
                id: 4,
                label: '二级 1-1',
                parent: 1
            },{
                id: 11,
                label: '二级 1-2',
                parent: 1
            },{
                id: 12,
                label: '二级 1-3',
                parent: 1
            },{
                id: 13,
                label: '二级 1-4',
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

        }],
        dialog: true
    })
}
