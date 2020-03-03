/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-12-02 17:54:47
 * @LastEditors: yangw5
 * @LastEditTime: 2019-12-02 17:58:47
 * @FilePath: \react-ant-ts\src\axios\index.ts
 */
import { post } from './tools';
import * as config from './config';

export const pictureSearch = (data: any) => post({ url: config.PICTURE_SERACH, data });
