import * as React from 'react';
import { Tag } from 'antd';
import { type } from 'os';

interface Itext {
    value: string;
    id: number;
}

interface Iprops {
    tags: any[];
    show: boolean;
    filed: string;
    text: string | Itext;
    onClose: Function;
}

type Istate = {
    size: string;
    type: string;
    color: string;
    checked: boolean;
    visible: boolean;
};

class Y5Tag extends React.Component<Iprops, Istate> {
    constructor(props: Iprops) {
        super(props);
        this.state = {
            size: 'small',
            type: '',
            color: '#2db7f5',
            checked: true,
            visible: true,
        };
    }
    render() {
        let { size, type, color, checked, visible } = this.state;
        let { tags, onClose } = this.props;
        return (
            <div>
                {tags &&
                    tags.length > 0 &&
                    tags.map((v, i) => (
                        <Tag
                            key={i}
                            closable
                            onClose={onClose}
                            {...{ size, type, color, checked, visible }}
                        >
                            {v.value}
                        </Tag>
                    ))}
            </div>
        );
    }
}

export default Y5Tag;
