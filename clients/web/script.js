document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const affirmationElement = document.getElementById('affirmation');
    const newMessageButton = document.getElementById('new-message-btn');

    async function fetchDailyMessage() {
        try {
            const response = await fetch('http://localhost:3000/api/daily-messages');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const message = await response.json();
            greetingElement.textContent = message.greeting;
            affirmationElement.textContent = message.affirmation;
        } catch (error) {
            greetingElement.textContent = 'Oops! Something went wrong.';
            affirmationElement.textContent = '';
        }
    }

    newMessageButton.addEventListener('click', fetchDailyMessage);

    // Fetch initial message when the page loads
    fetchDailyMessage();
});