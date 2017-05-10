import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function linkedin(options = {}) {
  const { title, url, description } = options;

  const params = encodeParams({
    title,
    summary: description,
    url,
  });

  return window.open(`https://www.linkedin.com/shareArticle?mini=true&${params}`, '_blank', WIN_PARAMS);
}
