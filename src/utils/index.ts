/*
 * @File:utils\index.ts
 * @Description:自定义工具组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-12-03 09:15:21
 * @LastEditors: yangw5
 * @LastEditTime: 2019-12-03 10:27:51
 * @FilePath: \react-ant-ts\src\utils\index.ts
 */
import { useRef, useEffect } from 'react';

interface QueryParam {
    [key: string]: string;
}
/**
 * 获取url中的参数
 */
export function urlQuery(): QueryParam | null {
    const Urlstring: RegExpMatchArray | null = window.location.href.match(/\?\S*/g); //匹配url中？后面空白字符n次 返回数组[]
    //window.location.search.substr(1);
    //window.location.hash.substr(1);
    //hash返回的是第一个’#‘之后的内容，search返回的是第一个’?‘之后的内容，如果’?‘之前有’#’，直接使用search得不到url链接的参数。
    //也可以通过react-router来获取  this.props.match.match / this.props.match.location / this.props.match.history
    if (!Urlstring) return null;
    return Urlstring[0]
        .replace(/^\?/, '')
        .split('&')
        .reduce((a: QueryParam, b: string) => {
            const [key, value] = b.split('=');
            a[key] = value;
            return a;
        }, {});
}

/**
 *  hook 设置获取上一次的state和props
 * @param value state | props的值
 */
export function usePrevious(value: any): any {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
