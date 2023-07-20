function Footer() {
  const now = new Date().getHours();
  const openTime = 12;
  const closeTime = 4;

  console.log("Current time:", now);
  console.log("Open time:", openTime);
  console.log("Close time:", closeTime);

  let isOpen;

  if (openTime < closeTime) {
    isOpen = now >= openTime && now < closeTime;
  } else {
    isOpen = now >= openTime || now < closeTime;
  }

  console.log(isOpen);

  return (
    <footer className="flex text-white justify-center pt-20 pb-3">
      {isOpen ? (
        <p>
          The time is {new Date().toLocaleTimeString()}. We are open. Come on
          over!
        </p>
      ) : (
        <p>
          Aww, we stopped taking orders at {closeTime % 12 || 12}:00 AM. We open
          again at {openTime % 12 || 12}:00 PM!
        </p>
      )}
    </footer>
  );
}

export default Footer;
