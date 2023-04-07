// export const getSeasonalShopping = async () => {
//   const response = await fetch(
//     "https://api.nookipedia.com/nh/items?api_key=e4bd58d8-da13-4aa1-a208-dba6f628e4be"
//   );
//   const data = await response.json();
//   const seasonalMisc = data.filter(
//     (item) =>
//       item.availability[0].note === "Seasonal" &&
//       item.availability[0].from === "Nook Shopping"
//   );
//   return seasonalMisc;
// };

// FETCH CURRENT EVENT
export const getEvents = async () => {
  const newDate = new Date().toJSON();
  const timeIndex = newDate.indexOf("T");
  const date = newDate.slice(0, timeIndex);

  const response = await fetch(
    `https://api.nookipedia.com/nh/events?api_key=e4bd58d8-da13-4aa1-a208-dba6f628e4be&date=${date}`
  );

  const data = await response.json();
  const currentEvent = data.filter((event) => event.type === "Event");
  return currentEvent;
};

// FETCH CURRENT BIRTHDAY
export const getBirthday = async () => {
  const newDate = new Date();
  const getMonth = newDate.getMonth() + 1;
  const getDay = newDate.getDate();

  const response = await fetch(
    `https://api.nookipedia.com/villagers?api_key=e4bd58d8-da13-4aa1-a208-dba6f628e4be&birthmonth=${getMonth}&birthday=${getDay}`
  );
  const currentBday = await response.json();
  return currentBday;
};

// FETCH CURRENT FISH
export const getFish = async () => {
  const response = await fetch(
    `https://api.nookipedia.com/nh/fish?api_key=e4bd58d8-da13-4aa1-a208-dba6f628e4be`
  );
  const currentFish = await response.json();
  return currentFish;
};
