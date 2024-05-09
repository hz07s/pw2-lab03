function days_w(day) {
    const arr_days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    
    if (day < 0 || day > 6) {
        return 'Numero de día invalido';
    }

    return arr_days[day];
}