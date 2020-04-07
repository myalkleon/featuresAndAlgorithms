let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function outputSingleLinkedList(list) {
    if(list.next !== null) {
        outputSingleLinkedList(list.next);
    }
    console.log(list.value);
}

outputSingleLinkedList(list);