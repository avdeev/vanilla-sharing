import mobileShare from '../mobileShare';
import isMobileSafari from '../isMobileSafari';

jest.mock('../isMobileSafari');

describe('mobileShare()', () => {
  const { open, location } = window;

  beforeEach(() => {
    delete window.open;
    window.open = jest.fn();

    delete window.location;
    window.location = { assign: jest.fn() };
  });

  afterAll(() => {
    window.open = open;
    window.location = location;
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
