import { faker } from '@faker-js/faker';

import { ok } from '../ok';

describe('ok', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    ok();

    expect(window.open.mock.calls[0][0]).toBe('https://connect.ok.ru/offer?');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    ok({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(
      `https://connect.ok.ru/offer?url=${encodeURIComponent(fixture)}`,
    );
  });

  it('should call with title', () => {
    const fixture = faker.lorem.sentence();

    ok({ title: fixture });

    expect(window.open.mock.calls[0][0]).toBe(
      `https://connect.ok.ru/offer?title=${encodeURIComponent(fixture)}`,
    );
  });

  it('should call with image', () => {
    const fixture = faker.image.url();

    ok({ image: fixture });

    expect(window.open.mock.calls[0][0]).toBe(
      `https://connect.ok.ru/offer?imageUrl=${encodeURIComponent(fixture)}`,
    );
  });
});
