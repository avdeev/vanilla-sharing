import faker from 'faker';

import viber from '../viber';

describe('viber', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  afterEach(() => {
    window.open.mockReset();
  });

  it('should call without params', () => {
    viber();

    expect(window.open.mock.calls[0][0]).toBe('viber://forward?text=');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    viber({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`viber://forward?text=${encodeURIComponent(fixture)}`);
  });

  it('should call with title', () => {
    const fixture = faker.lorem.sentence();

    viber({ title: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`viber://forward?text=${encodeURIComponent(fixture)}`);
  });
});
