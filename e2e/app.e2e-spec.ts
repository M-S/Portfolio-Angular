import { PortfolioAppPage } from './app.po';

describe('portfolio-app App', () => {
  let page: PortfolioAppPage;

  beforeEach(() => {
    page = new PortfolioAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
