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
    it('should call without params', () => {
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
    it('should call without params', () => {
      ok();

      expect(window.open.mock.calls[0][0]).toBe('https://ok.ru/dk?st.cmd=addShare');
    });

    it('should call with url', () => {
      const fixture = faker.internet.url();

      ok({ url: fixture });

      expect(window.open.mock.calls[0][0]).toBe(`https://ok.ru/dk?st.cmd=addShare&st._surl=${encodeURIComponent(fixture)}`);
    });

    it('should call with title', () => {
      const fixture = faker.lorem.sentence();

      ok({ title: fixture });

      expect(window.open.mock.calls[0][0]).toBe(`https://ok.ru/dk?st.cmd=addShare&title=${encodeURIComponent(fixture)}`);
    });
  });

  describe('fb', () => {
    it('should throw without fbAppId', () => {
      expect(fb).toThrow('fbAppId is not defined');
    });

    it('should call with fbAppId', () => {
      const fixture = faker.random.number();

      fb({ fbAppId: fixture });

      expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/feed?app_id=${fixture}&display=popup`);
    });

    it('should call with url and fbAppId', () => {
      const fixture = faker.internet.url();

      fb({ url: fixture, fbAppId: 123 });

      expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/feed?app_id=123&display=popup&link=${encodeURIComponent(fixture)}`);
    });

    it('should call with title and fbAppId', () => {
      const fixture = faker.lorem.sentence();

      fb({ title: fixture, fbAppId: 123 });

      expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/feed?app_id=123&display=popup&name=${encodeURIComponent(fixture)}`);
    });

    it('should call with description and fbAppId', () => {
      const fixture = faker.lorem.sentences();

      fb({ description: fixture, fbAppId: 123 });

      expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/feed?app_id=123&display=popup&description=${encodeURIComponent(fixture)}`);
    });

    it('should call with image and fbAppId', () => {
      const fixture = faker.image.imageUrl();

      fb({ image: fixture, fbAppId: 123 });

      expect(window.open.mock.calls[0][0]).toBe(`https://www.facebook.com/dialog/feed?app_id=123&display=popup&picture=${encodeURIComponent(fixture)}`);
    });
  });

  describe('gp', () => {
    it('should call without params', () => {
      gp();

      expect(window.open.mock.calls[0][0]).toBe('https://plus.google.com/share?');
    });

    it('should call with url', () => {
      const fixture = faker.internet.url();

      gp({ url: fixture });

      expect(window.open.mock.calls[0][0]).toBe(`https://plus.google.com/share?url=${encodeURIComponent(fixture)}`);
    });
  });

  describe('tw', () => {
    it('should call without params', () => {
      tw();

      expect(window.open.mock.calls[0][0]).toBe('https://twitter.com/intent/tweet?');
    });

    it('should call with url', () => {
      const fixture = faker.internet.url();

      tw({ url: fixture });

      expect(window.open.mock.calls[0][0]).toBe(`https://twitter.com/intent/tweet?url=${encodeURIComponent(fixture)}`);
    });

    it('should call with title', () => {
      const fixture = faker.lorem.sentence();

      tw({ title: fixture });

      expect(window.open.mock.calls[0][0]).toBe(`https://twitter.com/intent/tweet?text=${encodeURIComponent(fixture)}`);
    });
  });

  describe('mail', () => {
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
});
