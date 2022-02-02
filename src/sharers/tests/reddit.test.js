import { faker } from '@faker-js/faker';

import reddit from '../reddit';

describe('reddit', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    reddit();

    expect(window.open.mock.calls[0][0]).toBe('https://www.reddit.com/submit?');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    reddit({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.reddit.com/submit?url=${encodeURIComponent(fixture)}`);
  });
});
