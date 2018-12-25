import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export function getFbFeedUrl(options = {}) {
  const {
    fbAppId, url, redirectUri,
  } = options;

  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  const params = encodeParams({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    link: url,
  });

  return `https://www.facebook.com/dialog/feed?${params}`;
}

export function fbFeed(options = {}) {
  return window.open(getFbFeedUrl(options), '_blank', WIN_PARAMS);
}
