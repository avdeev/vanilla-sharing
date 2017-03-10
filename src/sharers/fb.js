import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function fb(options = {}) {
  const { fbAppId, description, title, url, image, redirectUri } = options;

  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  const params = encodeParams({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    link: url,
    name: title,
    description,
    picture: image,
  });

  return window.open(`https://www.facebook.com/dialog/feed?${params}`, '_blank', WIN_PARAMS);
}
