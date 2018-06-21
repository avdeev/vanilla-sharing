import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export default function tw(options = {}) {
  const { title, url, hashtags = [] } = options;

  const params = encodeParams({
    text: title,
    url,
    hashtags: hashtags.join(','),
  });

  return window.open(`https://twitter.com/intent/tweet?${params}`, '_blank', WIN_PARAMS);
}
