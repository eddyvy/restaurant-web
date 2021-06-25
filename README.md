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

- [Animate.css](https://animate.style/) - CDN imported in `./public/index.html`

- [React-PDF](https://www.npmjs.com/package/react-pdf)

- [moment js](https://momentjs.com/)


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

**Logic at Header.js**

```javascript
    
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


const toggleLinks = (e) => {
    const navLinks = [ ...document.getElementsByClassName('header__navlink') ]
    
    if ( e.target.className !== 'header__arrowDisplay' ) {
        e.target.className = 'header__arrowDisplay'
        navLinks.map( navLink => navLink.style.display = 'none')
    } else {
        e.target.className += ' header__arrowDisplay-clicked'
        navLinks.map( navLink => navLink.style.display = 'block')
    }
}
    
```

This code is for setting the class `.header__navlink-selected` and display it once we are at the correct page.
For this is used the hooks `useEffect` and `useLocation` of react and react-router-dom.
With useLocation the path of the page is gotten (and including condition to equal '/home' and '/') and then use it to get the navlink element.
Every navlink has the path as id.
If the path is not coincident with any navlink it just returns nothing.
`toggleLinks` displays the navbar and hides it when it is in mobile view.


**Logic at MenuPage.js**

```javascript
const { width } = useWindowDimensions()
const [numPagesArray, setNumPagesArray] = useState(null);

const onDocumentLoadSuccess = ({ numPages }) => {
    const holdingArr = []
    for (let i = 0; i < numPages; i++) {
        holdingArr.push(i + 1)
    }
    setNumPagesArray(holdingArr);
}
```

Using react-pdf as the documentation explains adding a loop to add all pages of the menu at the same time.
The loop is done thanks to useState and loading the number of pages.
A hook to detect window size is added at `hooks/useWindowDimensions.js`.
This hook returns the actual height and screen size through an event listener.
The hook original code can be found [here](https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs).
It is used to resize the PDF page of the menu.
