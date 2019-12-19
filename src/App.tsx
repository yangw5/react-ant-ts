import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Login, Y5Breadcrumb, Y5Tag } from './component/allcomponent';
import FormSearch from './component/widget/FormSearch';
import ImgList from './component/widget/ImgList';
let _ = require('lodash');
let imgsrc1 = require('./assets/img/m1.jfif');
let imgsrc2 = require('./assets/img/m2.jfif');
let imgsrc3 = require('./assets/img/m3.jfif');
let imgsrc4 = require('./assets/img/m4.jfif');
let imgsrc5 = require('./assets/img/m5.jfif');
let imgsrc6 = require('./assets/img/M6.jfif');
let imgsrc7 = require('./assets/img/m7.jfif');
let imgsrc8 = require('./assets/img/m8.jfif');
let imgsrc9 = require('./assets/img/m9.jfif');
let imgsrc10 = require('./assets/img/m10.jfif');
let imgsrc11 = require('./assets/img/m11.jfif');

interface imgObj {
    id: string;
    name: string;
    width: number;
    height: number;
    md5: string;
}

const App: FC = () => {
    let a: number[] = [];
    let b: number[] = [1, 2, 3];
    a = b;
    console.log(a);
    let Breadconfig = {
        splitIcon: '>',
        BreadItem: [
            {
                value: '图片查询',
                icon: 'home',
                href: '',
            },
        ],
    };
    let astimgArry: imgObj[] = [
        {
            id: 'm1',
            name: '杨小五',
            width: 150,
            height: 150,
            md5: imgsrc1,
        },
        {
            id: 'm2',
            name: '杨2五',
            width: 151,
            height: 110,
            md5: imgsrc2,
        },
        {
            id: 'm3',
            name: '邓紫棋',
            width: 120,
            height: 122,
            md5: imgsrc3,
        },
        {
            id: 'm4',
            name: '杨4五',
            width: 120,
            height: 130,
            md5: imgsrc4,
        },
        { id: 'm5', name: '杨5五', width: 150, height: 150, md5: imgsrc5 },
        { id: 'm6', name: '杨6五', width: 160, height: 156, md5: imgsrc6 },
        { id: 'm7', name: '杰伦周', width: 157, height: 150, md5: imgsrc7 },
        { id: 'm8', name: '周杰伦', width: 150, height: 180, md5: imgsrc8 },
        { id: 'm9', name: '杨9五', width: 159, height: 190, md5: imgsrc9 },
        { id: 'm10', name: '黄圣依', width: 150, height: 150, md5: imgsrc10 },
        { id: 'm11', name: '张靓颖', width: 110, height: 11, md5: imgsrc11 },
    ];
    let [imgArry, setImgArry] = useState(astimgArry);
    let onSubmit = (values: any): void => {
        let cpdata = _.shuffle(_.cloneDeep(astimgArry));
        setImgArry(cpdata.slice(1, Math.random() * 10));
    };
    let onRest = (): void => {
        setImgArry(_.cloneDeep(astimgArry));
    };
    let changeImg = () => {
        let cpdata = _.shuffle(_.cloneDeep(imgArry));
        setImgArry(cpdata);
    };
    // let tag = {
    //     tags: [{ value: '主' }, { value: '次' }],
    //     // show: boolean;
    //     // filed: string;
    //     // text: string | Itext;
    //     onClose: () => {
    //         // alert('1');
    //     },
    // };
    return (
        <div className="App">
            <BrowserRouter>
                <Y5Breadcrumb {...Breadconfig}></Y5Breadcrumb>
                {/* <Y5Tag {...tag} /> */}
                <FormSearch
                    onSubmit={() => {
                        onSubmit('1');
                    }}
                    onRest={() => onRest()}
                />
                {/* <header className="App-header">
                    <Login />
                </header> */}
                {imgArry && <ImgList data={imgArry} changeImg={changeImg} />}
            </BrowserRouter>
        </div>
    );
};

export default App;
