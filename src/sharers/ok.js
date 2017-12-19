import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export default function ok(options = {}) {
  const { url, title } = options;

  const params = encodeParams({
    'st.cmd': 'addShare',
    'st._surl': url,
    title,
  });

  return window.open(`https://ok.ru/dk?${params}`, '_blank', WIN_PARAMS);
}
