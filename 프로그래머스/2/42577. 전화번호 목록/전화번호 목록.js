function solution(phone_book) {
    phone_book.sort();
    
    return !phone_book.some((num, i) => phone_book[i + 1]?.startsWith(num))
}