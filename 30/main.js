var users = ["admin", "eric", "alishba", "erum", "esha", "mehek", "tanzeela"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hellow admin,would youn like to see a status report");
    }
    else {
        console.log("Hellow ".concat(user, ", thank you for logging in again"));
    }
}
