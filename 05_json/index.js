let userobj =
{
    username: "fadi",
    grade: 85,
    password: "pass123",
    isConnected: true,
    address: {
        country: "israel",
        city: "Kyreat Shomna",
        street: "TelHai ",
    },
    allgrades: [{ csharp: 90 }, { cpp: 70 }, 90, 100, 85]
}
let newgrade = userobj.grade + 10
userobj.grade += 10
userobj.id = 1000
let uaerobj2 = userobj
userobj.grade += 10
userobj2.grade = 0
let grade1 = userobj.grade
userobj.adress.street = ""
userobj["address"].city = "TelAviv"



let arr = [userobj, {
    username: "fadi",
    grade: 85,
    password: "pass123",
    isConnected: true,
    address: {
        country: "israel",
        city: "Kyreat Shomna",
        street: "TelHai ",
    },
    allgrades: [{ csharp: 90 }, { cpp: 70 }, 90, 100, 85]
}
]
arr[0].allgrades[1] = { cpp: 90 };
arr[1].avg = 95
let user2 = arr[1];
user2.password = "12345";