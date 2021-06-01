import { iframeResize } from 'iframe-resizer'

const script = document.getElementById('widget-recosante')

const domain = script.dataset.domain
const size = script.dataset.size
const background = script.dataset.background
const source = window.location.href.toString()

const src = `${
  domain || 'https://recosante-widget.netlify.app'
}/?size=${size}&background=${background}&source=${source}`

const iframe = document.createElement('iframe')

const iframeAttributes = {
  src,
  style: 'border: none; width: 100%; display: block; margin: 0 auto;',
  allowfullscreen: true,
  webkitallowfullscreen: true,
  mozallowfullscreen: true,
  allow: 'geolocation',
}
for (var key in iframeAttributes) {
  iframe.setAttribute(key, iframeAttributes[key])
}
iframeResize({}, iframe)

script.parentNode.insertBefore(iframe, script)
