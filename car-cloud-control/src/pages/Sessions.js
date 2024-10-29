import React from 'react';
import {Session} from "../store/Item";
import SessionItem from "../components/SessionItem";

const Sessions = () => {
    return (
        <main className="App" style={{ minHeight: "50vh" }}>
            <div className="block-device" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', columnGap: '45px' }}>
                {
                    Session.map(props => <SessionItem key={props.id} props={props}/>)
                }
            </div>
        </main>
    );
};

export default Sessions;