import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function viber(options = {}) {
  const { url, title } = options;

  const params = encodeParams({
    text: [title, url].filter(item => item).join(' '),
    fallback: 'https://viber.com',
  });

  // TODO: check for mobile ?
  return window.open(`viber://forward?${params}`, '_blank', WIN_PARAMS);
}
