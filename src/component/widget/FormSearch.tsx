import React, { useRef } from 'react';
import FormGather from './FormGather';
import ButtonGroup from './ButtonGroup';
import { Divider } from 'antd';

interface FormSearchProps {
    onSubmit: (values: any) => void;
    onRest: () => void;
    initialParams?: any;
}
const FormSearch = ({ onSubmit, onRest }: FormSearchProps) => {
    const formFields = [
        { label: '关键字', field: 'name', fieldType: 'input' },
        {
            label: '类型',
            field: 'type',
            fieldType: 'select',
            options: [
                { id: 1, name: 'JPG', value: 'JPG' },
                { id: 2, name: 'GIF', value: 'GIF' },
                { id: 2, name: 'PNG', value: 'PNG' },
            ],
        },
    ];
    let rest = () => {
        onRest && onRest();
    };
    return (
        <div>
            <FormGather fields={formFields} />
            <ButtonGroup
                {...{
                    onSumit: (value: any) => {
                        onSubmit('1');
                    },
                    onRest: () => {
                        rest();
                    },
                }}
            />
            <Divider style={{ margin: '20px 0' }} />
        </div>
    );
};
export default FormSearch;
