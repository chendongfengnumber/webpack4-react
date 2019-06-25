import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import lodash from 'lodash';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './data/reducers';
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

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider
    store={store}
  >
    <HashRouter>
      <Switch>
        {handleRoute(routers)}
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

