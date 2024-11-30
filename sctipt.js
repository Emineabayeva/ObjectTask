


const telebeler = [{
    name: "Emine",
    surname: "Abayeva",
    age: 20,
    isEducated: true
}, {
    name: "Ali",
    surname: "Mammadov",
    age: 21,
    isEducated: true
}, {
    name: "Leyla",
    surname: "Huseynova",
    age: 19,
    isEducated: true
}, {
    name: "Rashid",
    surname: "Aliyev",
    age: 23,
    isEducated: false
}, {
    name: "Aysel",
    surname: "Taghizade",
    age: 22,
    isEducated: true
}, {
    name: "Kamran",
    surname: "Valiyev",
    age: 20,
    isEducated: false
}]

const tbody = document.querySelector("#telebeler")

telebeler.forEach(function (telebe) {
    tbody.innerHTML += ` <td>${telebe.name}</td>
                <td>${telebe.surname}</td>
                <td>${telebe.age}</td>
                <td>${telebe.isEducated ? "Yes" : "No"}</td>`
});