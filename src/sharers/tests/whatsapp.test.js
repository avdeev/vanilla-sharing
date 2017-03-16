import faker from 'faker';

import whatsapp from '../whatsapp';

describe('whatsapp', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  afterEach(() => {
    window.open.mockReset();
  });

  it('should call without params', () => {
    whatsapp();

    expect(window.open.mock.calls[0][0]).toBe('whatsapp://send?text=');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    whatsapp({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`whatsapp://send?text=${encodeURIComponent(fixture)}`);
  });

  it('should call with title', () => {
    const fixture = faker.lorem.sentence();

    whatsapp({ title: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`whatsapp://send?text=${encodeURIComponent(fixture)}`);
  });

  it('should call with title and url', () => {
    const title = faker.lorem.sentence();
    const url = faker.internet.url();

    whatsapp({ title, url });

    expect(window.open.mock.calls[0][0]).toBe(`whatsapp://send?text=${encodeURIComponent(`${title} ${url}`)}`);
  });
});
