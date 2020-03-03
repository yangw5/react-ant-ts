import * as React from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Form, Input, Button, Icon } from 'antd';

//export interface
//interface
//type
//设置prop 基础from属性
interface IProps extends FormComponentProps {
    // field: string;
    // label: string;
}
//设置state
interface Istate {}

class Login extends React.Component<IProps, Istate> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    //函数
    public handleSubmit = (): void => {
        console.log('登录');
    };
    public render() {
        // const { field, label } = this.props;
        const { getFieldDecorator } = this.props.form;
        const formLayout = {
            labelCol: { span: 0 }, //  offset : 12
            wrapperCol: { span: 24 },
        };
        return (
            <div style={{ width: '300px' }}>
                <Form onSubmit={this.handleSubmit} {...formLayout}>
                    <Form.Item
                    // label={'用户名'}
                    >
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: `请输入用户名`,
                                },
                            ],
                            // initialValue: `请输入${label}`,
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={`请输入用户名`}
                            />
                        )}
                    </Form.Item>
                    <Form.Item
                    // label={'密码'}
                    >
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: `请输入密码`,
                                },
                            ],
                            // initialValue: `请输入${label}`,
                        })(<Input.Password placeholder={`请输入密码`} />)}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

//设置from
export default Form.create<IProps>({})(Login);
