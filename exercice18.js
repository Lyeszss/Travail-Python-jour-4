fetch(`https://nominatim.openstreetmap.org/search?q=Paris&format=json`)
  .then(res => res.json())
  .then(data => fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data[0].lat}&longitude=${data[0].lon}&current_weather=true`))
  .then(res => res.json())
  .then(meteo => console.log(`Température: ${meteo.current_weather.temperature}°C, Conditions: ${meteo.current_weather.weathercode}`));
