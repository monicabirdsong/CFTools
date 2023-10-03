  function showHideOct2023Promo() {
  // Get today's date and time in Eastern Time
  const now = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const currentTime = new Date(now);

  // Define the show and hide moments in Eastern Time
  //const showTime = new Date('October 19, 2023 18:00:00 EST');
  //const hideTime = new Date('October 24, 2023 12:01:00 EST');

  const showTime = new Date('October 3, 2023 11:48:00 EST');
  const hideTime = new Date('October 3, 2023 11:50:00 EST');

  // Find the DIV with data-title="Oct2023Promo"
  const octPromoDiv = document.querySelector('div[data-title="Oct2023Promo"]');

  // Calculate the milliseconds until the show and hide times
  const showIn = showTime - currentTime;
  const hideIn = hideTime - currentTime;

  // If it's before the show time, set a timeout to show the DIV
  if (showIn > 0) {
    setTimeout(() => {
      octPromoDiv.style.display = 'block';
    }, showIn);
  }

  // If it's before the hide time, set a timeout to hide the DIV
  if (hideIn > 0) {
    setTimeout(() => {
      octPromoDiv.style.display = 'none';
    }, hideIn);
  }

  // If we're within the promo period, show the DIV immediately
  if (currentTime >= showTime && currentTime < hideTime) {
    octPromoDiv.style.display = 'block';
  }
}
