const appointmentData = [
    {
        date: '2022-05-15',
        time: '10:00 AM',
        subject: 'Monthly budget review'
    },
    {
        date: '2022-05-20',
        time: '02:00 PM',
        subject: 'Water supply issue resolution'
    },
    {
        date: '2022-05-25',
        time: '10:00 AM',
        subject: 'Sewage treatment plant maintenance'
    }
];

const appointmentTable = document.getElementById('appointment-list');
const searchInput = document.getElementById('search');

function displayAppointments() {
    const filteredAppointments = appointmentData.filter(appointment =>
        appointment.subject.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    appointmentTable.innerHTML = '';

    filteredAppointments.forEach(appointment => {
        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = appointment.date;

        const timeCell = document.createElement('td');
        timeCell.textContent = appointment.time;

        const subjectCell = document.createElement('td');
        subjectCell.textContent = appointment.subject;

        row.appendChild(dateCell);
        row.appendChild(timeCell);
        row.appendChild(subjectCell);

        appointmentTable.appendChild(row);
    });
}

searchInput.addEventListener('input', displayAppointments);
displayAppointments();

document.getElementById('add-appointment').addEventListener('click', () => {
    const newAppointment = prompt('Enter the new appointment details:');

    if (newAppointment) {
        appointmentData.push({
            date: '2022-05-30',
            time: '03:00 PM',
            subject: newAppointment
        });

        displayAppointments();
    }
});