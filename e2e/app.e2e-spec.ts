import { NgBInjectorPage } from './app.po';

describe('ng-b-injector App', function() {
  let page: NgBInjectorPage;

  beforeEach(() => {
    page = new NgBInjectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
