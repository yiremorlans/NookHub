# Animal Crossing's Nook Hub: New Horizons Edition

Welcome to Nook Hub, your one-stop for all things Animal Crossing: New Horizons! Whether you're a seasoned player or just starting out, Nook Hub has got you covered with daily updates on everything from in-game events to the latest nook shopping seasonal items available for purchase.

With our handy hemisphere selection tool, you can see which fish, bugs, and sea creatures are currently available to catch in your area, based on your local date and time. And speaking of time, we'll also keep you up-to-date on the latest New Horizon villager birthdays, so you never miss a chance to celebrate with your favorite villagers.

But wait, there's more! Our "Discover Your Birthday Twin" module is a fun way to find villagers who share your special day. Who knows, you might even find your new BFF in the Animal Crossing world!

So what are you waiting for? Visit the [Nook Hub](https://yiremorlans.github.io/NookHub/) and start exploring the wonderful world of Animal Crossing: New Horizons!

![Nook Hub](https://github.com/yiremorlans/yiremorlans/blob/main/nook_hub.webp)

## Getting Started:

**Tech used:** React, JavaScript, CSS, Nookipedia API

This project was created with Vite. To get the project running on your local machine, you will need Node.js and the following installation guide to get started.

### Prerequisites

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yiremorlans/NookHub.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Sign up for your own Nookipedia API key at [Nookipedia.com](https://api.nookipedia.com/)

## Roadmap

- [x] Improve original birthday twin module
- [ ] Improve layout to accomodate more features
- [ ] Integrate Nook Hub header with user local information
    - [ ] Northern/Southern hemisphere selection tab
    - [ ] Current date and time
- [ ] Nook Shopping seasonal event items available module
- [ ] Villager birthday module
- [ ] Critter availability module for:
    - [ ] Fish
    - [ ] Bugs
    - [ ] Sea Creatures

See the [open issues](https://github.com/yiremorlans/NookHub/issues) for a full list of proposed features (and known issues).
## Optimizations

- 03/2023: The entirety of the project was rewritten in React using Vite since it went live in April 2022. The initial project idea was encapsulated into a single React component in order to scale Nook Hub to include the other features planned in the roadmap. This was a huge improvement over the original project that used HTML, CSS, and vanilla JavaScript. Additional improvements were integrated by using ES6 async await for fetch request to the Nookipedia API. 

## Lessons Learned:

 - Use the Nookipedia API to filter all villager birthdays within the New Horizons expansion for a given month and year.
 - Use useRef hook over document.querySelector to get the user date input to make API call.
 - Use useState hook to store villager object to pass to Villager component for render.
    
## Examples:
Love everything Animal Crossing related? Check out my other AC themed web app!

**Animal Crossing: New Horizons Seasons:** https://github.com/yiremorlans/acnh-seasons
