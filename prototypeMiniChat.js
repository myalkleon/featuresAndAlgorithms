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
User.prototype.sayNow = function(func, phrase) {
    let date = new Date();
    let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    func.call(this, phrase, time);
}

const user1 = new User('Jax', 'Lords');
const user2 = new User('Groa', 'Orcs');
const user3 = new User('Bob', undefined, 'gold');

user1.sayNow(chat.say, 'Hi gyus!');

setTimeout(() => {
    user2.sayNow(chat.say, 'ARRRRRR!');
}, 3000);

setTimeout(() => {
    user3.sayNow(chat.say, 'Fucking orcs!');
}, 6000);
