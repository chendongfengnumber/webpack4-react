import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import CreateOrder from './pages/order/CreateOrder';

const routerConfigs = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/test',
    component: TestPage,
  },
  {
    path: '/order/create_order',
    component: CreateOrder,
  },
];

export default routerConfigs;
