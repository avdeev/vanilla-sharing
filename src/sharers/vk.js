import { WIN_PARAMS, VK_MAX_LENGTH } from 'config';
import encodeParams from 'utils/encodeParams';

export function getUrl(options = {}) {
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

export function share(options = {}) {
  return window.open(getUrl(options), '_blank', WIN_PARAMS);
}
