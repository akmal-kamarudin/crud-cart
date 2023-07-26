// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <main className="flex flex-col items-stretch text-center justify-center px-8 lg:px-40 2xl:px-80 bg-slate-100">
          <Routes>
            <Route path="/" exact element={<Homepage />}></Route>
          </Routes>
        </main>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
