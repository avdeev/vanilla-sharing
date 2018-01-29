import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export default function whatsapp(options = {}) {
  const { phone, text } = options;
  const params = encodeParams({ text, phone });
  return window.open(`https://api.whatsapp.com/send?${params}`, '_blank', WIN_PARAMS);
}
