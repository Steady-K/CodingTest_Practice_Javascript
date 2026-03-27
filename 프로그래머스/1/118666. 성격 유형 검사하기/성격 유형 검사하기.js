function solution(survey, choices) {
    const category = {
        "R" : 0,
        "T" : 0,
        "C" : 0,
        "F" : 0,
        "J" : 0,
        "M" : 0,
        "A" : 0,
        "N" : 0
    }
    let result = ''
    
    survey.forEach((e, i) => {
        const [disagree, agree] = e.split('')
        
        if(choices[i] === 7) {
            category[agree] += 3
        } else if(choices[i] === 6) {
            category[agree] += 2 
        } else if(choices[i] === 5) {
            category[agree] += 1
        } else if(choices[i] === 3) {
            category[disagree] += 1
        } else if(choices[i] === 2) {
            category[disagree] += 2
        } else if(choices[i] === 1) {
            category[disagree] += 3
        }
    })
    result += category.R >= category.T ? "R" : "T";
    result += category.C >= category.F ? "C" : "F";
    result += category.J >= category.M ? "J" : "M";
    result += category.A >= category.N ? "A" : "N";

    return result
}