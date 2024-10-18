import {useState} from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    // document.body.addEventListener("click", () => {
    //     if (isShowing) {
    //         setIsShowing(false);
    //     }
    // });

    return [
        isShowing,
        toggle
    ];
};

export default useModal;