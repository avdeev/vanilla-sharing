export default function encodeParams(obj) {
  return Object.keys(obj)
    .filter((k) => typeof obj[k] !== 'undefined' && obj[k] !== '')
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&');
}
