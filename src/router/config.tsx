// export default {
//     menus: [{}],
// };
let menus: any[] = [
    {
        key: 'app/',
        title: '首页',
        icon: '',
        component: '',
        requirement: [],
    },
    {
        key: 'app/login',
        title: '登录',
        icon: '',
        requirement: [],
        suns: [
            {
                key: '',
                title: '',
                componenet: '',
                requirement: '',
            },
        ],
    },
];
let other: any[] = [
    {
        key: '/app/material',
        title: 'shu',
        component: 'MvDetail',
    },
];
//对象类型设置
let data: { [key: string]: any } = {
    menus,
    other,
};
let data1 = {
    menus,
    other,
};
export default data;
