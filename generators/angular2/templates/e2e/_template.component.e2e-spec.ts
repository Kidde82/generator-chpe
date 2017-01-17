describe('<%= name.pascal() %>', () => {

  beforeEach(async () => {
    return await browser.get('/<%= name.kebab() %>');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('<%= selector %> h2')).getText()).toEqual('<%= name.pascal() %>');
  });

});
