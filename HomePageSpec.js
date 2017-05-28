var HomePage = function() {
    this.centerStageButtons = element(by.css(".announcement-bar"));

    this.viewOnGitHubButton = this.centerStageButtons.all(by.css(".button.button-small")).get(0);
    // this.downloadButton = this.centerStageButtons.element(by.css(".btn-primary"));
    // this.designDocsButton = this.centerStageButtons.element(by.css(".btn-warning"));
};


describe('haha', function() {
    var homePage = new HomePage();

    beforeEach(function() {
        browser.get('https://angularjs.org/');
    });

    it('should have a three buttons', function() {
        expect(homePage.viewOnGitHubButton.isDisplayed()).toBe(true);
    });
});