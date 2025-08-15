import { createContext, useState } from "react";

export const ChatHistoryContext = createContext()

export const ChatHistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([
        {
            id: 1,
            timestamp: "asdadad",
            type: "request",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam dolorum, optio obcaecati quae minus quia eligendi tenetur nesciunt hic officia tempora sint labore ipsa quas dolores et illo laborum."
        },
        {
            id: 2,
            timestamp: "asdadad",
            type: "response",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam dolorum, optio obcaecati quae minus quia eligendi tenetur nesciunt hic officia tempora sint labore ipsa quas dolores et illo laborum."
        },
        {
            id: 3,
            timestamp: "asdadad",
            type: "request",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam dolorum, optio obcaecati quae minus quia eligendi tenetur nesciunt hic officia tempora sint labore ipsa quas dolores et illo laborum."
        },
        {
            id: 4,
            timestamp: "asdadad",
            type: "response",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam dolorum, optio obcaecati quae minus quia eligendi tenetur nesciunt hic officia tempora sint labore ipsa quas dolores et illo laborum."
        },
        {
            id: 5,
            timestamp: "asdadad",
            type: "request",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam dolorum, optio obcaecati quae minus quia eligendi tenetur nesciunt hic officia tempora sint labore ipsa quas dolores et illo laborum."
        },
        {
            id: 6,
            timestamp: "asdadad",
            type: "response",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam dolorum, optio obcaecati quae minus quia eligendi tenetur nesciunt hic officia tempora sint labore ipsa quas dolores et illo laborum."
        },

    ])
    const [requests, setRequests] = useState([])

    return <ChatHistoryContext.Provider value={{ setRequests, history, setHistory }}>{children}</ChatHistoryContext.Provider>
}