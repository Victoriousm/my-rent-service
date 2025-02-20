import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import Favorites from "../../pages/favorites/favorites";
import Login from "../../pages/login/login";
import Offer from "../../pages/offer/offer";
import NotFound from "../../pages/page-404/page-404";
import { PrivateRoute } from "../private-route/private-route";


type AppMainPageProps ={
    rentalOffersCount: number;
}


function App({rentalOffersCount}  : AppMainPageProps): JSX.Element{
   
    return(
        <BrowserRouter>
        <Routes>

        <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount={rentalOffersCount}/>}
            />

<Route
            path={AppRoute.Favorites}
            element={
                  <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorites/></PrivateRoute>
            }
            />
            <Route
            path={AppRoute.Login}
            element={<Login/>}
            />
            <Route
            path={AppRoute.Offer}
            element={<Offer/>}
            />
            <Route
            path="*"
            element={<NotFound/>}
            />

        </Routes>
        <Routes></Routes>
        <MainPage rentalOffersCount={rentalOffersCount}/>

        </BrowserRouter>
        
    );
}

export default App;


{/* <BrowserRouter>
        <Routes>
            <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount={rentalOffersCount}/>}
            />
            <Route
            path={AppRoute.Favorites}
            element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesPage/></PrivateRoute>
            }
            />
            <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
            />
            <Route
            path={AppRoute.Offer}
            element={<OfferPage/>}
            />
            <Route
            path="*"
            element={<NotFound/>}
            />
        </Routes>
        </BrowserRouter> */}