function solution(n, words) {
    const usedWords = new Set();
    
    for ( let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        
        if (i > 0) {
            const prevWord = words[i - 1];
            
            if (prevWord[prevWord.length - 1] !== currentWord[0]) {
                return [(i % n) + 1, Math.floor(i / n) + 1];
            }
        }
        
        if (currentWord.length === 1 || usedWords.has(currentWord)) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        usedWords.add(currentWord);
    }
    
    return [0, 0];
}