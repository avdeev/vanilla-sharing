import isMobileSafari from '../utils/isMobileSafari';

export default function mobileShare(link) {
  return isMobileSafari() ? window.open(link) : window.location.assign(link);
}
