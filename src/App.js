import { Header } from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { ProfilePage } from "./pages/ProfilePage"
import { ChatPage } from "./pages/ChatPage"
export function App() {

  const onAddChat = (newChat) => {
    console.log('newChat', newChat)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<MainPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="chat" element={<ChatPage onAddChat={onAddChat} />} />
        </Route>
        <Route path="*" element={<h1>404 page not FOUND</h1>} />
      </Routes>
    </>
  )
}
//export default App