import { WIN_PARAMS } from 'config';

export default function fbbutton(options = {}) {
  const { url } = options;

  if (!url) {
    throw new Error('url is not defined');
  }

  return window.open(`https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=${url}&display=popup&ref=plugin&src=share_button`, '_blank', WIN_PARAMS);
}
