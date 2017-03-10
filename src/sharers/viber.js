import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function viber(options = {}) {
  const { url, title } = options;

  const arr = [];

  if (title) {
    arr.push(title);
  }

  if (url) {
    arr.push(url);
  }

  const params = encodeParams({
    text: arr.join(' '),
  });

  // TODO: check for mobile ?
  return window.open(`viber://forward?${params}`, '_blank', WIN_PARAMS);
}
