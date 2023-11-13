// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return (Math.abs(42-block));
 }

function distanceFromHqInFeet(someValue){
    return (distanceFromHqInBlocks(someValue) * 264);
}
/*function distanceTravelledInFeet(start, destination){
    let blocks = 0;
    if (start > destination){
        blocks = start - destination;
    } else if (destination > start){
        blocks = destination - start;
    }
    return (blocks * 264);
}*/

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        let blocks = start - destination;
        return (blocks * 264);
    } else {
        return (distanceTravelledInFeet(destination, start))
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);

    switch (true){
        case distance <= 400:
            return 0;
        case distance > 400 && distance <= 2000:
            return ((distance-400) * .02);
        case distance > 2000 && distance <= 2500:
            return 25;
        case distance > 2500: 
            return ('cannot travel that far');
        }



    /*if (distance > 0 && distance <= 400){
        return 0;
    } else if (distance > 400 && distance < 2000){
        return (distance * .02);
    } else if (distance >= 2000 && distance < 2500){
        return 25;
    } else if (distance > 2500){
        return ('cannot travel that far')
    }*/
}
