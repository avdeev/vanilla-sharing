import faker from 'faker';

import mail from '../mail';

describe('mail', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    mail();

    expect(window.open.mock.calls[0][0]).toBe('http://connect.mail.ru/share?');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    mail({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`http://connect.mail.ru/share?share_url=${encodeURIComponent(fixture)}`);
  });

  it('should call with title', () => {
    const fixture = faker.lorem.sentence();

    mail({ title: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`http://connect.mail.ru/share?title=${encodeURIComponent(fixture)}`);
  });

  it('should call with description', () => {
    const fixture = faker.lorem.sentences();

    mail({ description: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`http://connect.mail.ru/share?description=${encodeURIComponent(fixture)}`);
  });

  it('should call with image', () => {
    const fixture = faker.image.imageUrl();

    mail({ image: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`http://connect.mail.ru/share?imageurl=${encodeURIComponent(fixture)}`);
  });
});
