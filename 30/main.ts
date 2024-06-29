let users : string [] = ["admin","eric","alishba","erum","esha","mehek","tanzeela"]

for (let user of users) {
    if (user === "admin") {
        console.log("Hellow admin,would youn like to see a status report")
    } else {
        console.log(`Hellow ${user}, thank you for logging in again`)
    }
}