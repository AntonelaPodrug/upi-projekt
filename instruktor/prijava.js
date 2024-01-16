let name=localStorage.getItem('name')?localStorage.getItem('name'):''
         let surname=localStorage.getItem('surname')?localStorage.getItem('surname'):''
         let userType=localStorage.getItem('userType')?localStorage.getItem('userType'):''
        console.log(name);

        if(name!='' && userType=="instruktor")
        {
          alert('Please visit profile');
          window.location.href="profilei.html";
        }
        if(name!='' && userType=="kandidat")
        {
          alert('Please visit profile');
          window.location.href="profilek.html";
        }
        function saveData()
        {
        let email,psw;
        email=document.getElementById("email").value;

        psw=document.getElementById("psw").value;

        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        console.log(user_records)
        if(user_records.some((v)=>{return v.email==email && v.psw==psw && v.userType=="instruktor"}))
        {
          alert("Login Pass");
          let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
          let encodedEmail = encodeURIComponent(current_user.email);
          let emailWithAtSymbol = encodedEmail.replace(/%40/g, '@');  
        localStorage.setItem('name',current_user.name);
        localStorage.setItem('email',current_user.email);
        localStorage.setItem('surname',current_user.surname);
        localStorage.setItem('userType',current_user.userType);
        window.location.href = `profilei.html?email=${emailWithAtSymbol}`;
          
        } else if(user_records.some((v)=>{return v.email==email && v.psw==psw && v.userType=="kandidat"})){
          alert("Login Pass");
          let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
          let encodedEmail = encodeURIComponent(current_user.email);
          let emailWithAtSymbol = encodedEmail.replace(/%40/g, '@');
        localStorage.setItem('name',current_user.name);
        localStorage.setItem('email',current_user.email);
        localStorage.setItem('surname',current_user.surname);
        localStorage.setItem('userType',current_user.userType);
        window.location.href=`profilek.html?email=${emailWithAtSymbol}`;
        }
        else
        {
          alert('Login Fail');
        }

    }