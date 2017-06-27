import encodeParams from 'utils/encodeParams';
import mobileShare from 'utils/mobileShare';

export default function viber(options = {}) {
  const { url, title } = options;
  if (!url && !title) {
    throw new Error('url and title not specified');
  }

  const params = encodeParams({
    text: [title, url].filter(item => item).join(' '),
  });

  return mobileShare(`viber://forward?${params}`);
}
