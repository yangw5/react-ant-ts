import React, { FC } from 'react';
import { Select, Form } from 'antd';
import { FormComp } from '../../global';

type sn = string | number;

type optionObj = {
    name?: string;
    value: string | number;
    id: sn;
};
// interface FormSelectProps extends FormComp.FormCommonProps {
//     options: Array<optionObj>;
// }

interface FormSelectProps {
    label: string;
    field: string;
    options?: Array<optionObj>;
    form?: any;
    initialValue?: string;
    disabled?: boolean;
}

const { Option } = Select;
const FormSelect: FC<FormSelectProps> = ({ label, form, field, options }) => {
    let { getFieldDecorator } = form;
    return (
        <Form.Item
            {...{
                label,
                labelCol: { span: 3 },
                wrapperCol: { span: 12 },
            }}
        >
            {getFieldDecorator(field, {
                rules: [],
                validateFirst: true,
                normalize: (value: string): string => {
                    return value;
                },
            })(
                <Select placeholder={`请选择${label}`}>
                    {options &&
                        options.map((v: optionObj) => (
                            <Option value={v.id}>{v.value || v.name}</Option>
                        ))}
                </Select>
            )}
        </Form.Item>
    );
};

export default FormSelect;
