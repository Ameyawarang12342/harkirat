import { profileAtom } from "../atoms/appState";
import { useRecoilValue } from 'recoil';

export const Profile = () => {
    const profile = useRecoilValue(profileAtom);
    return(
        <div>
            {JSON.stringify(profile)}
        </div>
    );
};