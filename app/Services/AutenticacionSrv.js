import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";


// export const VerificarRol=(){
//   const 
// }


export const Ingresar = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("correcto ingreso", user)
      global.userIdLogin = user.uid
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });

}



export const cerrarSesion = () => {

  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("Cierre Exitoso")
  }).catch((error) => {
    // An error happened.
    console.log("Error al cerrar")
  });


}

export const CrearUsuario = async (email, password) => {

  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("usuario Creado:", user.uid)
      global.userId = user.uid
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error al crear usuario:", errorMessage)
      // ..
    });
}

export const ResetContraseña = (email) => {

  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      console.log("todo bbine")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

}