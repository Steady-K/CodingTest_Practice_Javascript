function solution(arr)
{
    const oneArr = [];
    let prev = arr[0]
    oneArr.push(prev)
    
    for(let i = 1; i < arr.length; i++) {
        if(prev !==arr[i]) {
            oneArr.push(arr[i])
            prev = arr[i]
        }
    }
    return oneArr;
}