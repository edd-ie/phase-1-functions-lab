// Code your solution in this file!

//TODO: distanceFromHqInBlocks()
// Todo:  calculates distances below 42nd street
// Todo:  returns a distance in blocks
function distanceFromHqInBlocks(distance){
    let blocks;
    if (distance > 42)
        blocks = distance - 42;
    else
        blocks = 42 - distance;
    return blocks;
}


//TODO: distanceFromHqInFeet()
// Todo:  calculates distances below 42nd street
// Todo:  returns a distance in feet
function distanceFromHqInFeet(distance){
    let feet;
    if (distance > 42)
        feet = (distance - 42)*264;
    else
        feet = (42 - distance)*264;
    return feet;
}


//TODO: distanceTravelledInFeet()
// Todo: returns the distance traveled in feet
// Todo: returns a distance in feet
// Todo: returns distance when destination is below distance
function distanceTravelledInFeet(start, end){
    let feet;
    if (start > 42){
        start = (start - 42)*264;
        end = (end - 42)*264;
        feet = end - start;
    }
    else{
        start = (42 - start)*264;
        end = (42 - end)*264;
        feet = end - start;
    }
    return feet;
}


//TODO: calculatesFarePrice(start, destination)
// Todo: gives customers a free sample
// Todo: charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
// Todo: charges 25 dollars for a distance over 2000 feet
// Todo: does not allow rides over 2500 feet
function calculatesFarePrice(start, destination){
    let feet, charge;
    feet = distanceTravelledInFeet(start, destination);
    
    if (feet<=400){
        charge = 0
    }else if (feet > 400 && feet < 2000){
        charge  = (feet - 400)*0.02
    }else if(feet > 2000 && feet < 2500){
        charge = 25;
    }else{
        charge = "cannot travel that far"
    }

    return charge;
}

console.log(calculatesFarePrice(43,44))
console.log(calculatesFarePrice(34,32))
console.log(calculatesFarePrice(50,58))
console.log(calculatesFarePrice(34,24))
