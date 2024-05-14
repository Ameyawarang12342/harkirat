import axios from "axios";
import { atom, selector } from "recoil";
/**
 * 'default' can't be an asynchrounous value/fn. But we can use a selector in which we can use a asynchronous fn/value.
 */
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: 'networkAtomSelector',
        get: async () => {
            const res = await axios.get('https://sum-server.100xdevs.com/notifications');
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})