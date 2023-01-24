Hello! 

How it works:
-In this application you will find a list of Oompa Loompas sorted from 1 to 500 in 20 pages.
-As you scroll down, new pages are searched and saved in to Local Storage.
-We have a SearchBar on the right top of the web page to filter by name or profession.
-Local storage will save all your OompaLoompa pages scrolled preventing pages from being re-downloaded, this can checked on DevTools -> Network .
-On each Oompa Loompa you will see the details and local storage also save each one separately.
-Local Storage data will be reseted after 24h if you haven't come back at the link.

Technical Decisions:
UseGetOompas - For the main logic of fetching data for all pages and a single Oompa Loompa i tried to use a custom hook due the task of fetch information about pages or a single OmmpaLoompa.
including check of initial data from local storage or if i have to fetch new content.

MainView -  Here is the display of all the pages fetched from the hook.
First i tried get infinite scroll by an Intersection Observer(commented) from Window Api but i had some issues  detecting the elements intersected on the bottom of the page.
I decided touse react infinite scroll component with the versatility of its functions for flow control.
Specifically i used:
-hasMore{}, to stop scrolling by a condition.
-dataLength{}, to set the content, in this cage each page.
-next{}, to update page state and trigger searching new pages.

OompaLoompaDetail - Here if selected OompaLoompa is not on local storage then use custom hook passing the id of the selected Oompa Loompa returning the data from fetch, and setting on local storage.

