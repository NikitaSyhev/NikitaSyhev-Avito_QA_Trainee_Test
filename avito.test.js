//импорт глобальных функций jest
const { test, expect } = require('@jest/globals');
//импорт playwright
const { chromium } = require('playwright');

const config = {
  verbose: true,
};

module.exports = config;

describe('Testing of counter at Avito Page', ()=> {
  // переменная хранения запуска браузера
  let browser;
  //переменная хранения веб страницы
  let page;

  //метод запуска браузера и страницы: выполняется до всех методов playwright
  beforeAll(async()=> {
    browser = await chromium.launch();
  });
  beforeEach(async()=>{
    page = await browser.newPage();
    await page.goto("https://www.avito.ru/avito-care/eco-impact");
  }, 30000);
  //метод закрытия браузера и страницы:  выполняется после завершения всех методов playwright
  afterAll(async()=> {
    await browser.close();
  });

  //метод закрытия браузера и страницы:  выполняется после каждого метода
  afterEach(async()=>{
    await page.close();
  });
    //запускаем тест: 2 аргумента - название теста + логика теста
    test('Make a screenshot of Avito Page', async() =>{
      const elementOfWebPage = await page.$('#app > div > div:nth-child(3) > div > div > div > div > div:nth-child(3) > div > div.desktop-impact-items-F7T6E');
      const makeAsnapShot = await elementOfWebPage.screenshot({path: './output/pic.jpg'});
    });
});



