//@ts-check

/**
 * @file index.js is the root file for this example
 * @author Alexander Eser, Bojan Calic
 * @see <a href="https://www.youtube.com/watch?v=YK-GurROGIg">Youtube Video</a>
 */

/**
 *
 * @type {string}
 */
const studentName = "Bojan Calic";

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 79.8, 70, 42];

/**
 * Object which needs to be done
 * @type {{id: number, text: string}}
 */
const todo = {
    id: 1,
    text: "Do homework",
};

/**
 * Calculating - see {@tutorial program-tutorial}
 * @param multiplicator
 * @param nr
 * @returns {string}
 */
const multiplicateBy = (multiplicator, nr) => {
    return `${multiplicator * nr}`;
};
console.log(multiplicateBy(2,2));

/**
 * Class to create a Person object
 */
class Person{
    /**
     * @param {Object} personInfo - Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name - Persons Name
         */
        this.name = personInfo.name;
        /**
         * @property {string} age - Persons Age
         */
        this.age = personInfo.age;
    }
    /**
     * @property {Function} greet - A greeting
     * @returns void
     */
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}

/**
 * See {@link Person}
 */
const person1 = new Person({
    name: "Bojan",
    age:    24
});
console.log(person1.greet());

