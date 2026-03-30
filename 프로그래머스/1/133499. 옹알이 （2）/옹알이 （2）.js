function solution(babbling) {
    const regex = /^(aya(?!aya)|ye(?!ye)|woo(?!woo)|ma(?!ma))+$/
    return babbling.filter(word => regex.test(word)).length
}