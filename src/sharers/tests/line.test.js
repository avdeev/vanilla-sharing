import faker from 'faker';

import line from '../line';

describe('line', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should throw without url', () => {
    expect(line).toThrow('url is not defined');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    line({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://line.me/R/msg/text/?${encodeURIComponent(fixture)}`);
  });

  it('should call with title and url', () => {
    const title = faker.lorem.sentence();
    const url = faker.internet.url();

    line({ title, url });

    expect(window.open.mock.calls[0][0]).toBe(`https://line.me/R/msg/text/?${encodeURIComponent(`${title} ${url}`)}`);
  });
});
