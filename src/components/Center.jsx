import React from "react"
import { useStore } from "../store";
import InboxWindow from "./InboxWindow"

export default function Center() {
    const { isInboxActive, setIsInboxActive } = useStore();

    return (
        <>
        <div className="min-h-full w-full border-2 border-black overflow-y-auto">
           {isInboxActive && <InboxWindow />}
        </div>
        </>
        
    )
}
