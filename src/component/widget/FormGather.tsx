import React, { ReactNode, forwardRef } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import './FormGather.css';
//子组件接口定义

type optionObj = {
    name?: string;
    value: string | number;
    id: string | number;
};
interface FormItemProps {
    field: string;
    fieldType: string;
    label: string;
    initialValue?: string;
    disabled?: boolean;
    options?: Array<optionObj>;
}

//组件接口定义
interface FormGatherProps extends FormComponentProps {
    fields: Array<FormItemProps>;
}

//通过类型显示相应的组件
/**
 * @param field 字段配置
 * @param form 表单对象
 */
const switchComponent = (field: FormItemProps, form: any): React.ReactNode => {
    switch (field.fieldType) {
        case 'input':
            return <FormInput {...{ ...field, form }} />;
        case 'select':
            return <FormSelect {...{ ...field, form }} />;
        default:
            return <div>1</div>;
    }
};

const FormGather = ({ fields, form }: FormGatherProps) => {
    const renderFormItem = (fields: FormItemProps): ReactNode => {
        return switchComponent(fields, form);
    };
    return (
        <Form style={{ padding: '10px 0px' }}>
            {fields.map(field => (
                <span className={'average-3'}>{renderFormItem(field)}</span>
            ))}
        </Form>
    );
};
export default Form.create<FormGatherProps>()(React.forwardRef(FormGather));
