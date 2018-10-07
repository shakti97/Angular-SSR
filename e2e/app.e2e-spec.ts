import { SsrPage } from './app.po';

describe('ssr App', function() {
  let page: SsrPage;

  beforeEach(() => {
    page = new SsrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
