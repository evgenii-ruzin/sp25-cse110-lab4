1. "values added: 20"
2. "final result: 20"
3. var makes variable visible from outside the block it was initialized in. Such visibility can cause naming conflicts or uninteded access to information. 
4. "values added: 20"
5. Since 'result' was declared using 'let', it is not visible outside the if-else block, so line 13 tries to access undeclared variable, which throws an error
6. Since 'result' was declared using 'const', line 7 will throw an error because it tries to reassign constant variable, which is impossible. Since error was thrown on line 7, any code after this line won't be completed, so nothing is printed.
7. same as Q6 ^