// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI

 const firebaseConfig = {
    apiKey: "AIzaSyB10Ibx6Sse5yQGdm5GAUVq77pT1gZr3qw",
    authDomain: "kwitter-7df6c.firebaseapp.com",
    databaseURL: "https://kwitter-7df6c-default-rtdb.firebaseio.com",
    projectId: "kwitter-7df6c",
    storageBucket: "kwitter-7df6c.appspot.com",
    messagingSenderId: "317845299626",
    appId: "1:317845299626:web:ff2658c64fffae1af58bd3"
  };

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



