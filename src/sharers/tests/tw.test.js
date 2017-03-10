import faker from 'faker';

import tw from '../tw';

describe('tw', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  afterEach(() => {
    window.open.mockReset();
  });

  it('should call without params', () => {
    tw();

    expect(window.open.mock.calls[0][0]).toBe('https://twitter.com/intent/tweet?');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    tw({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://twitter.com/intent/tweet?url=${encodeURIComponent(fixture)}`);
  });

  it('should call with title', () => {
    const fixture = faker.lorem.sentence();

    tw({ title: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://twitter.com/intent/tweet?text=${encodeURIComponent(fixture)}`);
  });
});
