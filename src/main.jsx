import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import { ChatHistoryProvider } from './contexts/ChatHistoryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatHistoryProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChatHistoryProvider>
  </StrictMode>,
)
