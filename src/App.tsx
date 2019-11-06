import * as React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Login, Y5Breadcrumb, Y5Tag } from './component/allcomponent';
import FormSearch from './component/widget/FormSearch';

const App: React.FC = () => {
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
    let onSubmit = (values: any): void => {
        alert(values);
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
                />
                <header className="App-header">
                    <Login />
                </header>
            </BrowserRouter>
        </div>
    );
};

export default App;
