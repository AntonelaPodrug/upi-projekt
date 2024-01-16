function redirectToDrivingLog() {
    const urlParams = new URLSearchParams(window.location.search);
    const driverEmail = urlParams.get('email');

    if (!driverEmail) {
      alert('Driver email not found in URL parameters.');
      return;
    }

    localStorage.setItem('driverEmail', driverEmail);
    window.location.href = 'sati.html';
  }
  function redirectToChat() {
    const urlParams = new URLSearchParams(window.location.search);
    const driverEmail = urlParams.get('email');
    
    if (!driverEmail) {
      alert('User email not found in localStorage.');
      return;
    }

    window.location.href = `chat/chat.html?email=${driverEmail}`;
  }


  function displayEditForm() {
    document.getElementById("editForm3").style.display = "block";
  }

  function spremiFormu() {
    let kategorija = document.getElementById("kategorija").value;

    // Provjera da li je kategorija unesena
    if (!kategorija) {
      alert("Molimo unesite kategoriju");
      return;
    }

    // Provjera da li je kategorija string
    if (typeof kategorija !== 'string') {
      alert("Kategorija mora biti string");
      return;
    }
    localStorage.setItem("kandidatkategorija", kategorija);
    document.getElementById("displaykategorija").innerText = `Kategorija: ${kategorija}`;
    document.getElementById("editForm3").style.display = "none";
  
    // Dohvatite podatke o kandidatu iz localStorage
    let user_records = JSON.parse(localStorage.getItem("users")) || [];
    let candidateData = user_records.find((user) => user.email === candidateEmail);
  
    // Update kandidatkategorija in candidateData
    candidateData.kandidatkategorija = kategorija;
  
    // Update localStorage with the modified user_records
    localStorage.setItem("users", JSON.stringify(user_records));
  }
  

  let name = localStorage.getItem('name') ? localStorage.getItem('name') : '';
  let surname = localStorage.getItem('surname') ? localStorage.getItem('surname') : '';
  let userType = localStorage.getItem("userType") ? localStorage.getItem('userType') : '';

  console.log("User Type Set:", userType);
  console.log(name);
  console.log(surname);

  if (name == '') {
    alert('U need to login first');
    window.location.href = "prijava.html";
  }

  function Logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('userType')
    window.location.href = "prijava.html";
  }

  const urlParams = new URLSearchParams(window.location.search);
const candidateEmail = urlParams.get('email');

// Dohvatite podatke o kandidatu iz localStorage
let user_records = JSON.parse(localStorage.getItem("users")) || [];
let candidateData = user_records.find((user) => user.email === candidateEmail);


// Prikaz podataka o kandidatu na stranici
if (candidateData) {
document.getElementById("displayname").innerText = `Ime: ${candidateData.name}`;
document.getElementById("displaysurname").innerText = `Prezime: ${candidateData.surname}`;
document.getElementById("displayemail").innerText = `Email: ${candidateData.email}`;
document.getElementById("displayuserType").innerText = `Tip korisnika: ${candidateData.userType}`;
document.getElementById("displayimeinstruktora").innerText = `Ime instruktora: ${candidateData.imeinstruktora || 'Nije postavljeno'}`;
document.getElementById("displaykategorija").innerText = `Kategorija: ${candidateData.kandidatkategorija || 'Nije postavljeno'}`;
} else {
alert("Podaci o kandidatu nisu pronađeni.");
}