import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import routesConfig from './config';
import DocumentTitle from 'react-document-title'; //组件
import * as allcomponent from '../component/allcomponent';
interface Props {}
interface State {}
//export {default as Header} from './Header'
//yarn add  @types/react-document-title //依赖包下载
export default class CRouter extends React.Component<Props, State> {
    public requireLogin = (): any => {};
    render() {
        return (
            <Switch>
                {Object.keys(routesConfig).map((key: string) =>
                    routesConfig[key].map((r: any) => {
                        // const Component: any = allcomponent[r.component];
                        return (
                            <Route
                                key={r.key}
                                exact
                                path={r.key}
                                render={(props: any) => {
                                    const wrappedComponent: JSX.Element = (
                                        // 重新包装组件 浏览器title设置
                                        <DocumentTitle title={r.title}>
                                            {/* <Component {...props} /> */}
                                        </DocumentTitle>
                                    );
                                    return r.login && wrappedComponent;
                                    // : this.requireLogin(wrappedComponent);
                                }}
                            ></Route>
                        );
                    })
                )}
            </Switch>
        );
    }
}
