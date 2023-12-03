const personNew = {
    name: 'Alice',
    age: 30,
    isStudent: false
}

const personNew2: {name: string, age: number, isStudent: boolean} = {
    name: 'Alice',
    age: 30,
    isStudent: false
}

console.log(personNew2.isStudent);

const contactInfo = {
    email: "playwrightdemo@gmail.com",
    phone: "12345"
}

const mergedPerson = {...personNew, ...contactInfo}
console.log(mergedPerson);

type Person ={
    name: string,
    age: number
}

const alice:Person ={
    name: 'Alice',
    age: 25 
}