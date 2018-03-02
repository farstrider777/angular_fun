describe('List Component', function() {
  let compile;
  let component;
  let element;
  let scope;
  beforeEach(() => {
    angular.mock.inject(($compile, $rootScope) => {
      scope = $rootScope.$new();
      compile = $compile;
      element = angular.element('<list></list>');
      component = compile(element)(scope);
      scope.$digest();
    });
  });
  it('should exist', function() {
    expect(angular.toJson(component)).toEqual('{"0":{"ng339":7},"length":1}');
  });
});
