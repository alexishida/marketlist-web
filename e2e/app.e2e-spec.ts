import { MarketlistWebPage } from './app.po';

describe('marketlist-web App', () => {
  let page: MarketlistWebPage;

  beforeEach(() => {
    page = new MarketlistWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
