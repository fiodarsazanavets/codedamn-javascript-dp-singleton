class SingletonObject {

    static #instance = null;
    
    data;

    static getInstance() {
        return new SingletonObject(Math.random());
    }

    constructor(data) {
        this.data = data;
    }
}

module.exports = SingletonObject;