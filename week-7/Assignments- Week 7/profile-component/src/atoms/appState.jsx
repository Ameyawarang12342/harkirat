import { atom } from 'recoil';

export const profileAtom = atom({
    key: 'profileAtom',
    default: {
        email: "",
        name: "",
        age: "",
        location: "", 
        likesCount: "", 
        postsCount: "", 
        photo: "",
    }
})