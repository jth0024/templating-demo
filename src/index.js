import { app } from './components';
import { render } from './helpers/renderer';
import { startRouting } from './routing';

import './components/components.less';

render(app, document.getElementById('app'));
startRouting();
