export default function email(options = {}) {
  const {
    url, title, description,
  } = options;

  const body = `${title || ''}\r\n${description || ''}\r\n${url || ''}`;
  const uri = `mailto:?subject=&body=${encodeURIComponent(body)}`;
  return window.location.assign(uri);
}
