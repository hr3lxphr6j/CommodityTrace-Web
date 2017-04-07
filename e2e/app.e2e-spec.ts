import { CommodityTraceWebPage } from './app.po';

describe('commodity-trace-web App', () => {
  let page: CommodityTraceWebPage;

  beforeEach(() => {
    page = new CommodityTraceWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
