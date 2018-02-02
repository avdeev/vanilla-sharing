import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export default function reddit(options = {}) {
  const { url } = options;

  if (!url) {
    throw new Error('url is not defined');
  }
  
  const params = encodeParams({
    url
  });

  return window.open(`https://www.reddit.com/submit?${params}`, '_blank', WIN_PARAMS);
}
