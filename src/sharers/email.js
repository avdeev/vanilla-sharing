import encodeParams from '../utils/encodeParams';

export default function email(options = {}) {
  const {
    url, title, description, subject,
  } = options;
  const params = encodeParams({
    subject,
    body: `${title || ''}\r\n${description || ''}\r\n${url || ''}`,
  });
  return window.location.assign(`mailto:?${params}`);
}
