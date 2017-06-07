import faker from 'faker';

import viber from '../viber';

describe('viber', () => {
  beforeEach(() => {
    window.location.assign = jest.fn();
  });

  afterEach(() => {
    window.location.assign.mockReset();
  });

  it('should throw if title and url are empty', () => {
    expect(viber).toThrow();
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    viber({ url: fixture });

    expect(window.location.assign.mock.calls[0][0]).toBe(`viber://forward?text=${encodeURIComponent(fixture)}`);
  });

  it('should call with title', () => {
    const fixture = faker.lorem.sentence();

    viber({ title: fixture });

    expect(window.location.assign.mock.calls[0][0]).toBe(`viber://forward?text=${encodeURIComponent(fixture)}`);
  });

  it('should call with title and url', () => {
    const title = faker.lorem.sentence();
    const url = faker.internet.url();

    viber({ title, url });

    expect(window.location.assign.mock.calls[0][0]).toBe(`viber://forward?text=${encodeURIComponent(`${title} ${url}`)}`);
  });
});
