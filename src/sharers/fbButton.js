import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export function getFbButtonUrl(options = {}) {
  const { url } = options;

  if (!url) {
    throw new Error('url is not defined');
  }

  const params = encodeParams({
    kid_directed_site: '0',
    sdk: 'joey',
    u: url,
    display: 'popup',
    ref: 'plugin',
    src: 'share_button',
  });

  return `https://www.facebook.com/sharer/sharer.php?${params}`;
}

export function fbButton(options = {}) {
  return window.open(getFbButtonUrl(options), '_blank', WIN_PARAMS);
}
