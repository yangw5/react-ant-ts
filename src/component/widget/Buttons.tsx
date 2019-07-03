/**
 *@file Buttons
 *@author yang wenwu <yangw5@163.com>
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

function Buttons(props:any) {
    let {search,search2,search3}=props;
    const [data, setData] = useState({
        count: 0,
        title: '题目',
        type: '增加',
    });
    let btns:any[]=[
        {title:'搜索',isShow:true,onClick:search},
        {title:'导入',isShow:true,onClick:search},
        {title:'导出',isShow:false,onClick:search2},
        {title:'合并',isShow:true,onClick:search3},
    ];
    let [inf, setInf] = useState({ index: 1, text: 'react-ant-ts' });

    useEffect(() => {
        setData({
            ...data,
            title: 'hook',
        });
    });
    let addcount = () => {
        const { count } = data;
        // 这里必须将完整的state对象传进去
        setData({
            ...data,
            count: count + 1,
        });
    };
    return (
        <div>
            <Button.Group>
                {
                    btns.map(v=>v.isShow && (
                        <Button onClick={()=>{v.onClick()}}  key={v.title}>
                            {v.title}
                        </Button>
                    ))
                }
            </Button.Group>




            <h1>{data.title}</h1>
            <p>技术栈:{inf.text}</p>
            <Button
                type="primary"
                onClick={() => {
                    setInf({
                        ...inf,
                        text: '不可以,react-ant-ts是黄金三角',
                    });
                }}
            >
                可以换技术栈吗{' '}
            </Button>
            <p>You clicked {data.count} times</p>
            <Button type="primary" onClick={addcount}>
                {data.type}
            </Button>

        </div>
    );
}
export default Buttons;
