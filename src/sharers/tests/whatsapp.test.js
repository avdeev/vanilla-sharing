import faker from 'faker';

import whatsapp from '../whatsapp';

describe('whatsapp', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    whatsapp();

    expect(window.open.mock.calls[0][0]).toBe('https://api.whatsapp.com/send?');
  });

  it('should call with phone', () => {
    const phone = faker.phone.phoneNumber();

    whatsapp({ phone });

    expect(window.open.mock.calls[0][0]).toBe(`https://api.whatsapp.com/send?phone=${encodeURIComponent(phone)}`);
  });

  it('should call with text', () => {
    const text = faker.lorem.sentence();

    whatsapp({ text });

    expect(window.open.mock.calls[0][0]).toBe(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`);
  });

  it('should call with text and phone', () => {
    const phone = faker.phone.phoneNumber();
    const text = faker.lorem.sentence();

    whatsapp({ text, phone });

    expect(window.open.mock.calls[0][0]).toBe(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}&phone=${encodeURIComponent(phone)}`);
  });
});
