import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import lodash from 'lodash';


import routers from './router.config';


// 如果使用react-router-dom  为了兼容对象式配置这里写一个函数处理
// TODO 处理嵌套路由
function handleRoute(routers) {
  return routers.map((routerConfig, index) => {
    const routesLength = lodash.get(routerConfig, 'routes.length', 0);
    // 表示没有嵌套路由
    if(!routesLength) {
      return (
        <Route
          key={index}
          path={routerConfig.path}
          component={routerConfig.component}
          exact={true}
        />
      )
    };
  })
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      { handleRoute(routers) }
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
