import { WIN_PARAMS } from 'config';
import encodeParams from 'utils/encodeParams';

export default function mail(options = {}) {
  const { url, title, description, image } = options;

  const params = encodeParams({
    share_url: url,
    title,
    description,
    imageurl: image,
  });

  return window.open(`http://connect.mail.ru/share?${params}`, '_blank', WIN_PARAMS);
}
