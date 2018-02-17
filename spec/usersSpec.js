/*describe("getUsers", () => {
    "use strict";
    let usersSrv = require('../Server/services/usersSrv');
    let user = {
            "userName": "eddie",
            "password": "abc45"
        };
    it("I should get user details", (done) => {

        usersSrv.getUserDetails(user)
            .then(userDet => {
                console.log(userDet);
                expect(userDet.userName).toBeTruthy();
                expect(userDet.email).toBeTruthy();
                expect(userDet.authenticationToken ).toBeTruthy();
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
    });

});*/


describe("addNewUserToDB", () => {
    "use strict";
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    let usersSrv = require('../Server/services/usersSrv');
    let newUser = {
        "userName": "eddie3",
        "email": "Eddie.Zeltser@gmail.com",
        "password": "abc45"
    };
   /* it("it should add new user and send back token", done => {
        usersSrv.addNewUser(newUser)
            .then(data => {
                expect(data).toBeTruthy();
                done();
            })
            .catch(err => {
                console.log(err);
                done();
            })
    });*/
});
