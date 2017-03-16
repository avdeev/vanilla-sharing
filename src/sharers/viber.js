import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function viber(options = {}) {
  const { url, title } = options;

  const params = encodeParams({
    text: [title, url].filter(item => item).join(' '),
    fallback: 'https://viber.com',
  });

  return window.open(`https://app.adjust.com/u783g1_kw9yml?${params}`, '_blank', WIN_PARAMS);
}
