import user_1 from '../assets/user_1.png';
import user_2 from '../assets/user_2.png';
import user_3 from '../assets/user_3.png';
import user_4 from '../assets/user_4.png';
import unknown from '../assets/unknown.png';
const getUserAvatar = (avatarURL) => {
    if (avatarURL === "user_1") return user_1;
    else if (avatarURL === "user_2") return user_2;
    else if (avatarURL === "user_3") return user_3;
    else if (avatarURL === "user_4") return user_4;
    else return unknown;
}

export default getUserAvatar;