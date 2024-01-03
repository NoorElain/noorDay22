var users = [{username:"user1",pass:"pass1"}];


function func(i){
    document.getElementById('table').style.marginLeft = `${-100 * i}vw`;
}
function GOTO(){
    window.location.href = "Login.html"
}
function GOTO2(){
    window.location.href = "shopping.html"
}
//4a8al bs el-alert m4 btetla3 we elcode kolo s7
function quiz(){
    var yesCount = 0;
    var noCount = 0;
    for(var i = 0; i < 3; i++){
    try{
    var radio = document.querySelector(`input[name = "q${i+1}"]:checked`);
    if(radio.value == "yes"){
        yesCount++
      }
    else{
        noCount++;
    }
    }
    catch{
      alert("answer all questions");
      return false;
    } 
  }
  alert('Thanks for your feadback !');
  alert(`Yes:${yesCount} , No:${noCount}`);
}

//done
function login(){
    var user = document.getElementById('usernameID').value;
    var password = document.getElementById('passwordID').value;
    var form = document.getElementById('Login-form');
    for(i = 0; i< users.length; i++){
        if(users[i].username == user && users[i].pass == password){
            alert("Login Successfull");
            break;
        }
    else if (users[i].username !== user && users[i].pass !== password)
      {
        alert("no");
        form.action.href="Login.html";
    }
      
    }
}

//done
function forget(){

    var user = document.getElementById('usernameID').value;
    var passs = document.getElementById('passwordID').value;
    var look = false;
    for(i = 0; i<users.length; i++){
        if(users[i].username == user){
           
            users[i].pass == passs;
            alert('changed successfuly');
            look =  true;
        }
        else{
            alert("error");
            look = false;
        }
    }
}
//4a8al bs bed5l 3ala el-else && m4 benafez el condation 
function signUp() {
    var username = document.getElementById('usernameID').value;
    var password = document.getElementById('passwordID').value;
    var radio = document.querySelectorAll('q1');
    var age = document.getElementById('ageID');
    var phone = document.getElementById('phoneID');
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{,8}$/;

   for(i=0; i<users.length;i++){
    if(users[i].username == username){
        alert('username id already existe');
    }
   }
    if ((username.length<5) && (username.length > 10) && ((!passwordRegex.test(password))) ) {
      alert('Username must be between 5 and 10 characters or Password must contain at least 8 characters, one special character, and one number.');
    
    }
    if((password.length==11) && (18< age <60) ){
        alert('done');
         var user = {username: username , password: password , phone: phone };
        users.push(user);
        console.log("hello " ,users);
    }
   
   
}
