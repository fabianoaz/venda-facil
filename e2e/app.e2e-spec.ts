import { VendaFacilPage } from './app.po';

describe('venda-facil App', () => {
  let page: VendaFacilPage;

  beforeEach(() => {
    page = new VendaFacilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
