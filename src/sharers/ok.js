import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export function getOkUrl(options = {}) {
  const { url, title, image } = options;

  const params = encodeParams({
    url,
    title,
    imageUrl: image,
  });

  return `https://connect.ok.ru/offer?${params}`;
}

export function ok(options = {}) {
  return window.open(getOkUrl(options), '_blank', WIN_PARAMS);
}
