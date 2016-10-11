import { RpzPage } from './app.po';

describe('rpz App', function() {
  let page: RpzPage;

  beforeEach(() => {
    page = new RpzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
