import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function telegram(options = {}) {
  const { url, title } = options;

  const params = encodeParams({
    url,
    text: title,
  });

  return window.open(`https://t.me/share/url?${params}`, '_blank', WIN_PARAMS);
}
