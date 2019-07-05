import React from 'react';
import Buttons from '../widget/Buttons';

function Login() {
    let search: (x: any) => any = function(any) {
        alert('搜索');
    };
    let search2: (x: any) => any = function(any) {
        alert('导入');
    };
    let search3 = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert(e);
        alert(pd('1'));
    };
    let pd = function padLeft(padding: string | number) {
        if (typeof padding === 'number') {
            alert(1);
            return Array(padding + 1).join(' ') + '数字';
        }
        if (typeof padding === 'string') {
            return padding + '字符串';
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    };
    return (
        <div>
            <button onClick={search3}>判断</button>
            <Buttons search={search} search2={search2} search3={search3} />
        </div>
    );
}

export default Login;
