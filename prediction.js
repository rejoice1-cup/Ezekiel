// Function to change content based on the current date and day of the week
function changeContent() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Specific start date: Friday, January 27th (2025)
    const startDate = new Date('2025-01-26'); // Change this date to match the start date
    const daysSinceStart = Math.floor((today - startDate) / (1000 * 3600 * 24));

    let predictions = document.getElementById('prediction');
    
    // Calculate what day of the week it is in terms of the days since the start date
    const cycleDay = daysSinceStart % 7; // This ensures the content repeats every 7 days

    // Set the predictions based on the day of the week (starting from Friday)
    switch (cycleDay) {
        case 0:
            predictions.innerHTML = `
                <h2>Friday Predictions:</h2>
                <p>Brazil - Paraibano: Serra Branca ECPB win</p>
                <p>International Clubs: FC 1980 Wien WIN</p>
            `;
            break;
        case 1:
            predictions.innerHTML = `
                <h2>Saturday Predictions:</h2>
                <p>Mexico - Liga MX: Deportivo Toluca FC win/draw</p>
                <p>Germany - Bundesliga: Bayern Munich WIN</p>
            `;
            break;
        case 2:
            predictions.innerHTML = `
                <h2>Sunday Predictions:</h2>
                <p>France - Ligue 1: PSG win/draw</p>
                <p>Spain - La Liga: Real Madrid WIN</p>
            `;
            break;
        case 3:
            predictions.innerHTML = `
                <h2>Monday Predictions:</h2>
                <p>Brazil - Paraibano: Pombal FC PB win</p>
                <p>Italy - Serie A: Juventus WIN</p>
            `;
            break;
        case 4:
            predictions.innerHTML = `
                <h2>Tuesday Predictions:</h2>
                <p>Mexico - Liga MX: Queretaro FC win/draw</p>
                <p>Germany - Bundesliga: Borussia Dortmund WIN</p>
            `;
            break;
        case 5:
            predictions.innerHTML = `
                <h2>Wednesday Predictions:</h2>
                <p>France - Ligue 1: Marseille WIN</p>
                <p>England - Premier League: Chelsea WIN</p>
            `;
            break;
        case 6:
            predictions.innerHTML = `
                <h2>Thursday Predictions:</h2>
                <p>Spain - La Liga: Barcelona WIN</p>
                <p>Italy - Serie A: AC Milan WIN</p>
            `;
            break;
      case  6:
            predictions.innerHTML = `<p>No predictions available.</p>`;
            break;
       case  7;
    }
}

// Call the function when the page loads
window.onload = changeContent;
