/**
 *
 */
import React, { useState, useEffect } from 'react';
import { Input, Form } from 'antd';

interface propstype {
    placeholder?: string;
    label?: string;
    initialValue?: any;
    getFieldDecorator?: any;
    filed?: any;
    required?: boolean;
    form: any;
}
function FormInput(props: propstype) {
    let { initialValue, required, filed = 'id', label = 'yan5' } = props;

    const { getFieldDecorator } = props.form;
    const rules = [
        {
            required,
            message: `请输入${props.label}`,
            transform: (value: any) => {
                if (value && value.trim) value = value.trim() + '1';
            },
        },
    ];
    // if (max) rules.push({ max, message: `不能输入超过${props.max}个字符` });
    return (
        <Form.Item {...{ label }}>
            {getFieldDecorator(filed, {
                initialValue,
                rules,
            })(<Input placeholder={props.placeholder || `请输入${label}`} />)}
        </Form.Item>
    );
}
export default Form.create()(FormInput);
