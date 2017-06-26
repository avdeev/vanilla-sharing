import encodeParams from 'utils/encodeParams';
import mobileShare from 'utils/mobileShare';

export default function whatsapp(options = {}) {
  const { url, title } = options;

  const params = encodeParams({
    text: [title, url].filter(item => item).join(' '),
  });

  return mobileShare(`whatsapp://send?${params}`);
}
