const height = [65, 66, 68, 72, 78, 60];

function getMax(number){
    let max =number[0];
    for(const num of number){
        
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(height);
console.log('max value is: ', max);