'use strict';

class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get userName() {
        return this.#userName;
    }

    get email() {
        return this.#email;
    }

    getInfo() {
        return `ID: ${this.id}/ Name: ${this.name}/ User name: ${this.userName}/ Email: ${this.email}`;
    }
}

class Subsciber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() {
        return this.#pages;
    }

    get groups() {
        return this.#groups;
    }

    get canMonetize() {
        if(this.#canMonetize) {
            return 'Yes';
        } else {
            return 'No';
        }
    }

    getInfo() {
        return `${super.getInfo()}/ Pages: ${this.pages.join(', ')}/ Groups: ${this.groups.join(', ')}/ Can monetize: ${this.canMonetize}`;
    }
}

export {User, Subsciber};