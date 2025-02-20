const Setting = {
    rentOffersCount: 312
} as const;

const AppRoute = {
    Main: '/'
    ,Login: '/login',
    Favorites:'/favorites',
    Offer:'/offer/:id'

}

const AuthorizationStatus={
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unkown: 'UNKOWN'
}

export {Setting, AppRoute, AuthorizationStatus};