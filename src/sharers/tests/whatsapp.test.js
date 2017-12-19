import faker from 'faker';

import mobileShare from '../../utils/mobileShare';
import whatsapp from '../whatsapp';

jest.mock('../../utils/mobileShare');

describe('whatsapp', () => {
  afterEach(() => {
    mobileShare.mockReset();
  });

  it('should call without params', () => {
    whatsapp();

    expect(mobileShare.mock.calls[0][0]).toBe('whatsapp://send?text=');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    whatsapp({ url: fixture });

    expect(mobileShare.mock.calls[0][0]).toBe(`whatsapp://send?text=${encodeURIComponent(fixture)}`);
  });

  it('should call with title', () => {
    const fixture = faker.lorem.sentence();

    whatsapp({ title: fixture });

    expect(mobileShare.mock.calls[0][0]).toBe(`whatsapp://send?text=${encodeURIComponent(fixture)}`);
  });

  it('should call with title and url', () => {
    const title = faker.lorem.sentence();
    const url = faker.internet.url();

    whatsapp({ title, url });

    expect(mobileShare.mock.calls[0][0]).toBe(`whatsapp://send?text=${encodeURIComponent(`${title} ${url}`)}`);
  });
});
