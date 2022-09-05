import { faker } from '@faker-js/faker';

import { whatsapp } from '../whatsapp';

describe('whatsapp', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    whatsapp();

    expect(window.open.mock.calls[0][0]).toBe('https://api.whatsapp.com/send?');
  });

  it('should call with phone', () => {
    const phone = faker.phone.number();

    whatsapp({ phone });

    expect(window.open.mock.calls[0][0]).toBe(`https://api.whatsapp.com/send?phone=${encodeURIComponent(phone)}`);
  });

  it('should call with text', () => {
    const title = faker.lorem.sentence();
    const url = faker.internet.url();

    whatsapp({ title, url });

    expect(window.open.mock.calls[0][0]).toBe(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}`);
  });

  it('should call with text and phone', () => {
    const phone = faker.phone.number();
    const title = faker.lorem.sentence();
    const url = faker.internet.url();

    whatsapp({ title, url, phone });

    expect(window.open.mock.calls[0][0]).toBe(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}&phone=${encodeURIComponent(phone)}`);
  });
});
