import React from 'react';
import {Device} from "../store/Item";
import DeviceItem from "../components/DeviceItem";

const Devices = () => {
    return (
        <main className="App" style={{ minHeight: '50vh' }}>
            <div className="block-device">
                {
                    Device.map(props => <DeviceItem key={props.id} props={props}/>)
                }
            </div>
        </main>
    );
};

export default Devices;