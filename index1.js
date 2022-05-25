const increment = (function() 
{
    return function increment(number, value = 1) //instead of  value returning zero, we can assign 1 to be the default parameter if no parameter is logged to the console, so the NaN is no longer returned in the console. 
        {
            return number + value;
        };
}) ();

console.log(increment(5, 2));
console.log(increment(5));