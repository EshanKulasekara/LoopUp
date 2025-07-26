import app from '@/firebase/config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function loginWithGoogle() {
    try{
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;   
        return { user, token };
    } catch(error){
        throw error;
    }
}
