# DAY 6

## Learn about Event loop in node js

--- Node.js is a single threaded language ,so if some process takes time node may halt , but thats not how node work it uses something called event loop

--- When a process does not require CPU computation and takes time in server computation then node send this process to a queue and moves to next process to a stack

--- When all processes gets over and stack gets empty then node goes to queue and execute the remaining process

