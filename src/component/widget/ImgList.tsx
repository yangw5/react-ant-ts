import React, { FC, useEffect, useState } from 'react';
import { Icon } from 'antd';
import './ImgList.css';

interface imgObj {
    name: string;
    width: number;
    height: number;
    md5: string;
}

interface IImgList {
    data: imgObj[];
    changeImg: Function;
}

const ImgList: FC<IImgList> = ({ data, changeImg }) => {
    let [flog, setFlog] = useState(true);
    // useEffect(() => {}, []);
    let onExchange = (): void => {
        changeImg();
    };
    return (
        <div className={'imgList_root'}>
            {data.map((v, i) => (
                <div className={'imgList_item'}>
                    <img src={v.md5} style={{ width: '150px', height: '150px' }} alt="图片" />
                    <div className={'imgList_item_info'}>
                        <div>{v.name}</div>
                        <div>{`分辨率：${v.width}*${v.height}`}</div>
                    </div>
                </div>
            ))}
            <div className={'imgList_item updata'}>
                <div className={'updatedo'} onClick={onExchange}>
                    <Icon type="redo" />
                    <div>换一批</div>
                </div>
            </div>
        </div>
    );
};

export default ImgList;
