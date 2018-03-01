import * as angular from 'angular';

describe('Home Component', function() {
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
    expect(component.length).toEqual(1);
  });
  it('should add a new list when we click makeNew button', () => {
    //console.log(component.find("[data-start-list]"))
    //expect(component.find("[data-start-list]"))
  });
});
