# Nook & Cranny's Animal Crossing Birthday Twin: New Horizons Edition
There are hundreds of villagers that can be discovered and invited to live on your own island in Animal Crossing New Horizons. What if you could find out what villager is your birthday twin? Simply input you or your friend's birthday to discover who the birthday twin is. Learn specific characteristics about the villager such as their name, species, personal catchphrase, and quote!

**Link to project:** TBA

![AC Birthday twin web app](https://github.com/yiremorlans/yiremorlans/blob/main/ac-twin.webp)

## How It's Made:

**Tech used:** React, JavaScript, CSS, Nookipedia API

The Nookipedia API docs offered plenty of useful information on query parameter uses and endpoints. I used Postman to assist with obtaining the specific properties and routing I wanted to incorporate into the fetch on the client side javascript. The fetch required a lot of parsing of information, so conditional logic was elaborated on the main.js file to hone in on specific villager details. Basic HTML and CSS components were added to show specific villager information on the page. Once the desired characteristics had their own components on the page, there was styling added to ensure a consistent theme across the page.

## Optimizations

Inputs were made larger and arranged to improve stlying of the components on the page. Previous fetch script included villagers all across Animal Crossing games, so an update was made to parse through New Horizons villagers only. Features I would like to incorporate in the future is a calender view of the villagers for each month. There is also possibility to include AC world specific features like fish, bugs, and events filtered by month or season.

## Lessons Learned:

Parsing through the fetch results from the birthday and month query parameters was the most difficult task. Given the mass amount of information that is retrieved with each fetch request, I had to incorporate for..in loop and javascript methods such as .include to help parse for New Horizons villagers only. 

## Examples:
Love everything Animal Crossing related? Check out my other AC themed web app!

**Animal Crossing: New Horizons Seasons:** https://github.com/yiremorlans/acnh-seasons

