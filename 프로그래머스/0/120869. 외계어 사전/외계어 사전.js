function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');
    
    for(let word of dic) {
        const sortedWord = [...word].sort().join('');
        if(sortedWord === sortedSpell) return 1
            
        }
return 2
}