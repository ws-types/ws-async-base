# Asyncable class base : Delay in your custom class as sync-syntax is enabled.

install this package:
```npm
npm install ws-async-base
```

## Use it
First, make extends for your custom class:
```typescript
export class MyClass extends AsyncClassBase {
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

It's easy.