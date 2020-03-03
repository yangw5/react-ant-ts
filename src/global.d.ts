/*
 * @Description:声明 所有 JavaScript 对象的公共的变量，（如：window、document、math）和一些类似的接口声明（如：Window、Document、Math）
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-07 09:16:09
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-07 09:41:43
 */
import { FormInputProps } from './component/widget/FormInput';
/**
 * @namespace FormComp 模板系统的空间命名
 */
export namespace FormComp {
    interface FormCommonProps extends FormInputProps {}
}
