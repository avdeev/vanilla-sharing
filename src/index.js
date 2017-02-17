
const WIN_PARAMS = 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0';

const vk = (options = {}) => {
  const { url, image, isVkParse } = options;
  let { description, title } = options;

  if (description && description.length > 80) {
    description = `${description.substr(0, 80)}...`;
  }

  if (title && title.length > 80) {
    title = `${title.substr(0, 80)}...`;
  }

  let params = `url=${url}&title=${title}&description=${description}&image=${image}&noparse=true`;
  if (isVkParse) {
    params = `url=${url}`;
  }

  return window.open(`https://vk.com/share.php?${params}`, '_blank', WIN_PARAMS);
};


const ok = (options = {}) => {
  const { url, title } = options;

  return window.open(`https://ok.ru/dk?st.cmd=addShare&st._surl=${url}&title=${title}`, '_blank', WIN_PARAMS);
};

const fb = (options = {}) => {
  const { fbAppId, description, title, url, image, redirectUri } = options;

  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  let params = `app_id=${fbAppId}&display=popup&redirect_uri=${redirectUri}`;
  params = `${params}&link=${url}&name=${title}&description=${description}&picture=${image}`;

  return window.open(`https://www.facebook.com/dialog/feed?${params}`, '_blank', WIN_PARAMS);
};

const gp = (options = {}) => {
  const { url } = options;

  return window.open(`https://plus.google.com/share?url=${url}`, '_blank', WIN_PARAMS);
};

const tw = (options = {}) => {
  const { title, url } = options;

  return window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, '_blank', WIN_PARAMS);
};

const mail = (options = {}) => {
  const { url, title, description, image } = options;

  return window.open(`http://connect.mail.ru/share?share_url=${url}&title=${title}&description=${description}&imageurl=${image}`, '_blank', WIN_PARAMS);
};

export {
  vk,
  ok,
  fb,
  gp,
  tw,
  mail,
};
