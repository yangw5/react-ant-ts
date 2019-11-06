import React, { useRef } from 'react';
import FormGather from './FormGather';
import { Button } from 'antd';

interface FormSearchProps {
    onSubmit: (values: any) => void;
    initialParams?: any;
}
const FormSearch = ({ onSubmit }: FormSearchProps) => {
    const formFields = [
        { label: '关键字', field: 'name', fieldType: 'input' },
        { label: '类型', field: 'type', fieldType: 'input' },
        { label: '爱好', field: 'type2', fieldType: 'input' },
        { label: '活动', field: 'type3', fieldType: 'input' },
    ];
    return (
        <div>
            <FormGather fields={formFields} />
            <div>
                <Button
                    onClick={(value: any): any => {
                        onSubmit('1');
                    }}
                >
                    提交
                </Button>
            </div>
        </div>
    );
};
export default FormSearch;
