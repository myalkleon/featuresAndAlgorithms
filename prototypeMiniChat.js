'use strict'
const chat = {
    say(phrase, time) {
        console.log(`[${time}] ${this.nickname}${(this.status === 'gold') ? ' (GOLDEN USER) ': ' '}(${this.clan}): ${phrase}!`);
    },
};

function User(nickname, clan = 'neutral', status = 'default') {
    if(!new.target) {return new User(nickname, clan)};
    this.nickname = nickname;
    this.clan = clan;
    this.status = status;
}

function sayDecorator(func) {
    return function(phrase) {
        let date = new Date();
        let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
        func.call(this, phrase, time);
    }
}

User.prototype.sayNow = sayDecorator(chat.say);

const user1 = new User('Jax', 'Lords');
const user2 = new User('Groa', 'Orcs');
const user3 = new User('Bob', undefined, 'gold');

user1.sayNow('Hi gyus!');

setTimeout(() => {
    user2.sayNow('ARRRRRR!');
}, 3000);

setTimeout(() => {
    user3.sayNow('Fucking orcs!');
}, 6000);
