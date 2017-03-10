import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function whatsapp(options = {}) {
  const { url, title } = options;

  const params = encodeParams({
    href: url,
    text: title,
  });

  // TODO: check for mobile ?
  return window.open(`whatsapp://send?${params}`, '_blank', WIN_PARAMS);
}
