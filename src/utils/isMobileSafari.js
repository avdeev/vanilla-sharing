export default function isMobileSafari() {
  return !!window.navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
}
