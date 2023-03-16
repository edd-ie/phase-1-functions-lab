// Code your solution in this file!

//TODO: distanceFromHqInBlocks()
// Todo:  calculates distances below 42nd street
// Todo:  returns a distance in blocks
function distanceFromHqInBlocks(distance){
    if (distance > 42)
        return (distance - 42);
    else
        return (42 - distance);
}


//TODO: distanceFromHqInFeet()
// Todo:  calculates distances below 42nd street
// Todo:  returns a distance in feet
function distanceFromHqInFeet(distance){
    return (distanceFromHqInBlocks(distance) *264);
}


//TODO: distanceTravelledInFeet()
// Todo: returns the distance traveled in feet
// Todo: returns a distance in feet
// Todo: returns distance when destination is below distance
function distanceTravelledInFeet(start, end){
    return (distanceFromHqInFeet(end) - distanceFromHqInFeet(start));
}


//TODO: calculatesFarePrice(start, destination)
// Todo: gives customers a free sample
// Todo: charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
// Todo: charges 25 dollars for a distance over 2000 feet
// Todo: does not allow rides over 2500 feet
function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination);
    
    if (feet<=400){
        return 0
    }else if (feet > 400 && feet < 2000){
        return ((feet - 400)*0.02)
    }else if(feet > 2000 && feet < 2500){
        return 25;
    }else{
        return ("cannot travel that far")
    }
}
