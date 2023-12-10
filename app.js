let reminders = [];

function addReminder() {
    const reminderInput = document.getElementById('reminder');
    const reminderText = reminderInput.value;

    if (reminderText.trim() !== '') {
        reminders.push(reminderText);
        displayReminders();
        reminderInput.value = ''; // Clear the input field
    }
}


function displayReminders() {
    const reminderList = document.getElementById('reminder-list');
    reminderList.innerHTML = ''; // Clear the existing list

    reminders.forEach((reminder, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${reminder}`;
        reminderList.appendChild(listItem);
    });
}