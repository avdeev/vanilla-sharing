import faker from 'faker';

import tumblr from '../tumblr';

describe('tumblr', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    tumblr();

    expect(window.open.mock.calls[0][0]).toBe('https://www.tumblr.com/widgets/share/tool?posttype=link');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    tumblr({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(fixture)}&posttype=link`);
  });
});
