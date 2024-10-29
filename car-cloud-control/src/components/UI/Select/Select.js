import React from 'react';
import Select, { components } from 'react-select'
import './style/select.sass'

const Selected = ({options}) => {

    const sortPost = (selectedOption) => {
        // для будущего функционала
    }

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <span><svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4027 0.84144L12.2079 0.689405C12.0789 0.588651 11.8709 0.590004 11.7434 0.692427L6.42636
                    4.96538L1.04105 0.76206C0.911968 0.661306 0.70399 0.662659 0.576513 0.765082L0.384224 0.919635C0.256775 1.02206 0.258101 1.18678 0.387187 1.28753L6.20102 5.82537C6.33011 5.92612 6.53808 5.92477 6.66556 5.82235L12.4057 1.20934C12.5331 1.10691 12.5318 0.942194 12.4027 0.84144Z" fill="white" stroke="white" strokeWidth="0.0175781"/></svg></span>
            </components.DropdownIndicator>
        );
    };

    return (
        <Select options={options} components={{DropdownIndicator}} onChange={sortPost} classNamePrefix='custom-select'
                placeholder={'по умолчанию'}/>
    );
};

export default Selected;