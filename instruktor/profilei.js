let name = localStorage.getItem('name') ? localStorage.getItem('name') : '';
        let surname = localStorage.getItem('surname') ? localStorage.getItem('surname') : '';
        let userType = localStorage.getItem("userType") ? localStorage.getItem('userType') : '';
      
        console.log("User Type Set:", userType);
      
        console.log(name);
        console.log(surname);
        if (name == '') {
          alert('you need to login first');
          window.location.href = "prijava.html";
        }
      
        function displayEditForm() {
          document.getElementById("editForm").style.display = "block";
        }
      
        function displayEditForm2() {
          document.getElementById("editForm2").style.display = "block";
        }
      
        function spremiFormu() {
          let regoznaka = document.getElementById("regoznaka").value;
          let vrstavozila = document.getElementById("vrstavozila").value;
          let iskustvo = document.getElementById("iskustvo").value;
          let dostupnost = document.getElementById("dostupnost").value;

          // Provjera da li su sva polja popunjena
          if (!regoznaka || !vrstavozila || !iskustvo || !dostupnost) {
            alert("Molimo popunite sva polja");
            return;
          }
      
          // Provjera da li je iskustvo brojčani tip
          if (isNaN(iskustvo)) {
            alert("Iskustvo mora biti broj");
            return;
          }
      
          localStorage.setItem("instructorregoznaka", regoznaka);
          document.getElementById("displayregoznaka").innerText = `Registracijska oznaka: ${regoznaka}`;
      
          localStorage.setItem("instructorvrstavozila", vrstavozila);
          document.getElementById("displayvrstavozila").innerText = `Vrsta vozila: ${vrstavozila}`;
      
          localStorage.setItem("instructoriskustvo", iskustvo);
          document.getElementById("displayiskustvo").innerText = `Iskustvo: ${iskustvo}`;
      
          localStorage.setItem("instructordostupnost", dostupnost);
          document.getElementById("displaydostupnost").innerText = `Dostupnost: ${dostupnost}`;
      
          document.getElementById("editForm").style.display = "none";
        }
      
        function addDriverToInstructor() {
          let instructorEmail = localStorage.getItem('email');
          let candidateEmail = document.getElementById("kandidat").value;
          let user_records = JSON.parse(localStorage.getItem("users")) || [];
          let instructorsData = user_records.find((user) => user.email === instructorEmail);
      
          if (instructorsData) {
            if (instructorsData.kandidati && instructorsData.kandidati.includes(candidateEmail)) {
              alert("Kandidat je već dodijeljen!");
            } else {
              instructorsData.kandidati = instructorsData.kandidati || [];
              instructorsData.kandidati.push(candidateEmail);
              localStorage.setItem("users", JSON.stringify(user_records));
              alert("Kandidat je dodijeljen uspješno!");
              refreshKandidatList();
            }
          } else {
            alert("Instructor data not found!");
          }
          
        }
      
        let displayKandidatElement = document.getElementById("displaykandidat");

        displayKandidatElement.addEventListener("click", function () {
          let selectedCandidatesList = displayKandidatElement.querySelectorAll("a");
          let candidateLinks = Array.from(selectedCandidatesList).map(function (candidateLink) {
            return `<a href="javascript:void(0);" onclick="${candidateLink.getAttribute('onclick')}">${candidateLink.innerHTML}</a>`;
          });
    
          displayKandidatElement.innerHTML = `Prikaz kandidata: ${candidateLinks.join("<br>") || 'Not Set'}`;
        });
    
        function viewDriverProfile(driverEmail) {
          let user_records = JSON.parse(localStorage.getItem("users")) || [];
          let driverData = user_records.find((user) => user.email === driverEmail);
      
        }
        function viewDriverProfile(driverEmail) {
          // Redirect to the driver profile page with the driver's email as a parameter
          window.location.href = `profilek.html?email=${driverEmail}`;
        }

        function Logout() {
          localStorage.removeItem('name');
          localStorage.removeItem('email');
          localStorage.removeItem('userType')
          window.location.href = "prijava.html";
        }

        