document.addEventListener("DOMContentLoaded", function () {
  const temperatureInput = document.getElementById("temperature");
  const fromUnitSelect = document.getElementById("fromUnit");
  const toUnitSelect = document.getElementById("toUnit");
  const convertButton = document.getElementById("convertButton");
  const resultInput = document.getElementById("result");
  const stepsContainer = document.getElementById("conversionSteps");

  function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
      resultInput.value = "Invalid input";
      stepsContainer.textContent = "";
      return;
    }

    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    // melakukan konversi
    let convertedTemperature;
    let conversionSteps;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      convertedTemperature = (temperature * 9/5) + 32;
      conversionSteps = `Celsius value = ${temperature}°C\n`;
      conversionSteps += "Convert Celsius to Fahrenheit: F = (C * 9/5) + 32\n";
      conversionSteps += `= ${temperature} * 9/5 + 32\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}°F`;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      convertedTemperature = temperature + 273.15;
      conversionSteps = `Celsius value = ${temperature}°C\n`;
      conversionSteps += "Convert Celsius to Kelvin: K = C + 273.15\n";
      conversionSteps += `= ${temperature} + 273.15\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}K`;
    } else if (fromUnit === "celsius" && toUnit === "reamur") {
      convertedTemperature = temperature * 4/5;
      conversionSteps = `Celsius value = ${temperature}°C\n`;
      conversionSteps += "Convert Celsius to Reamur: Re = C * 4/5\n";
      conversionSteps += `= ${temperature} * 4/5\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}°Re`;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      convertedTemperature = (temperature - 32) * 5/9;
      conversionSteps = `Fahrenheit value = ${temperature}°F\n`;
      conversionSteps += "Convert Fahrenheit to Celsius: C = (F - 32) * 5/9\n";
      conversionSteps += `= (${temperature} - 32) * 5/9\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}°C`;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      convertedTemperature = (temperature - 32) * 5/9 + 273.15;
      conversionSteps = `Fahrenheit value = ${temperature}°F\n`;
      conversionSteps += "Convert Fahrenheit to Kelvin: K = (F - 32) * 5/9 + 273.15\n";
      conversionSteps += `= (${temperature} - 32) * 5/9 + 273.15\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}K`;
    } else if (fromUnit === "fahrenheit" && toUnit === "reamur") {
      convertedTemperature = (temperature - 32) * 4/9;
      conversionSteps = `Fahrenheit value = ${temperature}°F\n`;
      conversionSteps += "Convert Fahrenheit to Reamur: Re = (F - 32) * 4/9\n";
      conversionSteps += `= (${temperature} - 32) * 4/9\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}°Re`;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      convertedTemperature = temperature - 273.15;
      conversionSteps = `Kelvin value = ${temperature}K\n`;
      conversionSteps += "Convert Kelvin to Celsius: C = K - 273.15\n";
      conversionSteps += `= ${temperature} - 273.15\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}°C`;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      convertedTemperature = (temperature - 273.15) * 9/5 + 32;
      conversionSteps = `Kelvin value = ${temperature}K\n`;
      conversionSteps += "Convert Kelvin to Fahrenheit: F = (K - 273.15) * 9/5 + 32\n";
      conversionSteps += `= (${temperature} - 273.15) * 9/5 + 32\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}°F`;
    } else if (fromUnit === "kelvin" && toUnit === "reamur") {
      convertedTemperature = (temperature - 273.15) * 4/5;
      conversionSteps = `Kelvin value = ${temperature}K\n`;
      conversionSteps += "Convert Kelvin to Reamur: Re = (K - 273.15) * 4/5\n";
      conversionSteps += `= (${temperature} - 273.15) * 4/5\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}°Re`;
    } else if (fromUnit === "reamur" && toUnit === "celsius") {
      convertedTemperature = temperature * 5/4;
      conversionSteps = `Reamur value = ${temperature}°Re\n`;
      conversionSteps += "Convert Reamur to Celsius: C = Re * 5/4\n";
      conversionSteps += `= ${temperature} * 5/4\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}°C`;
    } else if (fromUnit === "reamur" && toUnit === "fahrenheit") {
      convertedTemperature = temperature * 9/4 + 32;
      conversionSteps = `Reamur value = ${temperature}°Re\n`;
      conversionSteps += "Convert Reamur to Fahrenheit: F = Re * 9/4 + 32\n";
      conversionSteps += `= ${temperature} * 9/4 + 32\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}°F`;
    } else if (fromUnit === "reamur" && toUnit === "kelvin") {
      convertedTemperature = temperature * 5/4 + 273.15;
      conversionSteps = `Reamur value = ${temperature}°Re\n`;
      conversionSteps += "Convert Reamur to Kelvin: K = Re * 5/4 + 273.15\n";
      conversionSteps += `= ${temperature} * 5/4 + 273.15\n`;
      conversionSteps += `= ${convertedTemperature.toFixed(2)}K`;
    } else {
      
      resultInput.value = "Conversion not supported";
      conversionSteps = "Conversion not supported";
    }

    // menampilkan hasil konversi
    resultInput.value = convertedTemperature.toFixed(2);
    stepsContainer.textContent = `Conversion Steps:\n${conversionSteps}`;
  }

  // melakukan konversi ketika ditekan tombol "convert"
  convertButton.addEventListener("click", convertTemperature);
});
