import logo from "./../Assets/Logo.svg";

const Footer = () => {
  return (
    <footer class="px-80">
      <hr class="my-8 border-gray-200" />
      <div class="flex flex-row-reverse mb-6">
        <p class="text-gray-500">™ © 2023 All Rights Reserved.</p>
        <img src={logo} class="h-8 mr-3" alt="Little Lemon Logo" />
      </div>
    </footer>
  );
};
export default Footer;
