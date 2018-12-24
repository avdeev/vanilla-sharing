import encodeParams from '../utils/encodeParams';
import mobileShare from '../utils/mobileShare';

export function getViberUrl(options = {}) {
  const { url, title } = options;
  if (!url && !title) {
    throw new Error('url and title not specified');
  }

  const params = encodeParams({
    text: [title, url].filter(item => item).join(' '),
  });

  return `viber://forward?${params}`;
}

export function viber(options = {}) {
  return mobileShare(getViberUrl(options));
}
