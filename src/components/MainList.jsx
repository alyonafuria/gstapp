import React, { useState } from "react";
import uuid from 'react-uuid';
import InboxTab from "./InboxTab";

export default function MainList(props) {
    
    const mainListTabNames = ["wait list", "projects", "bucket list", "notes", "done"]

    return (
        <>
        <ul>
            <InboxTab />
            {mainListTabNames.map((tabname) => <li key={uuid()}>{tabname}</li>)}
        </ul>
        </>
    )
}
