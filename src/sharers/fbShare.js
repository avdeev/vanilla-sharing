import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export function getFbShareUrl(options = {}) {
  const {
    fbAppId, url, hashtag, redirectUri, quote,
  } = options;

  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  const params = encodeParams({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    href: url,
    hashtag,
    quote,
  });

  return `https://www.facebook.com/dialog/share?${params}`;
}

export function fbShare(options = {}) {
  return window.open(getFbShareUrl(options), '_blank', WIN_PARAMS);
}
