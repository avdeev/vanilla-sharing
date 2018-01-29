import faker from 'faker';

import linkedin from '../linkedin';

describe('linkedin', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    linkedin();

    expect(window.open.mock.calls[0][0]).toBe('https://www.linkedin.com/shareArticle?mini=true&');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    linkedin({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fixture)}`);
  });

  it('should call with title', () => {
    const fixture = faker.lorem.sentence();

    linkedin({ title: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(fixture)}`);
  });

  it('should call with description', () => {
    const fixture = faker.lorem.sentence();

    linkedin({ description: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.linkedin.com/shareArticle?mini=true&summary=${encodeURIComponent(fixture)}`);
  });
});
