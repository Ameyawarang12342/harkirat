import { atom, selector } from 'recoil';

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobAtom = atom({
    key: "jobAtom",
    default: 0
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
})


export const meAtom = atom({
    key: "meAtom",
    default: 0
})

export const allNotificationsSelector = selector({
    key: "allNotificationsSelector",
    get: ({get}) => {
        const totalN = get(networkAtom) + get(jobAtom) + get(messagingAtom) + get(notificationsAtom);
        return totalN;
    }
})




