
export default class Page {
  
    open (path) {
        return browser.url(`https://www.bbc.co.uk/${path}`)
    }
}
