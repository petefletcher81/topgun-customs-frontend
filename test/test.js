const puppeteer = require('puppeteer');
var assert = require('assert');

describe('test puppeteer working', () => {
    it('test it', () => {
        const mybrowser = async () => {
          const browser = await puppeteer.launch({headless: false});
          const page = await browser.newPage();
          await page.goto('http://localhost:3000');
          await page.screenshot({path: 'example.png'});
          await page.waitForSelector("#root > div > div.mainLayout > div > div > div:nth-child(6) > img")
          await browser.close();
        }
    
        mybrowser();
        assert(false)
        
    });
});