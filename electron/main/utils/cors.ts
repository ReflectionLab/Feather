import { session } from 'electron';

export function setDefaultHeaders() {
  const filter = {
    urls: ['*://*/*'],
  };

  session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
    const url = new URL(details.url);
    details.requestHeaders.Origin = url.origin;
    if (
      !details.url.includes('//127.0.0.1') &&
      details.requestHeaders.Referer &&
      details.requestHeaders.Referer.includes('//127.0.0.1')
    ) {
      details.requestHeaders.Referer = url.origin;
    }
    callback({
      // https://github.com/electron/electron/issues/23988 回调似乎无法修改headers，暂时先用index.html的meta referer policy替代
      cancel: false,
      requestHeaders: details.requestHeaders,
    });
  });
}
