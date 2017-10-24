import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function fbButton(options = {}) {
  const { url } = options;

  if (!url) {
    throw new Error('url is not defined');
  }

  const params = encodeParams({
    kid_directed_site: 0,
    sdk: 'joey',
    u: url,
    display: 'popup',
    ref: 'plugin',
    src: 'share_button',
  });

  return window.open(`https://www.facebook.com/sharer/sharer.php?${params}`, '_blank', WIN_PARAMS);
}
