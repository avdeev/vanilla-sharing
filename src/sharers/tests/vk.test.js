import faker from 'faker';

import vk from '../vk';

describe('vk', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  afterEach(() => {
    window.open.mockReset();
  });

  it('should call without params', () => {
    vk();

    expect(window.open.mock.calls[0][0]).toBe('https://vk.com/share.php?noparse=true');
  });

  it('should call with very lond description', () => {
    const fixture = faker.lorem.sentence(81);

    vk({ description: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://vk.com/share.php?description=${encodeURIComponent(fixture.substr(0, 80))}...&noparse=true`);
  });

  it('should call with very lond title', () => {
    const fixture = faker.lorem.sentence(81);

    vk({ title: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://vk.com/share.php?title=${encodeURIComponent(fixture.substr(0, 80))}...&noparse=true`);
  });

  it('should call with isVkParse true', () => {
    vk({ isVkParse: true });

    expect(window.open.mock.calls[0][0]).toBe('https://vk.com/share.php?');
  });
});
