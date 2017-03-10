import faker from 'faker';

import ok from '../ok';

describe('ok', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  afterEach(() => {
    window.open.mockReset();
  });

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
