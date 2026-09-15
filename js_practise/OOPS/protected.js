class Parent {
    constructor() {
        this._protectedData = "Shared with kids";
    }
}

class Child extends Parent {
    checkProtected() {
        return this._protectedData; // Works! Inherited the protected property in subclass.
    }
}

const instance = new Parent();
console.log(instance._protectedData); // "Shared with kids"
