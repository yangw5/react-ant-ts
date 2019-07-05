import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import './ModelContainer.less';

/**
 * @interface ModelProps interface of props
 */
interface ModelProps {
    children?: string | JSX.Element;
    title: string;
    visible: boolean;
    styles: number;
    close: Function;
    onOk: Function;
}
/**
 *
 * @param props 父组件传递的参数
 */

function ModelContainer(props: ModelProps): any {
    let [visible, setvisible] = useState(props.visible);
    let [children, setChildren] = useState(props.children);
    let { title } = props;
    let _onOK = () => {
        setvisible(true);
        props.onOk();
    };
    let _closer = () => {
        setvisible(false);
        props.close();
    };
    useEffect(() => {});
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
