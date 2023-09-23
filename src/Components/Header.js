import logo from "./../Assets/Logo.svg";

const pages = [
  {
    name: "HOME",
    title: "Home",
  },
  {
    name: "ABOUT",
    title: "About",
  },
  {
    name: "MENU",
    title: "Menu",
  },
  {
    name: " RESERVATIONS",
    title: "Reservations",
  },
  {
    name: "ORDER ONLINE",
    title: "Order",
  },
  {
    name: "LOGIN",
    title: "Login",
  },
];

const Header = () => {
  const handleClick = (btn) => {
    const id = `${btn.target.id}-Section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav class="px-80 sticky top-0 z-50 bg-white">
      <div class="flex flex-wrap items-center justify-between py-5">
        <div class="flex items-center">
          <img src={logo} class="h-14" alt="Little Lemon Logo" />
        </div>
        <div>
          <ul class="font-medium flex flex-row mt-0">
            {pages.map((pages) => (
              <li>
                <button
                  class="block py-2 pl-10 text-gray-900 hover:text-tyellow"
                  onClick={handleClick}
                  id={pages.title}
                >
                  {pages.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
