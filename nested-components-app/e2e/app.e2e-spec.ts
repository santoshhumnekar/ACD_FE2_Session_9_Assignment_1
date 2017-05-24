import { NestedComponentsAppPage } from './app.po';

describe('nested-components-app App', function() {
  let page: NestedComponentsAppPage;

  beforeEach(() => {
    page = new NestedComponentsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
