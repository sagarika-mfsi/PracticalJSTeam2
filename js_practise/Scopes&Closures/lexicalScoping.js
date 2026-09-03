function p1() {
    let num = 10; //accessible by both childs i.e s1, s2
    console.log(str1); //ReferenceError: str1 is not defined even parent cant access the child var

    function s1() {
        let str1 = "hey from s1"; //only accessible inside s1 where it is defined(same for s2)
        console.log(num); //10
    }

    function s2() {
        console.log(num);//10  
        console.log(str1); //ReferenceError: str1 is not defined
    }
    s1();
    s2();
}
p1();
