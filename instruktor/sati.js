
  // Move the addLogEntry function outside the DOMContentLoaded event listener
  function addLogEntry() {
    const driverEmail = localStorage.getItem('driverEmail');
    const userType = localStorage.getItem('userType');
    const existingEntries = JSON.parse(localStorage.getItem(`drivingLog_${driverEmail}`)) || [];
    const tableBody = document.getElementById('logBody');

    if (userType === 'kandidat') {
      alert('Kandidati ne mogu dodavati evidenciju sati.');
      return;
    }

    const date = document.getElementById('date').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const hoursDriven = document.getElementById('hoursDriven').value;
    const comments = document.getElementById('comments').value;

    const newEntry = { date, startTime, endTime, hoursDriven, comments };

    const newRow = tableBody.insertRow(-1);
    const logNumberCell = newRow.insertCell(0);
    logNumberCell.textContent = existingEntries.length + 1;

    Object.values(newEntry).forEach(value => {
      const cell = newRow.insertCell();
      cell.textContent = value;
    });

    const updatedEntries = [...existingEntries, newEntry];
    localStorage.setItem(`drivingLog_${driverEmail}`, JSON.stringify(updatedEntries));

    // Clear input fields after adding the entry
    document.getElementById('date').value = '';
    document.getElementById('startTime').value = '';
    document.getElementById('endTime').value = '';
    document.getElementById('hoursDriven').value = '';
    document.getElementById('comments').value = '';
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Get the driver's email from localStorage
    const driverEmail = localStorage.getItem('driverEmail');
    const userType = localStorage.getItem('userType');

    if (userType === 'kandidat') {
      // Disable input fields for candidates
      date.disabled = true;
      startTime.disabled = true;
      endTime.disabled = true;
      hoursDriven.disabled = true;
      comments.disabled = true;
    }

    if (!userType) {
      console.error('User type not found.');
      return;
    }

    // Now you can use userType in your code
    console.log('User type:', userType);

    if (!driverEmail) {
      console.error('Driver email not found in localStorage.');
      return;
    }

    const existingEntries = JSON.parse(localStorage.getItem(`drivingLog_${driverEmail}`)) || [];
    const tableBody = document.getElementById('logBody');
    const driverNameElement = document.getElementById('driverName');

    if (!tableBody || !driverNameElement) {
      console.error('Table body or driverName element not found.');
      return;
    }

    // Populate the table with existing entries
    existingEntries.forEach((entry, index) => {
      const newRow = tableBody.insertRow(-1);
      const logNumberCell = newRow.insertCell(0);
      logNumberCell.textContent = index + 1;

      Object.values(entry).forEach(value => {
        const cell = newRow.insertCell();
        cell.textContent = value;
      });
    });

    // Display the driver's name in the header
    const driverName = getDriverName(driverEmail);
    if (driverName) {
      driverNameElement.textContent = `Driver's Name: ${driverName}`;
    }

    // Disable the "Add Entry" button for drivers
    if (userType === 'driver') {
      document.body.classList.add('driver');
    }

    window.goBack = function () {
      window.history.back();
    };

    function getDriverName(email) {
      const user_records = JSON.parse(localStorage.getItem('users')) || [];
      const driverData = user_records.find(user => user.email === email);

      return driverData ? `${driverData.name} ${driverData.surname}` : null;
    }

    function getDriverEmailFromUrl() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get('driverEmail');
    }
  });
