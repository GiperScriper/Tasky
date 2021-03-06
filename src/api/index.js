import db, { firebase } from '@/firebase';

const api = {
  createUser: ({ email, password }) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  saveUser: ({ uid, displayName: name }) => {
    db.ref('users')
      .child(uid)
      .set({ name });
  },
};

export default api;
