import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from "react";
import Axios from 'axios'
import GeminiFlash from "../assets/googleapikey.json"

export const ChatHistoryContext = createContext()

export const ChatHistoryProvider = ({ children }) => {
    const now = new Date()
    const [history, setHistory] = useState([
        {
            id: uuidv4(),
            timestamp: now,
            type: "response",
            message: "Olá seja bem vindo, para iniciar a conversa basta escrever e enviar uma mensagem!",
        }
    ])
    const [requests, setRequests] = useState([])
    const [responses, setResponses] = useState([])

    function newRequest(message) {
        const now = new Date()

        if (message.lenght <= 4) {
            return setHistory((prevHistory) => [...prevHistory, {
                id: uuidv4(),
                timestamp: now,
                type: "response",
                message: "Sua mensagem é muito curta, acrescente mais detalhes e tente novamente!",
            }])
        }

        const newRegister = {
            id: uuidv4(),
            timestamp: now,
            type: "request",
            message: message,
        }

        setRequests((prevRequests) => [...prevRequests, newRegister])
        setHistory((prevHistory) => [...prevHistory, newRegister])

        Axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
            { "contents": [{ "parts": [{ "text": message }] }] },
            { headers: { "Content-Type": "application/json", "X-goog-api-key": GeminiFlash.apikey } })
            .then((response) => {
                const now = new Date()
                const newResponse = {
                    id: uuidv4(),
                    timestamp: now,
                    type: "response",
                    message: response.data.candidates[0].content.parts[0].text,
                }
                setResponses((prevResponses) => [...prevResponses, newResponse])
                setHistory((prevHistory) => [...prevHistory, newResponse])
            }
            )



    }

    return <ChatHistoryContext.Provider value={{ setRequests, history, setHistory, newRequest }}>{children}</ChatHistoryContext.Provider>
}