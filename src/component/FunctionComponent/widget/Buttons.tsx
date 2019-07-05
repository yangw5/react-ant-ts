/**
 *@file Buttons
 doc 描述
 *@author yang wenwu <yangw5@163.com>
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import ModelContainer from '../../ClassCompinent/ModelContainer';
import ModelContainer2 from './ModelContainer';

interface Props {
    search3?: React.MouseEventHandler<HTMLButtonElement>;
    search2: Function;
    search: Function;
}

function Buttons(props: Props) {
    let { search, search2, search3 } = props;
    const [data, setData] = useState({
        count: 0,
        title: '题目',
        type: '增加',
    });
    let [visible, setVisible] = useState(false);
    let btns: any[] = [
        { title: '搜索', isShow: true, onClick: search },
        { title: '导入', isShow: true, onClick: search },
        { title: '导出', isShow: false, onClick: search2 },
        { title: '合并', isShow: true, onClick: search3 },
    ];
    let [inf, setInf] = useState({ index: 1, text: 'react-ant-ts' });

    useEffect(() => {
        // setData({
        //           ...data,
        //           title: 'hook',
        // });
    });
    let addcount = () => {
        const { count } = data;
        // 这里必须将完整的state对象传进去
        setData({
            ...data,
            count: count + 1,
        });
    };
    let showModal = () => {
        setVisible(true);
    };
    let close = () => {
        setVisible(false);
    };
    //  可以在事件处理函数中, 通过指定 泛型变量 t 来 定义 事件的类型.
    const onSumit = () => {
        alert(1);
        setVisible(false);
    };

    return (
        <div>
            <Button.Group>
                {btns.map(
                    v =>
                        v.isShow && (
                            <Button
                                onClick={() => {
                                    v.onClick();
                                    showModal();
                                }}
                                key={v.title}
                            >
                                {v.title}
                            </Button>
                        )
                )}
            </Button.Group>
            {visible ? (
                // <ModelContainer title="提示" visible={visible} styles={999} close={close}>
                //     <p>可以</p>
                // </ModelContainer>
                <ModelContainer2
                    title="提示"
                    visible={visible}
                    styles={999}
                    close={close}
                    onOk={onSumit}
                >
                    <p>可以</p>
                </ModelContainer2>
            ) : (
                ''
            )}

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
