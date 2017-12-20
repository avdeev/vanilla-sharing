'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WIN_PARAMS = 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0';
var VK_MAX_LENGTH = 80;

function encodeParams(obj) {
  return Object.keys(obj).filter(function (k) {
    return typeof obj[k] !== 'undefined';
  }).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
}

function fbFeed() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      url = options.url,
      redirectUri = options.redirectUri;


  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = encodeParams({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    link: url
  });

  return window.open('https://www.facebook.com/dialog/feed?' + params, '_blank', WIN_PARAMS);
}

function fbShare() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      url = options.url,
      hashtag = options.hashtag,
      quote = options.quote,
      redirectUri = options.redirectUri;


  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = encodeParams({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    href: url,
    hashtag: hashtag,
    quote: quote
  });

  return window.open('https://www.facebook.com/dialog/share?' + params, '_blank', WIN_PARAMS);
}

function fbButton() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url;


  if (!url) {
    throw new Error('url is not defined');
  }

  var params = encodeParams({
    kid_directed_site: 0,
    sdk: 'joey',
    u: url,
    display: 'popup',
    ref: 'plugin',
    src: 'share_button'
  });

  return window.open('https://www.facebook.com/sharer/sharer.php?' + params, '_blank', WIN_PARAMS);
}

function gp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url;


  var params = encodeParams({ url: url });

  return window.open('https://plus.google.com/share?' + params, '_blank', WIN_PARAMS);
}

function mail() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title,
      description = options.description,
      image = options.image;


  var params = encodeParams({
    share_url: url,
    title: title,
    description: description,
    imageurl: image
  });

  return window.open('http://connect.mail.ru/share?' + params, '_blank', WIN_PARAMS);
}

function ok() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = encodeParams({
    'st.cmd': 'addShare',
    'st._surl': url,
    title: title
  });

  return window.open('https://ok.ru/dk?' + params, '_blank', WIN_PARAMS);
}

function telegram() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = encodeParams({
    url: url,
    text: title
  });

  return window.open('https://t.me/share/url?' + params, '_blank', WIN_PARAMS);
}

function tw() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url;


  var params = encodeParams({
    text: title,
    url: url
  });

  return window.open('https://twitter.com/intent/tweet?' + params, '_blank', WIN_PARAMS);
}

function isMobileSafari() {
  return !!window.navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
}

function mobileShare(link) {
  return isMobileSafari() ? window.open(link) : window.location.assign(link);
}

function viber() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;

  if (!url && !title) {
    throw new Error('url and title not specified');
  }

  var params = encodeParams({
    text: [title, url].filter(function (item) {
      return item;
    }).join(' ')
  });

  return mobileShare('viber://forward?' + params);
}

function getUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      image = options.image,
      isVkParse = options.isVkParse;
  var description = options.description,
      title = options.title;


  if (description && description.length > VK_MAX_LENGTH) {
    description = description.substr(0, VK_MAX_LENGTH) + '...';
  }

  if (title && title.length > VK_MAX_LENGTH) {
    title = title.substr(0, VK_MAX_LENGTH) + '...';
  }

  var params = void 0;
  if (isVkParse) {
    params = encodeParams({ url: url });
  } else {
    params = encodeParams({
      url: url, title: title, description: description, image: image, noparse: true
    });
  }

  return 'https://vk.com/share.php?' + params;
}

function share() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return window.open(getUrl(options), '_blank', WIN_PARAMS);
}

function whatsapp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = encodeParams({
    text: [title, url].filter(function (item) {
      return item;
    }).join(' ')
  });

  return mobileShare('whatsapp://send?' + params);
}

function linkedin() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url,
      description = options.description;


  var params = encodeParams({
    title: title,
    summary: description,
    url: url
  });

  return window.open('https://www.linkedin.com/shareArticle?mini=true&' + params, '_blank', WIN_PARAMS);
}

function messenger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      url = options.url;


  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = encodeParams({
    app_id: fbAppId,
    link: url
  });

  return window.location.assign('fb-messenger://share?' + params);
}

function line() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url;


  if (!url) {
    throw new Error('url is not defined');
  }

  var params = encodeURIComponent('' + url);

  if (title) {
    params = '' + encodeURIComponent(title + ' ') + params;
  }

  return window.open('https://line.me/R/msg/text/?' + params, '_blank', WIN_PARAMS);
}

// @FIXME

exports.fbFeed = fbFeed;
exports.fbShare = fbShare;
exports.fbButton = fbButton;
exports.gp = gp;
exports.mail = mail;
exports.ok = ok;
exports.telegram = telegram;
exports.tw = tw;
exports.viber = viber;
exports.getVkUrl = getUrl;
exports.vk = share;
exports.whatsapp = whatsapp;
exports.linkedin = linkedin;
exports.messenger = messenger;
exports.line = line;
