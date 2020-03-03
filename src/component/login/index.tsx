/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-03 15:03:25
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-03 15:17:24
 * @FilePath: \react-ant-ts\src\component\login\index.tsx
 */
import React from "react";

interface Iprops {
  type: boolean;
}

export default (props: Iprops) => {
  return (
    <div
      style={{
        color: "#fff"
      }}
    >
      {props.type && "登录"}
    </div>
  );
};
