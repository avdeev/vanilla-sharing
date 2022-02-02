import { faker } from '@faker-js/faker';

import { fbButton } from '../fbButton';

describe('fbButton', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    expect(fbButton).toThrow('url is not defined');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    fbButton({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=${encodeURIComponent(fixture)}&display=popup&ref=plugin&src=share_button`);
  });
});
