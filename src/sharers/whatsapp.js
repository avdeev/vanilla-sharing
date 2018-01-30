import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export default function whatsapp(options = {}) {
  const { phone, title, url } = options;

  const params = encodeParams({
    text: [title, url].filter(item => item).join(' '),
    phone,
  });

  return window.open(`https://api.whatsapp.com/send?${params}`, '_blank', WIN_PARAMS);
}
