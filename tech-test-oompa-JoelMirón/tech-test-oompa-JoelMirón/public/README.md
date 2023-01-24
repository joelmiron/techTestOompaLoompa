# TECHNICAL TEST OOMPA LOOMPA🍫 BY JOEL MIRÓN 
This is a technical test meant to create an SPA displaying a cached list of Oompa Lompa items.
Those items are stored in client side once fetched, then every twenty-four hours storaged items are refreshed.

##### USED TECHNOLOGIES AND LIBRERIES📚💻:

- React.js
- Sass
- Axios
- Moment


##### RUN THIS PROJECT 🚀

- npm install
- npm start 


##### DEVELOPMENT 📝
- On render list and detail items i used a custom hook that checks if Oompa Loompa local storage exists,
in this case returns data from Local Storage with the actual date, if doesn't exists,  the data is fetched
from the Api and sets refresh date time and actual date, if time's up, data in local storaged is reseted.
- For optimize images i used react.Lazy() and intersection observer to use image only when it is on the view(only in mobile)




