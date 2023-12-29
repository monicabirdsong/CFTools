  function showHidePromo() {
  // Get today's date and time in Eastern Time
  const now = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
  const currentTime = new Date(now);

  // Define the show and hide moments in Central Time
  const showTime = new Date('December 28, 2023 01:00:00 CST');
  const hideTime = new Date('January 5, 2024 23:59:59 CST');

  // Find the DIV with data-title="Holiday2023Promo"
  const promoDiv = document.querySelector('div[data-title="Holiday2023Promo"]');

  // Calculate the milliseconds until the show and hide times
  const showIn = showTime - currentTime;
  const hideIn = hideTime - currentTime;

  // If it's before the show time, set a timeout to show the DIV
  if (showIn > 0) {
    setTimeout(() => {
      promoDiv.style.display = 'block';
    }, showIn);
  }

  // If it's before the hide time, set a timeout to hide the DIV
  if (hideIn > 0) {
    setTimeout(() => {
      promoDiv.style.display = 'none';
    }, hideIn);
  }

  // If we're within the promo period, show the DIV immediately
  if (currentTime >= showTime && currentTime < hideTime) {
    promoDiv.style.display = 'block';
  }
}
