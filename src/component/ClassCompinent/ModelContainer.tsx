import React, { Component } from 'react';
import { Modal } from 'antd';
import './ModelContainer.less';
/**
 * Interface for props.
 * @interface
 */
interface ModelProps {
    children: object;
    title: string;
    visible: boolean;
    close: Function;
    styles: number;
}
/**
 * Interface for state.
 * @interface
 */
interface IState {
    visible: boolean;
}
/**
 * Packagr model
 * @class
 */
class ModelContainer extends Component<ModelProps, IState> {
    constructor(props: ModelProps) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    //获取父组件变化的值并setState
    componentDidMount() {
        this.setState({
            visible: this.props.visible,
        });
    }
    //不可以在didupdata里面进行setState
    componentDidUpdate() {}
    _onOK = () => {
        this.setState({
            visible: true,
        });
    };
    //关闭并通知父组件（父组件通过判断 ? : 对自己进行mount和unmount）
    public _closer = () => {
        this.setState({
            visible: false,
        });
        //调用父组件的方法
        this.props.close();
    };
    render() {
        //获取props的数据
        let { visible } = this.state;
        const { title, children } = this.props;
        return (
            <Modal
                {...{
                    title,
                    visible,
                }}
                onOk={this._onOK}
                onCancel={this._closer}
                className={''}
                width={this.props.styles}
            >
                <div className="mc__body">{children}</div>
            </Modal>
        );
    }
}

export default ModelContainer;
