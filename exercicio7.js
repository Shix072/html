function celsiusParaFahrenheit (celcius){
    const fahrenheit = (celcius*9) /5 + 32;
    return celcius + "ºC equivalem a " + fahrenheit.toFixed(1) + "ºF";
}

console.log(celsiusParaFahrenheit(25));