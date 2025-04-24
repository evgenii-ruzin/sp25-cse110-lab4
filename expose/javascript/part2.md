1. since variable 'i', used in for loop, was assigned using 'var' it is visible outside the loop, so line 12 will output the final value of i, which is 3
2. same as in Q1, 'discountedPrice' was assigned using 'var', so it is visible outside the for loop, so line 13 will output the last discountedPrice value, which is 150
3. 'finalPrice' was outside the for loop, so it is accessible fine outside of it. Since its last value is 150, line 14 will output it.
4. function returns the array of discounted prices. It works fine because a) discounted was assigned at the same level as return statement and b) it was assigned using 'var', so it would be visible anywhere in this function
5. since 'i' was assigned using 'let', it won't be visible outside the for loop, so line 12 will throw an error because it tries to access the undefined variabel
6. same as in Q5, 'discountedPrice' was assigned using 'let', so it's not visible outside the for loop, so line 13 will throw an error because it tries to access the undefined variable
7. despite being assigned using 'let', finalPrice was assigned at the same level as line 14, so line 14 will output the last value of finalPrice, which is 150
8. function returns the array of discounted prices. It works fine because 'discounted' was assigned at the same level as return statement
9. since 'i' was assigned using 'let', it won't be visible outside the for loop, so line 11 will throw an error because it tries to access the undefined variabel
10. line 12 will output value of 'length', which is 3. It works fine because there is no attempts of changing const variables (includeing length) in the code. 
11. function returns the array of discounted prices. It works fine because assigning array with 'const' doesn't prohibit pushit to this array, so no errors will be thrown
12. 
A. student.name
B. student["Grad Year"]
C. student.greeting()
D. student["Favorite Teacher"].name
E. student.courseLoad[0]
13. 
A. '32' | because number 2 converts to string '2', then concatenation happens
B. 1 | because '3' converts to number 3, then subtraction happens
C. 3 | null converts to number 0, then addition happens 
D. '3null' | null converts to string 'null', then concatenation happens
E. 4 | true converts to number 1, then addition happens
F. 0 | both false and null convert to number 0, then addition happens
G. '3undefined' | undefined converts to string 'undefined', the concatenation happens
H. NaN | undefined converts to number NaN (not a number), then returns NaN because can't substract not a number from a number
14. 
A. true | '2' converts to number 2, then comparison happens (2 is bigger than 1 so true)
B. false | no coversion, comparison between first chars of both strings ('2' goes after '1', so '2' is bigger)
C. true | '2' converts to number 2, then comparison happens (2 = 2 so true)
D. false | === compares objects without type conversions, and since string can't be equal to number, returns false
E. false | true converts to number 1, then comparison happens (1 < 2 so false)
F. true | despite === compares objects without type conversions, one of elements of comparison converts itself (Boolean(2) -> true because any number but 0 is true), so comparison happens between two boolean values
15. == compares with type conversion, === comparest strictly without type conversion
16. in js file
17. For the given parameters, the result would be the array [2, 4, 6].
doSomething is passed to modifyArray as callback, so whenever 'callback(...)' is called in modifyArray, it simply calls doSomething. Hence, for each element of original array, we pass this element to doSomething and push returned value to new array. doSomething multiplies passed value, so newArray will have original elements * 2.
18. in js file
19. Output:
1
4
3
2