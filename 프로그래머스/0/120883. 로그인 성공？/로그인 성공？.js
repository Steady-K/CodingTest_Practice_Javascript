function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    for(let member of db) {
        if (id === member[0] && pw === member[1]) return 'login';
        if (id === member[0] && pw !== member[1]) return 'wrong pw';
    }
    return 'fail';
}