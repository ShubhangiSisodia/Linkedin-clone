<script setup lang="ts">
import TheButton from '@/components/TheButton.vue'

import { firebaseAuth } from '@/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const provider = new GoogleAuthProvider()

const signupWithGoogle = () => {
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      // The signed-in user info.
      const user = result.user
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)

      // ...
    })
}
</script>

<template>
  <main>
    <TheButton @click="signupWithGoogle"> Sign Up with google </TheButton>
  </main>
</template>
