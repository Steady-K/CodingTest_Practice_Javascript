function solution(rny_string) {
    return [...rny_string].map(c => c === 'm' ? 'rn' : c === 'rn' ? 'm' : c).join('')
}