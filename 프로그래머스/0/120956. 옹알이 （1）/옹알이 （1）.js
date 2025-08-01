function solution(babbling) {
    const words = ['aya', 'ye', 'woo', 'ma']
    let count = 0;
    
    babbling.forEach(bab => {
        let temp = bab;
        
        for(let i = 0; i < words.length; i++) {
            if(temp.includes(words[i] + words[i])) return;
            temp = temp.split(words[i]).join(' ')
        }
        
        if(temp.trim() === '') count++
    })
    return count;
}