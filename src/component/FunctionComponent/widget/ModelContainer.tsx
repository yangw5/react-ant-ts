import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import './ModelContainer.less';

interface ModelProps {
    children: object;
    title: string;
    visible: boolean;
    styles: number;
}

function ModelContainer(props: ModelProps): any {
    let [visible, setvisible] = useState(props.visible);
    let [children, setChildren] = useState(props.children);
    let { title } = props;
    let _onOK = () => {
        setvisible(true);
    };
    let _closer = () => {
        setvisible(false);
    };
    useEffect(() => {
        setvisible(props.visible);
        setChildren(props.children);
    });
    return (
        <Modal
            {...{
                title,
                visible,
            }}
            visible={visible}
            onOk={_onOK}
            onCancel={_closer}
            className={''}
            width={props.styles}
        >
            <div className="mc__body">{children}</div>
        </Modal>
    );
}

export default ModelContainer;
