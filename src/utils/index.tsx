/**
 * 通过名称获取cookie
 * @param name cookie的名称
 */
export const getCookie = (name: any) => {
    let value = ';' + document.cookie;
    let parts: any;
    parts = value.split(';' + name + '=');
    if (parts.length === 2) {
        return parts
            .pop()
            .split(';')
            .shift();
    }
};
