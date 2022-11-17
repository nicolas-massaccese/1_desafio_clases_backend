class User {

    constructor (name, surname, books, pets){
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    }

    getFullName () {

        return `${this.name} ${this.surname}`;
    }

    addPet (newPetName) {

        this.pets.push(newPetName)
    }

    countPets () {

        return this.pets.length
    }

    addBook (name, author) {

        let newBook = {nombre: name, autor: author}
        this.books.push(newBook)
    }

    getBookNames () {

        let bookNames = []
        this.books.forEach(element => {

            bookNames.push(element.nombre)
            
        });

        return bookNames        
    }

}

const user = new User ('Nicolás', 'Massaccese',  [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}], ['perro', 'gato'] )

user.getFullName();
console.log(user.getFullName());
user.getBookNames();
console.log(user.getBookNames());

console.log(user.countPets());
user.addPet('loro');
console.log(user.pets);
console.log(user.countPets());

user.addBook('La Metamorfosis', 'Kafka');
console.log(user.books);