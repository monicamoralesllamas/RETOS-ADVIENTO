function countHours(year, holidays) {   
    dateHolidays = holidays.map(function(holidays){
        return holidays + year 
    });

    return dateHolidays

    }
 


//     if (year % 2===0) {
//         '29/02'  
//     else ;  {
//     year = normal;
// }



const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, es jueves. Cuenta.
// 04/01 es el 1 de abril, un sábado. No cuenta.
// 12/25 es el 25 de diciembre, un lunes. Cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año

//0 -domingo 1-lunes 2-martes 3-miercoles 4-jueves 5-viernes 6-sabado 7-domingo 