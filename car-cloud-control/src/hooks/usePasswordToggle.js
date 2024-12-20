import React, {useState} from 'react';
import eye from '../components/UI/Modal/icon/eye.svg'
import eye_off from '../components/UI/Modal/icon/eye_off.svg'


const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false)
    const Icon = (
        <img src={visible ? eye_off : eye}
             onClick={() => setVisible(visible => !visible)}>
        </img>)
    const InputType = visible ? 'text' : 'password';

    return [InputType, Icon];
};

export default usePasswordToggle;