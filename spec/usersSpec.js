describe("getUsers", () => {
    "use strict";
    let users = require('../Server/services/users');
    let user = [
        {
            "userName": "eddie",
            "email": "Eddie.Zeltser@gmail.com",
            "password": "123456"
        },
        {
            "userName": "eddie2",
            "email": "Eddie2.Zeltser@gmail.com",
            "password": "1234567"
        },
        {
            "userName": "eddie3",
            "email": "Eddie2.Zeltser@gmail.com",
            "password": "12345678"
        }
    ];
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    it("I should get all the users from the file", (done) => {

        users.getUsers()
            .then(data => {
                expect(data).toEqual(user);
                done();
            })
            .catch((err) => {
                console.log(err);
            });

    });
});