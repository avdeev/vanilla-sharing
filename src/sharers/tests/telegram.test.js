import faker from 'faker';

import { telegram } from '../telegram';

describe('telegram', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    telegram();

    expect(window.open.mock.calls[0][0]).toBe('https://t.me/share/url?');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    telegram({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://t.me/share/url?url=${encodeURIComponent(fixture)}`);
  });

  it('should call with title', () => {
    const fixture = faker.lorem.sentence();

    telegram({ title: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://t.me/share/url?text=${encodeURIComponent(fixture)}`);
  });
});
