import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export default function reddit(options = {}) {
  const { url, title } = options;
  const params = encodeParams({ url, title });

  return window.open(`https://www.reddit.com/submit?${params}`, '_blank', WIN_PARAMS);
}
