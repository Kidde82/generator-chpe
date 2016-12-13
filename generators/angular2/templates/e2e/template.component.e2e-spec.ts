describe('<%= template.toUpper() %>', () => {

  beforeEach(async () => {
    return await browser.get('/<%= template.toLower() %>');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('<%= template-selector %> h2')).getText()).toEqual('<%= template.toUpper() %>');
  });

});
