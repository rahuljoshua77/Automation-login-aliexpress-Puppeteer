const puppeteer = require('puppeteer-extra');
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())
const chromeLauncher = require('chrome-launcher');

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0)
  await page.goto('https://login.aliexpress.com/express/buyer_login_new.htm')
  
  await page.setViewport({ width: 1366, height: 695 })
  
  await page.waitForSelector('.login-container > .fm-sns > .fm-sns-btns > .fm-sns-item-wrap > .google')
  await page.click('.login-container > .fm-sns > .fm-sns-btns > .fm-sns-item-wrap > .google')
  
  await page.waitForTimeout(2000);
  await page.waitForTimeout(2000);

  const pages = await browser.pages()

  await pages[2].waitForSelector('.rFrNMe #identifierId')
  await pages[2].type('.rFrNMe #identifierId', 'YOUREMAIL',{delay :20})
  await pages[2].click('.rFrNMe #identifierId')
  await pages[2].waitForSelector('.qhFLie > #identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb')
  await pages[2].click('.qhFLie > #identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb')
  await pages[2].waitForTimeout(2000);
  await pages[2].waitForSelector('#password > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
  await pages[2].click('#password > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
  await pages[2].type('#password > .aCsJod > .aXBtI > .Xb9hP > .whsOnd', 'YOURPASSWORD', {delay :20})
  
  await pages[2].waitForSelector('.qhFLie > #passwordNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb')
  await pages[2].click('.qhFLie > #passwordNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb')
  
  await pages[2].screenshot({path: 'sukses.png'});
  
})()