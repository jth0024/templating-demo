import { app } from './components';
import { createElement, render } from './helpers/DOM';
//import { startRouting } from './routing';

import './components/components.less';

const appElement = createElement(app);
render(createElement(app), document.getElementById('app'));
//startRouting();
