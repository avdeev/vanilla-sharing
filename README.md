# vanilla-sharing

Small simple tool for sharing url, title, description and image to VK, Facebook, OK, G+, Twitter and Mail

[![Build Status](https://travis-ci.org/avdeev/vanilla-sharing.svg?branch=master)](https://travis-ci.org/avdeev/vanilla-sharing)
[![Build status](https://ci.appveyor.com/api/projects/status/4mmgunpsan58m0ol?svg=true)](https://ci.appveyor.com/project/avdeev/vanilla-sharing)
[![Coverage Status](https://coveralls.io/repos/github/avdeev/vanilla-sharing/badge.svg?branch=master)](https://coveralls.io/github/avdeev/vanilla-sharing?branch=master)
[![npm](https://img.shields.io/npm/v/vanilla-sharing.svg)](https://www.npmjs.com/package/vanilla-sharing)
[![npm](https://img.shields.io/npm/dm/vanilla-sharing.svg)](https://www.npmjs.com/package/vanilla-sharing)
[![David](https://david-dm.org/avdeev/vanilla-sharing.svg)](https://david-dm.org/avdeev/vanilla-sharing)
[![David](https://david-dm.org/avdeev/vanilla-sharing/dev-status.svg)](https://david-dm.org/avdeev/vanilla-sharing?type=dev)

# Installation

```sh
npm install --save vanilla-sharing
```

or

```sh
yard add vanilla-sharing
```

# Usage

1. From build folder. Include file build/vanilla-sharing.js to your project

```
VanillaSharing.vk(options);
```

2. From ES6 modules.

```js
import { vk } from 'vanilla-sharing';

vk(options);
```

# API

### `vk(options)`

Share to vk.com.

```js
vk({
  url: string,
  title: string,
  description: string,
  image: string,
  isVkParse: boolean,
})
```

### `fb(options)`

Share to facebook.com.

```js
fb({
  url: string,
  title: string,
  description: string,
  image: string,
  redirectUri: string,
  fbAppId: string,
})
```

### `tw(options)`

Share to Twitter.

```js
tw({
  url: string,
  title: string,
})
```

### `ok(options)`

Share to ok.ru.

```js
ok({
  url: string,
  title: string,
})
```

### `mail(options)`

Share to mail.ru.

```js
mail({
  url: string,
  title: string,
  description: string,
  image: string,
})
```

### `telegram(options)`

Share to Telegram.

```js
telegram({
  url: string,
  title: string,
})
```

### `viber(options)`

Share to Viber.
Share method from [Viber Share Button](https://developers.viber.com/tools/share-button/index.html).

```js
viber({
  url: string,
  title: string,
})
```

### `whatsapp(options)`

Share to Whatsapp.
Share method from [kriskbx/whatsapp-sharing](https://github.com/kriskbx/whatsapp-sharing).

```js
whatsapp({
  url: string,
  title: string,
})
```

### `gp(options)`

Share to Google+.

```js
gp({
  url: string,
})
```

### `linkedin(options)`

Share to LinkedIn.
Share method from [Share on LinkedIn](https://developer.linkedin.com/docs/share-on-linkedin#).

```js
linkedin({
  url: string,
  title: string,
  description: string,
})
```

### `messenger(options)`

Share to Facebook Messenger.
Share method from [Sharing for Messenger](https://developers.facebook.com/docs/sharing/messenger).

```js
messenger({
  url: string,
  fbAppId: string,
})
```
