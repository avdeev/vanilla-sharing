import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function viber(options = {}) {
  const { url, title } = options;
  if (!url && !title) {
    throw new Error('url and title not specified');
  }

  const params = encodeParams({
    text: [title, url].filter(item => item).join(' '),
  });

  return window.open(`viber://forward?${params}`, '_blank', WIN_PARAMS);
}
