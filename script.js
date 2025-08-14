// 1
function getNamesByGrade(students, grade) {
    const getGrade = (p) =>
        p >= 85 ? 5 : p >= 70 ? (p >= 85 ? 5 : 4) : p >= 60 ? 3 : 2;
    return students
        .map(s => ({ ...s, grade: getGrade(s.percent) }))
        .filter(s => s.grade === grade)
        .map(s => s.name);
}
const students = [
    { name: "Quincy", percent: 96 },
    { name: "Jason", percent: 84 },
    { name: "Alexis", percent: 100 },
    { name: "Sam", percent: 65 },
    { name: "Katie", percent: 90 },
    { name: "Anna", percent: 75 },
];
console.log(getNamesByGrade(students, 5)); // ['Quincy','Alexis','Katie']

// 2
const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const animalCount = animals.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});
console.log(animalCount);

// 3
console.log([1, 2, 3, 4, 5].map(x => x ** 2));

// 4
console.log([1, -4, 12, 0, -3, 29, -150].filter(x => x > 0).reduce((a, b) => a + b, 0));

// 5
console.log('George Raymond Richard Martin'.split(' ').map(w => w[0]).join(''));

// 6
let arr6 = [
    { name: 'John', age: 13 },
    { name: 'Mark', age: 56 },
    { name: 'Rachel', age: 45 },
    { name: 'Nate', age: 67 },
    { name: 'Jeniffer', age: 65 }
];
arr6.sort((a, b) => a.age - b.age);
console.log(arr6[arr6.length - 1].age - arr6[0].age);

// 7
let nums7 = [1, 2, 3, 4, 5, 6];
console.log({
    even: nums7.filter(x => x % 2 === 0),
    odd: nums7.filter(x => x % 2 !== 0)
});

// 8
let nums8 = [1, 2, 2, 3, 4, 4, 5];
let unique = nums8.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
console.log(unique);

// 9
let products = [
    { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
    { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
    { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
    { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
    { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
];
console.log(products.sort((a, b) => a.price - b.price)); // misol uchun price bo‘yicha

// 10
console.log(products.sort((a, b) => b.rating - a.rating)[0]);

// 11
console.log(products.sort((a, b) => a.price - b.price)[0]);

// 12
console.log(products.reduce((sum, p) => sum + p.price, 0));

// 13
console.log(products.map(p => p.name));

// 14
console.log(products.find(p => p.id === 5)?.name);

// 15
console.log(products.filter(p => p.id !== 4));

// 16
let str16 = "HelloWorld";
console.log(str16.split('').every(ch => /[a-zA-Z]/.test(ch)));

// 17
function getTruthyFalsy(arr) {
    return {
        truthy: arr.filter(Boolean),
        falsy: arr.filter(x => !x)
    };
}
console.log(getTruthyFalsy([false, 1, 10, "", null, "abdulaziz", 1.13, 0]));

// 18
console.log("Men Abdulaziz Programmerman".split(' ').map(w => w.length));

// 19
console.log("Men Abdulaziz Programmerman".split('').some(ch => ch === ' '));

// 20
console.log(Object.entries({ a: 2, b: 5, c: 7 }).map(([k, v]) => k + v));

// 21
function digitSum(n) {
    if (n < 10) return n;
    return (n % 10) + digitSum(Math.floor(n / 10));
}
console.log(digitSum(1234));

// 22, 23, 24, 25
const pupils = [
    { name: "Elbek", protcent: 95 },
    { name: "Zafar", protcent: 78 },
    { name: "Aziz", protcent: 83 },
    { name: "Jasur", protcent: 88 },
    { name: "Bobur", protcent: 66 },
    { name: "Kamron", protcent: 75 },
];
const avg = pupils.reduce((a, b) => a + b.protcent, 0) / pupils.length;
console.log(avg);

const withGrades = pupils.map(p => ({
    ...p,
    grade: p.protcent >= 90 ? 5 :
        p.protcent >= 80 ? 4 :
            p.protcent >= 70 ? 3 : 2,
    isPassed: p.protcent >= 70
}));
console.log(withGrades);

const passFailCount = withGrades.reduce((acc, cur) => {
    cur.isPassed ? acc.passed++ : acc.failed++;
    return acc;
}, { passed: 0, failed: 0 });
console.log(passFailCount);
