import React from 'react';
import { Form, Input } from 'antd';

interface FormProps {
    label: string;
    field: string;
    form?: any;
    initialValue?: string;
    disabled?: boolean;
}

const FormInput = (props: FormProps) => {
    const { getFieldDecorator } = props.form;
    let { label, field, initialValue, disabled } = props;
    return (
        <Form.Item
            {...{
                label,
                labelCol: { span: 3 },
                wrapperCol: { span: 12 },
            }}
        >
            {getFieldDecorator(field, {
                initialValue,
                rules: [],
                validateFirst: true,
                normalize: (value: string): string => {
                    return value;
                },
            })(<Input placeholder={`请输入${label}`} disabled={disabled} />)}
        </Form.Item>
    );
};

export default FormInput;
