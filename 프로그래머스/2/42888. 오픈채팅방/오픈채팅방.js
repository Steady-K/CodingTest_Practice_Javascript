function solution(record) {
    const userMap = {};
    const actions = [];
    
    for ( let line of record) {
        const [action, uid, nicname] = line.split(" ");
        
        if (action === "Enter") {
            userMap[uid] = nicname;
            actions.push({uid, type: "Enter"});
        } else if (action === "Leave") {
            actions.push({uid, type: "Leave"});
        } else if (action === "Change") {
            userMap[uid] = nicname;
        }
    }
    
    return actions.map(({ uid, type }) => {
        const nicname = userMap[uid];
        if (type === "Enter") {
            return `${nicname}님이 들어왔습니다.`;
        } else {
            return `${nicname}님이 나갔습니다.`
        }
    })
}