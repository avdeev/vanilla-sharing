import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export default function fbShare(options = {}) {
  const {
    fbAppId, url, hashtag, quote, redirectUri,
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

  return window.open(`https://www.facebook.com/dialog/share?${params}`, '_blank', WIN_PARAMS);
}
