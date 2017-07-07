import faker from 'faker';

import fbbutton from '../fbbutton';

describe('fbbutton', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  afterEach(() => {
    window.open.mockReset();
  });

  it('should call without params', () => {
    expect(fbbutton).toThrow('url is not defined');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    fbbutton({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=${fixture}&display=popup&ref=plugin&src=share_button`);
  });
});
