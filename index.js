/* In order to create more flexible functions, you can use 
default pararmeters. It kicks in when the argument is unspecified
or undefined. */

const increment = (function() 
{
    return function increment(number, value)
        {
            return number + value;
        };
}) ();

console.log(increment(5, 2));
console.log(increment(5));