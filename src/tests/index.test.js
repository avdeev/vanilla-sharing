import faker from 'faker';

import { vk, ok, fb, gp, tw, mail } from '../index';

describe('tests', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  afterEach(() => {
    window.open.mockReset();
  });

  describe('vk', () => {
    it('should call', () => {
      vk(faker.lorem.sentence());
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

  describe('ok', () => {
    it('should call', () => {
      ok();
      expect(window.open.mock.calls[0][0]).toBe('https://ok.ru/dk?st.cmd=addShare');
    });
  });

  describe('fb', () => {
    it('should throw', () => {
      expect(fb).toThrow('fbAppId is not defined');
    });

    it('should call', () => {
      fb({ fbAppId: 'foo' });
      expect(window.open.mock.calls[0][0]).toBe('https://www.facebook.com/dialog/feed?app_id=foo&display=popup');
    });
  });

  describe('gp', () => {
    it('should call', () => {
      gp();
      expect(window.open.mock.calls[0][0]).toBe('https://plus.google.com/share?');
    });
  });

  describe('tw', () => {
    it('should call', () => {
      tw();
      expect(window.open.mock.calls[0][0]).toBe('https://twitter.com/intent/tweet?');
    });
  });

  describe('mail', () => {
    it('should call', () => {
      mail();
      expect(window.open.mock.calls[0][0]).toBe('http://connect.mail.ru/share?');
    });
  });
});
