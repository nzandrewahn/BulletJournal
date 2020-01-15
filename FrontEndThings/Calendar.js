


//Declaring variables
var currenttime = new Date();
var month = currenttime.getMonth();
var year = currenttime.getFullYear();




//TESTING SHIT MAKING SURE IT WORKS
console.log(currenttime);
console.log(DaysInMonth(month,year));






// Sees how many days are in the month of any given month and year
function DaysInMonth(month,year){
    // Returns 31 days if there are 31 days in the month
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
        return 31;
    }

    // Returns 30 days if there are 30 days in the month 
    if (month == 3 || month == 5 || month == 8 || month == 10){
        return 30;
    }
    
    // Leap year math
    if (month == 1){
        if (year % 4 == 0){
            if (year % 100 == 0){
                if (year % 400 == 0){
                    return 29;
                }
                return 28;
            }
            return 29;
        }
        return 28;
    }
}

function RenderCalendar(){
    
}