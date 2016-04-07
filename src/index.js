import { app } from './components';
import { createElement, render } from './utilities';
//import { startRouting } from './routing';

import './components/components.less';

render(createElement(app), document.getElementById('app'));
//startRouting();
