import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function tw(options = {}) {
  const { title, url } = options;

  const params = encodeParams({
    text: title,
    url,
  });

  return window.open(`https://twitter.com/intent/tweet?${params}`, '_blank', WIN_PARAMS);
}
