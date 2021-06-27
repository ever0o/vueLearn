(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    //实例化对象
    var person = new Person('alex', 'tom');
    console.log(showFullName(person));
})();
