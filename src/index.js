const WIN_PARAMS = 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0';

const encodeParams = obj =>
  Object.keys(obj)
    .filter(k => typeof obj[k] !== 'undefined')
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&');

export const vk = (options = {}) => {
  const { url, image, isVkParse } = options;
  let { description, title } = options;

  if (description && description.length > 80) {
    description = `${description.substr(0, 80)}...`;
  }

  if (title && title.length > 80) {
    title = `${title.substr(0, 80)}...`;
  }

  let params;
  if (isVkParse) {
    params = encodeParams({ url });
  } else {
    params = encodeParams({ url, title, description, image, noparse: true });
  }

  return window.open(`https://vk.com/share.php?${params}`, '_blank', WIN_PARAMS);
};

export const ok = (options = {}) => {
  const { url, title } = options;

  const params = encodeParams({
    'st.cmd': 'addShare',
    'st._surl': url,
    title,
  });

  return window.open(`https://ok.ru/dk?${params}`, '_blank', WIN_PARAMS);
};

export const fb = (options = {}) => {
  const { fbAppId, description, title, url, image, redirectUri } = options;

  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  const params = encodeParams({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    link: url,
    name: title,
    description,
    picture: image,
  });

  return window.open(`https://www.facebook.com/dialog/feed?${params}`, '_blank', WIN_PARAMS);
};

export const gp = (options = {}) => {
  const { url } = options;

  const params = encodeParams({ url });

  return window.open(`https://plus.google.com/share?${params}`, '_blank', WIN_PARAMS);
};

export const tw = (options = {}) => {
  const { title, url } = options;

  const params = encodeParams({
    text: title,
    url,
  });

  return window.open(`https://twitter.com/intent/tweet?${params}`, '_blank', WIN_PARAMS);
};

export const mail = (options = {}) => {
  const { url, title, description, image } = options;

  const params = encodeParams({
    share_url: url,
    title,
    description,
    imageurl: image,
  });

  return window.open(`http://connect.mail.ru/share?${params}`, '_blank', WIN_PARAMS);
};
