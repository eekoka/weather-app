function getWeatherIconUrl(vcIconName) {
/**
 * Maps Visual Crossing icon names to OpenWeatherMap icon codes.
 * Visual Crossing provides descriptive names (e.g., 'rain', 'partly-cloudy-day').
 * OpenWeatherMap requires codes (e.g., '10d', '02d').
 */
    const iconMapping = {
        'clear-day': '01d',
        'clear-night': '01n',
        'partly-cloudy-day': '02d',
        'partly-cloudy-night': '02n',
        'cloudy': '03d',
        'fog': '50d',
        'wind': '50d', // OWM doesn't have a specific 'wind' icon; 'mist' is a common fallback
        'rain': '10d',
        'showers-day': '09d',
        'showers-night': '09n',
        'thunder-rain': '11d',
        'thunder-showers-day': '11d',
        'thunder-showers-night': '11d',
        'snow': '13d',
        'snow-showers-day': '13d',
        'snow-showers-night': '13d',
        'sleet': '13d',
        'hail': '13d'
    };

    // Default to '01d' (clear day) if the icon name isn't found
    const owmCode = iconMapping[vcIconName] || '01d';

    // Construct the OWM URL (using @2x for high resolution)
    return 'https://openweathermap.org/img/wn/' + owmCode + '@2x.png';
}

export {getWeatherIconUrl};