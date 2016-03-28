import Router5, { loggerPlugin } from 'router5';
import historyPlugin from 'router5-history';
import listenersPlugin from 'router5-listeners';
import { about, home, posts } from './components';
import { render } from './helpers/renderer';

const router = new Router5()
  .addNode('about', '/about')
  .addNode('home', '/home')
  .addNode('posts', '/posts/:id')
  .setOption('defaultRoute', 'home')
  .setOption('useHash', true)
  .usePlugin(historyPlugin())
  .usePlugin(listenersPlugin())
  .usePlugin(loggerPlugin());

router.addRouteListener('about', () => {
  render(about, document.getElementById('view'));
});

router.addRouteListener('home', () => {
  render(home, document.getElementById('view'));
});

router.addRouteListener('posts', () => {
  render(posts, document.getElementById('view'));
});

export function startRouting() {
  router.start();
}
