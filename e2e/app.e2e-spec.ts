import { NgRedditPage } from './app.po';

describe('ng-reddit App', () => {
  let page: NgRedditPage;

  beforeEach(() => {
    page = new NgRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
