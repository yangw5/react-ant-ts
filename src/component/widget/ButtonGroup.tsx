import React from 'react';
import { Button } from 'antd';
import './ButtonGroup.css';
interface ButtonGroupProps {
    style?: object;
    onSumit: (props: any) => void;
    onRest: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onSumit, onRest, style }) => {
    return (
        <div className={'ButtonGroup'} style={style}>
            <Button onClick={onSumit} className={'btn'}>
                查询
            </Button>
            <Button onClick={onRest} className={'btn'}>
                重置
            </Button>
        </div>
    );
};

export default ButtonGroup;
