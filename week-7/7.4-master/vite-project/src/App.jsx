import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { allNotificationsSelector, jobAtom, meAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'

function App() {
  /**
   * We can use useState like the one in below to store the data for these buttons. But instead of that 
   * we're gonna use recoil and use atoms.
      const [count, setCount] = useState(0)
   * 
   */

  return(
    <RecoilRoot>
      <MainApp />
      <NotificationUpdater />
    </RecoilRoot>
  )
}

const MainApp = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationsCount = useRecoilValue(jobAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const generalNotificationCount = useRecoilValue(notificationsAtom);
  // const profileNotificationCount = useRecoilValue(meAtom);
  // Here, we used recoil 'selector' replacing the ugly approach since the 'totalNotificationsCount' entirely depends on few other atoms. In the ugly approach we're not memoising the value. At the very least we can do the useMemo but selector is the more optimal/better. 
  const totalNotificationsCount = useRecoilValue(allNotificationsSelector);
  return (
    <>
        <button>Home</button>
        <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
        <button>Jobs ({jobsNotificationsCount})</button>
        <button>Messaging ({messagingNotificationCount})</button>
        <button>Notifications ({generalNotificationCount})</button>
        <button>Me ({totalNotificationsCount})</button>
    </>
  )
}

const NotificationUpdater = () => {
  const setGeneralNotificationCount = useSetRecoilState(notificationsAtom);
  return (
    <>
      <button onClick={() => {
            setGeneralNotificationCount(count => count + 1);
        }}>Manipulate Notifications</button>
    </>
  )
}

export default App
