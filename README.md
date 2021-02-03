<p align="center"><img src="logo/VSred2.png" alt="Vanilla Sharing" height="200px"></p>

# vanilla-sharing

Small (1.5 KB) simple tool for sharing url, title, description and image to VK, Facebook (Feed, Dialog, Button, Messenger), Twitter, Reddit, Pinterest, Tumblr, VK, OK, Mail.ru, LinkedIn, Whatsapp, Viber, Telegram, Line.

[DEMO](https://avdeev.github.io/vanilla-sharing/demo)

[![Build Status](https://github.com/avdeev/vanilla-sharing/workflows/Node%20CI/badge.svg)](https://github.com/avdeev/vanilla-sharing/actions?query=workflow%3A%22Node+CI%22)
[![bundlephobia](https://badgen.net/bundlephobia/minzip/vanilla-sharing)](https://bundlephobia.com/result?p=vanilla-sharing)
[![Coverage Status](https://coveralls.io/repos/github/avdeev/vanilla-sharing/badge.svg?branch=master)](https://coveralls.io/github/avdeev/vanilla-sharing?branch=master)
[![npm](https://img.shields.io/npm/v/vanilla-sharing.svg)](https://www.npmjs.com/package/vanilla-sharing)
[![npm](https://img.shields.io/npm/dm/vanilla-sharing.svg)](https://www.npmjs.com/package/vanilla-sharing)
[![David](https://david-dm.org/avdeev/vanilla-sharing.svg)](https://david-dm.org/avdeev/vanilla-sharing)
[![David](https://david-dm.org/avdeev/vanilla-sharing/dev-status.svg)](https://david-dm.org/avdeev/vanilla-sharing?type=dev)

# Motivation

Adding sharings to a project is digging in the documentation of the corresponding social networks. With this set of small functions, we have already done everything for you. Just take them and use!

# Installation

## From NPM

```sh
npm install --save vanilla-sharing
```

## From unpkg CDN (you can use other)

```html
<script src="https://unpkg.com/vanilla-sharing"></script>
```

# Usage

## From NPM

```js
import { fbButton } from 'vanilla-sharing';

fbButton({
  url: 'https://alexey-avdeev.com/vanilla-sharing/',
});
```

## From CDN

```js
VanillaSharing.fbButton({
  url: 'https://alexey-avdeev.com/vanilla-sharing/',
});
```

# API

### `fbFeed(options)`

Share on facebook.com via the Feed dialog

Documentation: https://developers.facebook.com/docs/sharing/reference/feed-dialog

```js
fbFeed({
  url: string,
  redirectUri: string,
  fbAppId: string,
})
```

You can use `getFbFeedUrl(options)` for getting URL.

### `fbShare(options)`

Share on facebook.com via the Share dialog

Documentation: https://developers.facebook.com/docs/sharing/reference/share-dialog

```js
fbShare({
  url: string,
  redirectUri: string,
  hashtag: string,
  fbAppId: string,
  quote: string,
})
```

You can use `getFbShareUrl(options)` for getting URL.

### `fbButton(options)`

Share on facebook.com using facebook share button

```js
fbButton({
  url: string,
})
```

You can use `getFbButtonUrl(options)` for getting URL.

### `messenger(options)`

Share via Facebook Messenger

Share method from [Sharing for Messenger](https://developers.facebook.com/docs/sharing/messenger).

```js
messenger({
  url: string,
  fbAppId: string,
})
```

### `tw(options)`

Share on Twitter

```js
tw({
  url: string,
  title: string,
  hashtags: array,
})
```

You can use `getTwUrl(options)` for getting URL.

### `reddit(options)`

Share on Reddit

```js
reddit({
  url: string,
  title: string,
})
```

### `pinterest(options)`

[Share on Pinterest](https://developers.pinterest.com/docs/widgets/save/?)

```js
pinterest({
  url: string,
  description: string,
  media: image url string,
})
```

### `tumblr(options)`

[Share on Tumblr](https://www.tumblr.com/docs/en/share_button)

```js
tumblr({
  url: string,
  title: string,
  caption: string,
  tags: array,
})
```

### `vk(options)`

Share on vk.com

```js
vk({
  url: string,
  title: string,
  description: string,
  image: string,
  isVkParse: boolean,
})
```

You can use `getVkUrl(options)` for getting URL.

### `ok(options)`

Share on ok.ru

[Like/Share button](https://apiok.ru/en/ext/like)

```js
ok({
  url: string,
  title: string,
  image: string,
})
```

You can use `getOkUrl(options)` for getting URL.

### `mail(options)`

Share on Mail.ru

```js
mail({
  url: string,
  title: string,
  description: string,
  image: string,
})
```

### `email(options)`

Share via user's email

```js
email({
  to: string,
  url: string,
  title: string,
  description: string,
  subject: string,
})
```

You can use `getEmailUrl(options)` for getting URL.

### `linkedin(options)`

Share on LinkedIn

Share method from [Share on LinkedIn](https://developer.linkedin.com/docs/share-on-linkedin#).

```js
linkedin({
  url: string,
  title: string,
  description: string,
})
```

### `whatsapp(options)`

Share via Whatsapp

[WhatsApp FAQ - Using Click to Chat](https://faq.whatsapp.com/en/android/26000030/).

```js
whatsapp({
  url: string,
  title: string,
  phone: string,
})
```

You can use `getWhatsappUrl(options)` for getting URL.

### `viber(options)`

Share via Viber

[Viber Share Button docs](https://developers.viber.com/docs/tools/share-button/).

```js
viber({
  url: string,
  title: string,
})
```

You can use `getViberUrl(options)` for getting URL.

### `telegram(options)`

Share via Telegram

```js
telegram({
  url: string,
  title: string,
})
```

You can use `getTelegramUrl(options)` for getting URL.

### `line(options)`

Share via Line

```js
line({
  url: string,
  title: string,
})
```
