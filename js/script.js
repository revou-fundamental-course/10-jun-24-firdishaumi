function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    if (celsius === "") {
        alert("Harap masukkan nilai Celsius");
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').textContent = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function reset() {
    document.getElementById('celsius').value = "";
    document.getElementById('fahrenheit').value = "";
    document.getElementById('calculation').textContent = "";
}

function reverse() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit === "") {
        alert("Harap masukkan nilai Fahrenheit");
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('calculation').textContent = `${fahrenheit}°F - 32) * 5/9 = ${celsius.toFixed(2)}°C`;
}
