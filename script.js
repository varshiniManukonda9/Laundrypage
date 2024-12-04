
document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  const bookingStatusSection = document.getElementById('bookingStatus');
  const bookedService = document.getElementById('bookedService');
  const bookedName = document.getElementById('bookedName');
  const bookedDate = document.getElementById('bookedDate');
  const bookedTime = document.getElementById('bookedTime');

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('customerName').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Update booking status
    bookedName.textContent = name;
    bookedService.textContent = service.charAt(0).toUpperCase() + service.slice(1);
    bookedDate.textContent = date;
    bookedTime.textContent = time;

    // Show booking status section
    bookingStatusSection.style.display = 'block';

    // Clear form
    bookingForm.reset();
  });

  // Accept/Reject Button Event Listeners
  const acceptBtn = document.querySelector('.accept-btn');
  const rejectBtn = document.querySelector('.reject-btn');

  acceptBtn.addEventListener('click', () => {
    alert('Booking Accepted!');
  });

  rejectBtn.addEventListener('click', () => {
    alert('Booking Rejected.');
  });
});


 