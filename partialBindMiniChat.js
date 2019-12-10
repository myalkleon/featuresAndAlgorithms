'use strict'
const chat = {
    say(nickname, clan = 'neutral', phrase) {
        let time = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
        console.log(`[${time}] ${nickname} (${clan}): ${phrase}!`);
    }
};

function partialBind(func, ...argsBound) {
    return function(...args) {
        return func.call(this, ...argsBound, ...args);
    }
}

const user1 = {
    nickname: 'Jax',
    clan: 'Lords',
};

const user2 = {
    nickname: 'Groa',
    clan: 'Orcs',
}

user1.sayNow = partialBind(chat.say, user1.nickname, user1.clan);
user2.sayNow = partialBind(chat.say, user2.nickname, user2.clan);

user1.sayNow('Hi gyus!');
setTimeout(() => {
    user2.sayNow('ARRRRRR!');
}, 2000);
