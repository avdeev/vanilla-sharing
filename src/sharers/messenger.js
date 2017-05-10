import encodeParams from 'utils/encodeParams';

export default function messenger(options = {}) {
  const { fbAppId, url } = options;

  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  const params = encodeParams({
    app_id: fbAppId,
    link: url,
  });

  return window.open(`fb-messenger://share?${params}`);
}
