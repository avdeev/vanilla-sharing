import isMobileSafari from '../isMobileSafari';

describe('isMobileSafari()', () => {
  it('must return false in case of not iOS Safari user agent', () => {
    expect(isMobileSafari()).toBe(false);
  });

  it('must return true in case of iOS Safari user agent', () => {
    Object.defineProperty(window.navigator, 'userAgent', (function faker() {
      return {
        get: () => 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543 Safari/419.3',
      };
    }(window.navigator.userAgent)));

    expect(isMobileSafari()).toBe(true);
  });
});
