import * as React from 'react';
import { Link } from 'react-router-dom';
import { SFC } from 'react';
import { Breadcrumb, Icon } from 'antd';
import './Y5Breadcrumb.css';

export interface Props {
    splitIcon: string;
    BreadItem: any[];
}
const Y5Breadcrumb: SFC<Props> = (props: Props) => {
    let { BreadItem, splitIcon } = props;
    return (
        <div className="Breadcrumb__div">
            <Breadcrumb separator={splitIcon}>
                {BreadItem &&
                    BreadItem.length > 0 &&
                    BreadItem.map((item, i) => (
                        <Breadcrumb.Item key={i}>
                            <Icon className="Breadcrumb-item__icon" type={item.icon} />
                            <Link to={item.href}>{item.value}</Link>
                        </Breadcrumb.Item>
                    ))}
            </Breadcrumb>
        </div>
    );
};

export default Y5Breadcrumb;
