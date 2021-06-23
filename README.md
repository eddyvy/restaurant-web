# Restaurant App

App for constructing a web for a restaurant done with React.
This repository consist of the frontend part of the project.

***Project date: June 2021***

## Commands

Install dependencies
```
npm install
```

Start in developement mode
```
npm start
```

Build for production
```
npm run build
```


## Dependencies

- [Create react app dependencies](https://create-react-app.dev/docs/getting-started)

- [React router dom](https://reactrouter.com/web/guides/quick-start)

- [Sass](https://www.npmjs.com/package/sass)


## Routes

**Public routes**

`/` -> HOME
`/menu` -> MENU
`/booking` -> BOOKING
`/order` -> ORDER
`/about` -> ABOUT
`/contact` -> CONTACT
`/auth` -> LOGIN
`/not-found` -> ERROR 404

**Private routes**

`/admin` -> AGENDA


## Code explanation

**Logic at the header**

´´´javascript
    const location = useLocation()

    useEffect(() => {

        const path = (location.pathname === routes.home) ? routes.slash : location.pathname
        
        const navLinkSelected = document.getElementById( path )

        if (!navLinkSelected) {
            return
        }

        navLinkSelected.className = 'header__navlink header__navlink-selected'

        return () => {
            navLinkSelected.className = 'header__navlink'
        }

    }, [location])
´´´

This code is for setting the class `.header__navlink-selected` and display it once we are at the correct page.
For this is used the hooks `useEffect` and `useLocation` of react and react-router-dom.
With useLocation the path of the page is gotten (and including condition to equal '/home' and '/') and then use it to get the navlink element.
Every navlink has the path as id.
If the path is not coincident with any navlink it just returns nothing.

