function saveData() {
    let name, surname, email, psw, userType;
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    email = document.getElementById("email").value;
    psw = document.getElementById("psw").value;
    userType = document.getElementById("userType").value;
  
    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    // Provjera da li su sva polja popunjena
    if (!name || !surname || !email || !psw || !userType) {
          alert("Molimo popunite sva polja");
          return;
      }

      // Provjera da li je ime ispravno
      if (!/^[a-zA-Z]+$/.test(name)) {
          alert("Neispravno ime");
      return;
      }

      // Provjera da li je prezime ispravno
      if (!/^[a-zA-Z]+$/.test(surname)) {
          alert("Neispravno prezime");
      return;
      }
      // Provjera da li je email ispravan
      if (!/\S+@\S+\.\S+/.test(email)) {
          alert("Neispravan email format");
          return;
      }

      // Provjera dužine lozinke
      if (psw.length < 8) {
          alert("Lozinka mora imati najmanje 8 znakova");
          return;
      }
    
  
    if (user_records.some((v) => v.email == email)) {
      alert("Duplicate data");
    } else {
      user_records.push({
        name: name,
        surname: surname,
        email: email,
        psw: psw,
        userType: userType, // Add user type to the user data
      });
      localStorage.setItem("users", JSON.stringify(user_records));
      localStorage.setItem("userType", userType);
      console.log("User Type Set:", userType);

      alert("Uspješna registracija!");
     

    }
  }
  module.exports = { saveData };