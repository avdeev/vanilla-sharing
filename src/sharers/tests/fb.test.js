import faker from 'faker';

import fb from '../fb';

describe('fb', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  afterEach(() => {
    window.open.mockReset();
  });

  it('should throw without fbAppId', () => {
    expect(fb).toThrow('fbAppId is not defined');
  });

  it('should call with fbAppId', () => {
    const fixture = faker.random.number();

    fb({ fbAppId: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/feed?app_id=${fixture}&display=popup`);
  });

  it('should call with url and fbAppId', () => {
    const fixture = faker.internet.url();

    fb({ url: fixture, fbAppId: 123 });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/feed?app_id=123&display=popup&link=${encodeURIComponent(fixture)}`);
  });

  it('should call with title and fbAppId', () => {
    const fixture = faker.lorem.sentence();

    fb({ title: fixture, fbAppId: 123 });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/feed?app_id=123&display=popup&name=${encodeURIComponent(fixture)}`);
  });

  it('should call with description and fbAppId', () => {
    const fixture = faker.lorem.sentences();

    fb({ description: fixture, fbAppId: 123 });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/feed?app_id=123&display=popup&description=${encodeURIComponent(fixture)}`);
  });

  it('should call with image and fbAppId', () => {
    const fixture = faker.image.imageUrl();

    fb({ image: fixture, fbAppId: 123 });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/feed?app_id=123&display=popup&picture=${encodeURIComponent(fixture)}`);
  });
});
