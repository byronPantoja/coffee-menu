function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="flex text-white justify-center pt-20 pb-3">
      The time is {new Date().toLocaleTimeString()}. We are open. Come on over!
    </footer>
  );
}

export default Footer;
