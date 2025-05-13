import {Route, Routes} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <Routes>
          <Route path = '/' element = {<HomePage />} />
          <Route path = '/auth' element = {<AuthPage />} />
      </Routes>
     
    </PageLayout>
  )
}

/**function App() {
  return <h1 style={{ color: 'black' }}>✅ React is working!</h1>
}**/



export default App
