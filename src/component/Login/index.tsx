import React from 'react';
import Buttons from '../widget/Buttons';

function Login() {

    let search:(x:any)=>any = function(any){
        console.log('111111111')
        alert('����');
    };
    let search2:(x:any)=>any = function(any){
        alert('����2');
    };
    let search3:(x:any)=>any = function(any){
        alert('����3');
    };
    return (
        <div>
            <Buttons 
                search={search}
                search2={search2}
                search3={search3}
            />
        </div>
    );
}

export default Login;
