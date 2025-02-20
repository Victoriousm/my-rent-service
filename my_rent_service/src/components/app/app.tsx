import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

type AppMainPageProps ={
    rentalOffersCount: number;
}


function App({rentalOffersCount}  : AppMainPageProps): JSX.Element{
   
    return(
        <BrowserRouter>
        </BrowserRouter>
        <Route></Route>
        <Routes></Routes>
        <MainPage rentalOffersCount={rentalOffersCount}/>
        
        
    );
}

export default App;