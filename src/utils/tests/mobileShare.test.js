import mobileShare from '../mobileShare';
import isMobileSafari from '../isMobileSafari';

jest.mock('../isMobileSafari');

describe('mobileShare()', () => {
  beforeEach(() => {
    window.open = jest.fn();
    window.location.assign = jest.fn();
  });

  it('must call window.location.assign if isMobileSafari() returns false', () => {
    const link = 'test';

    mobileShare(link);
    expect(window.location.assign).toHaveBeenCalledWith(link);
  });

  it('must call window.open if isMobileSafari() returns true', () => {
    const link = 'test';

    isMobileSafari.mockReturnValue(true);
    mobileShare(link);
    expect(window.open).toHaveBeenCalledWith(link);
  });
});
