import faker from 'faker';

import { email } from '../email';

describe('email', () => {
  const { location } = window;

  beforeEach(() => {
    delete window.location;
    window.location = { assign: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  it('should call without params', () => {
    email();
    expect(window.location.assign).toBeCalledWith('mailto:?body=%0D%0A%0D%0A');
  });

  it('should call with to', () => {
    const fixture = faker.internet.email();
    email({ to: fixture });
    expect(window.location.assign).toBeCalledWith(`mailto:${fixture}?body=%0D%0A%0D%0A`);
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();
    email({ url: fixture });
    expect(window.location.assign).toBeCalledWith(`mailto:?body=%0D%0A%0D%0A${encodeURIComponent(fixture)}`);
  });

  it('should call with title', () => {
    const fixture = faker.lorem.sentence();

    email({ title: fixture });

    expect(window.location.assign).toBeCalledWith(`mailto:?body=${encodeURIComponent(fixture)}%0D%0A%0D%0A`);
  });

  it('should call with description', () => {
    const fixture = faker.lorem.sentences();

    email({ description: fixture });

    expect(window.location.assign).toBeCalledWith(`mailto:?body=%0D%0A${encodeURIComponent(fixture)}%0D%0A`);
  });

  it('should call with description and subject', () => {
    const fixture = faker.lorem.sentences();
    const subject = faker.lorem.sentence();

    email({ description: fixture, subject });

    expect(window.location.assign).toBeCalledWith(`mailto:?subject=${encodeURIComponent(subject)}&body=%0D%0A${encodeURIComponent(fixture)}%0D%0A`);
  });
});
