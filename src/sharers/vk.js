import { WIN_PARAMS } from '../config';
import encodeParams from '../utils/encodeParams';

const VK_MAX_LENGTH = 80;

export function getVkUrl(options = {}) {
  const { url, image, isVkParse } = options;
  let { description, title } = options;

  if (description && description.length > VK_MAX_LENGTH) {
    description = `${description.substr(0, VK_MAX_LENGTH)}...`;
  }

  if (title && title.length > VK_MAX_LENGTH) {
    title = `${title.substr(0, VK_MAX_LENGTH)}...`;
  }

  let params;
  if (isVkParse) {
    params = encodeParams({ url });
  } else {
    params = encodeParams({
      url, title, description, image, noparse: true,
    });
  }

  return `https://vk.com/share.php?${params}`;
}

export function vk(options = {}) {
  return window.open(getVkUrl(options), '_blank', WIN_PARAMS);
}
