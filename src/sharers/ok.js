import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

export function getOkUrl(options = {}) {
  const { url, title } = options;

  const params = encodeParams({
    'st.cmd': 'addShare',
    'st._surl': url,
    title,
  });

  return window.open(`https://ok.ru/dk?${params}`, '_blank', WIN_PARAMS);
}

export function ok(options = {}) {
  return window.open(getOkUrl(options), '_blank', WIN_PARAMS);
}
