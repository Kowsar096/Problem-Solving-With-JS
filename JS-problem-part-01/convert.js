// 12 inch = 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}



const height = inchToFeet(75);
console.log(height);

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' Feet ' + inchRemaining + ' Inch.';
    return result;


}

const height2 = inchToFeet2(75);
console.log(height2);

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;

}

const kilometer = mileToKilometer(25);
console.log(kilometer);

