import encodeParams from '../utils/encodeParams';

export default function whatsapp(options = {}) {
  const { url, title } = options;

  const params = encodeParams({
    text: [title, url].filter(item => item).join(' '),
  });

  return window.open(`https://api.whatsapp.com/send?${params}`, '_blank');
}
