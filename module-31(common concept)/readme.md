1. data types 
    1. primitive data (immutable)
        1. number
        2. string 
        3. boolean 
        4. undefined 
        
    2. non-primitive data (mutable)
        1. array 
        2. object 
        3. function 

2. js is a dynamic typed programming language 
3. different way to get null and undefined 
    1. undefined 
        1. if value is not defined 
        2. not return from function
        3. not pass an arguments as parameter value
        4. if not declare a properties in object 
        5. if array index is not exist 
    
    2. null it set by developer when anything should not exist there.
4. truthy and falsy 
    1. falsy 
        1. undefined 
        2. 0
        3. empty string ('')
        4. false
        5. null
        6. -0
        7. NaN
    2. the rest is truthy value 
5. double equal (==) and triple equal (===) 
    1. double equal (==) check only value
    2. triple equal (===) check value and type
6. implicit conversion 
    when we use double equal (==) then the it convert the value both is same is called implicit conversion
7. block scope {}
8. global scope
9. hoisting 
10. temporal dead zone (try to use the variable before declare)
11. callback function (if i want can send a function as parameter and when it call from another it calls callback function)

12. arguments pass by reference and pass by value 
    1. pass by value (as primitive data)
    2. pass by reference (not-primitive data)
13. get all arguments by arguments keyword (use spread operator to convert it as array)
14. closure (inner function call from outer function and if it store in different variable then it create it's own closure)

        function counter() {
          let count = 0;
          return function () {
            count += 1;
            console.log(count);
          };
        }

        const shaon = counter();
        // console.log(shaon)
        shaon();
        shaon();
        shaon();
        shaon();
        console.log("----------------");
        const sajjat = counter();
        sajjat();
        sajjat();
        sajjat();
        sajjat();

15. post-increment and pre-increment (+= , ++)
16. post-decrement and pre-decrement (-= , --)