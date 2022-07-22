import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAOq7Kdr2uhkb0imdhbKIhm5HTGskeXAhI',
	authDomain: 'tech-ecommerce-e9714.firebaseapp.com',
	projectId: 'tech-ecommerce-e9714',
	storageBucket: 'tech-ecommerce-e9714.appspot.com',
	messagingSenderId: '810203946217',
	appId: '1:810203946217:web:8ed0c86e59e6d6d8876478',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
