
let page;
afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {    
    page = await browser.newPage();
    await page.setDefaultNavigationTimeout(60000);
    await page.goto('https://github.com/team', {timeout: 60000});
  });  
  
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  });
});
test("The page featurers title", async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(60000);
  await page.goto("https://github.com/features");
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Features | GitHub · GitHub');
})
test("The page enterprise title", async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(60000);
  await page.goto("https://github.com/enterprise");
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Enterprise · A smarter way to work together · GitHub');
})
test("The page pricing title", async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(60000);
  await page.goto("https://github.com/pricing");
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Pricing · Plans for every developer · GitHub');
})
