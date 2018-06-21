import faker from 'faker';

import pinterest from '../pinterest';

describe('pinterest', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    pinterest();

    expect(window.open.mock.calls[0][0]).toBe('https://pinterest.com/pin/create/button/?');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    pinterest({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(fixture)}`);
  });
});
