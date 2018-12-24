import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export function getTwUrl(options = {}) {
  const { title, url, hashtags = [] } = options;

  const params = encodeParams({
    text: title,
    url,
    hashtags: hashtags.join(','),
  });

  return `https://twitter.com/intent/tweet?${params}`;
}

export function tw(options = {}) {
  return window.open(getTwUrl(options), '_blank', WIN_PARAMS);
}
