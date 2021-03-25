import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/database');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export default database ;  

/*  database.ref("expenses").push({
    description : "Chocolates",
    note : "My sister loves to eat chocolate so it was my job to give her some",
    amount : 350,
    createdAt: 874569
}) 


 database.ref("expenses").on("value", (snapshot) => {
    const expenses = []
    snapshot.forEach((childSnapshot) => {

        
        expenses.push({
            id : childSnapshot.key ,
            ...childSnapshot.val()
        })
    })
    console.log(expenses);
}) 

 database.ref().once("value")
    .then((snapshot) => {
        const data = snapshot.val()
        console.log(data)
    }).catch((e) => {
        console.log("Error occured: ", error)
    }) 

 database.ref().on("value", (snapshot) => {
    const data  = snapshot.val()
    console.log(`${data.name} is a guy of age ${data.age} and is currently living in ${data.location.city}`);   
})

setTimeout(() => {
    database.ref("name").set("Yash")
},5000) 
 setTimeout(() => {
    database.ref("age").set(32)
},10000)

setTimeout(() => {
    database.ref("age").set(34) 
}, 20000)

setTimeout(() => {
    database.ref().off()
}, 22000)

setTimeout(() => {
    database.ref("age").set(36)
}, 30000) 
 database.ref().set({ 
    name : "Shaurabh" ,
    age : 21 ,
    isSingle : true ,
    location : {
        city : "Kolkata" , 
        country : "India"
    }
}).then(() => {
    console.log("Data is successfully saved ")
}).catch((e) => {
    console.log("Data write failed", e)
}) 

 database.ref("age").set(22)
database.ref("location/city").set("Varanasi")  

 database.ref("attributes").set({
    height : "5.41 cm", 
    weight : "48 kg"
}).then(()=> {
    console.log("Height and weight attribute are successfully saved")
}).catch((e)=> {
    console.log("Height and weight write failed", e)
}) 

console.log("Data write request is successfully made") */