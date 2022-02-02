import { faker } from '@faker-js/faker';

import { fbShare } from '../fbShare';

describe('fbShare', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should throw without fbAppId', () => {
    expect(fbShare).toThrow('fbAppId is not defined');
  });

  it('should call with fbAppId', () => {
    const fixture = faker.datatype.number();

    fbShare({ fbAppId: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/share?app_id=${fixture}&display=popup`);
  });

  it('should call with url and fbAppId', () => {
    const fixture = faker.internet.url();

    fbShare({ url: fixture, fbAppId: 123 });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/share?app_id=123&display=popup&href=${encodeURIComponent(fixture)}`);
  });

  it('should call with hashtag and fbAppId', () => {
    const fixture = faker.lorem.word();

    fbShare({ hashtag: fixture, fbAppId: 123 });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/share?app_id=123&display=popup&hashtag=${encodeURIComponent(fixture)}`);
  });
});
