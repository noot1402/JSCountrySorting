# JSCountrySorting

This project was realized during our 4th year at ESME, for our javascript class.

The goal of this project was to explore functional programming and the tools and challenges that come with it.

This code compiles many countries and their attributes in json files, and allows you to sort them by your chosen attributes.

There is also an option to pick your 'ideal country' based on settings.

To run this code, simply open the 'score.js' file.

# Examples

When launching the project, you will be prompted for ratings between 1 to 10. Our characteristics are ranked decreasingly by percentile. For examples, when prompted about how tall you would like the population of the country you will be visting, inputting a 1 will favor a shorter average height, while inputting a 10 will favor the tallest. 

Inputting a 5 will result in ignoring the prompted characteristic; we recommend you put decimals in case you don't feel strongly about one but you don't want to completely ignore it either. 

Here is an example:

![example score 1](https://user-images.githubusercontent.com/102509671/169698000-bda153e2-e15d-4bc6-b1e3-403309780376.PNG)

These results makes sense, since I mostly asked for hot countries with lower life expectancy. As you can see, some results are very close so by changing some prompted values, your top 10 list will look different. 


When you are satisfied with your top 10 list, you will be asked to pick your favorite country out of the list. Doing so, we will check in our cities database to see if there are any cities matching the country you picked. If there is, a list of cities in said country will be returned, with various informations complementing it. The cost is the estimating cost of monthly living, in USD; the temperatures are in celsius. 
Here is an example:

![example score 2](https://user-images.githubusercontent.com/102509671/169698505-dd870aea-06ad-4ab2-a51f-60e1784feb83.PNG)

Sorting implementations:

![example score 3](https://user-images.githubusercontent.com/102509671/169698752-a69560c4-51e1-4a45-b9c6-fc492df0b9dc.PNG)

This is a function that returns a top 10 of a list of countries ranked based on your selected characteristic (in this one, we chose elevation).

![example score 4](https://user-images.githubusercontent.com/102509671/169698795-7189a612-9bfb-4ccf-8aa3-68876ad1b6da.PNG)

This one returns 5 random countries based on the language you picked.


# NPM INSTALL
npm install ramda

npm install country-json

npm i table

npm i -g npm

npm i --save lodash

npm i prompt-sync

# Authors
MAJED Noor,
Leroux Nicolas
