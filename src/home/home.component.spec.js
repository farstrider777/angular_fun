import * as angular from 'angular';

describe('Home Component:', function() {
  let compile;
  let component;
  let element;
  let scope;
  beforeEach(() => {
    angular.mock.inject(($compile, $rootScope) => {
      scope = $rootScope.$new();
      compile = $compile;
      element = angular.element('<home></home>');
      component = compile(element)(scope);
      scope.$digest();
    });
  });
  it('should exist', function() {
    //console.log(component);
    expect(component.length).toEqual(1);

  });
  describe("when the user clicks make new list", () => {
    // beforeEach(() => {
    //   console.log(controller)
    //   spyOn("controller", "[makeNewList]");
    // });
    it("should create a new list component", function() {
      //console.log(component);
      //expect(controller.makeNewList).toHaveBeenCalled();
      expect(component.find(".title").length).toEqual(0);
    });
  })

});
