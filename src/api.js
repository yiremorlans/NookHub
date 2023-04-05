export const getSeasonalShopping = async () => {
  const response = await fetch(
    "https://api.nookipedia.com/nh/items?api_key=e4bd58d8-da13-4aa1-a208-dba6f628e4be"
  );
  const data = await response.json();
  const seasonalMisc = data.filter(
    (item) =>
      item.availability[0].note === "Seasonal" &&
      item.availability[0].from === "Nook Shopping"
  );
  return seasonalMisc;
};

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
