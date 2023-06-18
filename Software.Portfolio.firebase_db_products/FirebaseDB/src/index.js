import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAkx3cLkKcGCCUYPm-hA5tgWig_LM8TUJ4",
    authDomain: "homely-treasures-products.firebaseapp.com",
    projectId: "homely-treasures-products",
    storageBucket: "homely-treasures-products.appspot.com",
    messagingSenderId: "604698973774",
    appId: "1:604698973774:web:722d41bc0b922c9024951f",
    measurementId: "G-KT3WCLQPJ6"
  };
  
// Initialize DB in Application
initializeApp(firebaseConfig);
  
//constants for Firestore DB
const db = getFirestore();
const productCollections = collection(db, 'Products');
  
  
//Obtain data from DB and Update data in real time
onSnapshot(productCollections, (snapshot) => {
  let products = []
  snapshot.docs.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id })
  })
  console.log(products);
})

//Add data to the DB
const addProductForm = document.querySelector('#addProduct')
addProductForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addDoc(productCollections, {
    productName: addProductForm.productName.value,
    productDescription: addProductForm.productDescription.value,
    productPrice: addProductForm.productPrice.value,
    productQuantity: addProductForm.productQuantity.value,
    createdAt: serverTimestamp()
  })
  .then(() =>{
    addProductForm.reset();
  })
})


//Update Data in the DB
const updateProductForm = document.querySelector('#updateProducts')
updateProductForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const productDocReference = doc(db, 'Products', updateProductForm.productId.value)
  updateDoc(productDocReference, {
    productName: updateProductForm.productName.value,
    productDescription: updateProductForm.productDescription.value,
    productPrice: updateProductForm.productPrice.value,
    productQuantity: updateProductForm.productQuantity.value,
    createdAt: serverTimestamp()
  })
  .then(() => {
    updateProductForm.reset();
  })
})

//Delete data from the DB
const deleteProductForm = document.querySelector('#deleteProduct')
deleteProductForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const productDocReference = doc(db, 'Products', deleteProductForm.productId.value)

  deleteDoc(productDocReference)
    .then(() =>{
      deleteProductForm.reset();
    })
})



