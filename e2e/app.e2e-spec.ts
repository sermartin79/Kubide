import { KubidePage } from './app.po';

describe('kubide App', () => {
  let page: KubidePage;

  beforeEach(() => {
    page = new KubidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
