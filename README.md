# Asyncable class base : Delay in your custom class as sync-syntax is enabled.
[![Build Status](https://travis-ci.org/ws-types/ws-async-base.svg?branch=master)](https://travis-ci.org/ws-types/ws-async-base)

install this package:
```npm
npm install ws-async-base
```

## Use it
First, make extends for your custom class:
```typescript
export class MyClass extends AsyncableClassBase {
    // ......
}
```
Then, you and wait in your code like this:
```typescript
testFuct = async () => {
    //  DO work 01
    await this.Delay(50);
    // DO work 02 ......
}
```
Or you and wait in your code like this:
```typescript
testFuct = async () => {
    await this.DoAndWait(()=>{
        console.log('I am your father!');
    }, 5000);
    console.log('hhhhhh');
}

testFuct = async () => {
    await this.WaitAndDo(()=>{
        console.log('I am your mother!');
    }, 5000);
    console.log('hhhhhh');
}
```

It's easy.