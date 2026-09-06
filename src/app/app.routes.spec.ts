import { describe, expect, it } from 'vitest';
import { routes } from './app.routes';
import { PageComponent } from './page/page.component';

describe('routes', () => {
  it('serves the simulator at the root', () => {
    const root = routes.find((route) => route.path === '');

    expect(root?.component).toBe(PageComponent);
  });

  it('sends anything else back to the simulator rather than to a blank page', () => {
    const fallback = routes.find((route) => route.path === '**');

    expect(fallback?.redirectTo).toBe('');
    // The catch-all has to come last, otherwise it would swallow the routes declared after it.
    expect(routes.indexOf(fallback!)).toBe(routes.length - 1);
  });
});
