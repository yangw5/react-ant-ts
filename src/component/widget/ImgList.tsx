import React, { FC, useEffect, useState } from 'react';
import { Icon } from 'antd';
import './ImgList.css';
const { DragDropContext, Draggable, Droppable } = require('react-beautiful-dnd');

interface imgObj {
    id: string;
    name: string;
    width: number;
    height: number;
    md5: string;
}

interface IImgList {
    data: imgObj[];
    changeImg: Function;
}

//props:IImgList
const ImgList: FC<IImgList> = ({ data, changeImg }) => {
    let [flog, setFlog] = useState(true);
    let [imgdata, setImgdata] = useState(data);
    // useEffect(() => {}, []);
    let onExchange = (): void => {
        changeImg();
    };
    let onDragEnd = (result: any) => {
        // dropped outside the list
        let item = result;
        if (!result.destination) {
            return;
        }
        const newimgs: any = resetArry(imgdata, result.source.index, result.destination.index);
        setImgdata(newimgs);
    };
    let resetArry = (list: any, startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={'imgList_root'}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided: any, snapsho: any) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={'imgList_root'}
                        >
                            {imgdata.map((v, i: number) => (
                                <Draggable
                                    key={v.md5}
                                    draggableId={v.id}
                                    index={i} // 最好使用index因为用来表示当前区块的顺序
                                >
                                    {(provided: any, snapshot: any) => (
                                        <div
                                            className={'imgList_item'}
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                        >
                                            <img
                                                src={v.md5}
                                                style={{ width: '150px', height: '150px' }}
                                                alt="图片"
                                            />
                                            <div className={'imgList_item_info'}>
                                                <div>{v.name}</div>
                                                <div>{`分辨率：${v.width}*${v.height}`}</div>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {/* {provided.placeholder} */}
                            <div className={'imgList_item updata'}>
                                <div className={'updatedo'} onClick={onExchange}>
                                    <Icon type="redo" />
                                    <div>换一批</div>
                                </div>
                            </div>
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default ImgList;
