/**
 * 接口是一种能力,一种约束而已
 *
 *
 */
(function () {
    function showFullName(person) {
        return person.firstName + "_" + person.lastName;
    }
    var person = {
        firstName: 'alex',
        lastName: 'Tom'
    };
    console.log(showFullName(person));
})();
