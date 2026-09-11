class Mathadd {

    static add(a, b) {
        return a + b;
    }
}

console.log(Mathadd.add(10, 20));
let obj1 = new Mathadd();
obj1.add(12,12); //error because add belongs to class not obj

//Instance → object
//Static   → class