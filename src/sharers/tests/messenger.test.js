import faker from 'faker';

import messenger from '../messenger';

describe('messenger', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  afterEach(() => {
    window.open.mockReset();
  });

  it('should throw without fbAppId', () => {
    expect(messenger).toThrow('fbAppId is not defined');
  });

  it('should call with fbAppId', () => {
    const fixture = faker.random.number();

    messenger({ fbAppId: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`fb-messenger://share?app_id=${fixture}`);
  });

  it('should call with url and fbAppId', () => {
    const fixture = faker.internet.url();

    messenger({ url: fixture, fbAppId: 123 });

    expect(window.open.mock.calls[0][0]).toBe(`fb-messenger://share?app_id=123&link=${encodeURIComponent(fixture)}`);
  });
});
