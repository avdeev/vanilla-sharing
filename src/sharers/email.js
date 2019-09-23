import encodeParams from '../utils/encodeParams';

export function getEmailUrl(options = {}) {
  const {
    to, url, title, description, subject,
  } = options;

  const params = encodeParams({
    subject,
    body: `${title || ''}\r\n${description || ''}\r\n${url || ''}`,
  });

  return `mailto:${to || ''}?${params}`;
}

export function email(options = {}) {
  return window.location.assign(getEmailUrl(options));
}
