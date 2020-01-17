let groupSizes = [2, 1, 3, 3, 3, 2];

var groupThePeople = function(groupSizes) {
    const groupsMap = new Map();
    const res = [];

    for(let id = 0; id < groupSizes.length; id++) {
        const groupSizeLimit = groupSizes[id];
        let groups = groupsMap.get(groupSizeLimit);
        if (!groups) {
            groups = [];
            groupsMap.set(groupSizeLimit, groups);
        }

        let group = groups[groups.length - 1];
        if (!group || group.length === groupSizeLimit) {
            group = [];
            groups.push(group);
        }

        group.push(id);
    }  

    for(let groupSizeLimit of groupsMap.keys()) {
        const groups = groupsMap.get(groupSizeLimit);
        for(let group of groups) {
            res.push(group);
        }
    }

    return res;
};

groupThePeople(groupSizes);