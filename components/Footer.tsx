export default function Footer() {
  const footerLinks = [
    {
      title: "EXTRAS",
      sub1: "Brands",
      sub2: "Gift Certificates",
      sub3: "Affiliate",
      sub4: "Specials",
      sub5: "Site Map",
    },
    {
      title: "INFORMATION",
      sub1: "About Us",
      sub2: "Privacy Policy",
      sub3: "Terms & Conditions",
      sub4: "Contact Us",
      sub5: "Site Map",
    },
    {
      title: "MY ACCOUNT",
      sub1: "My Account",
      sub2: "Order History",
      sub3: "Wish List",
      sub4: "Newsletter",
      sub5: "Returns",
    },
    {
      title: "CONTACT US",
      sub1: "43 Dream House, Dreammy street, 7131 Dreamville, USA",
      sub2: "company@gmail.com",
      sub3: "456-456-4512",
      sub4: "Dream City, USA",
      sub5: "",
    },
  ];
  return (
    <footer className="grid-container">
      <div className="col-start-2 col-end-3 grid grid-cols-2 md:grid-cols-4 pt-20 pb-10 border-t">
        {footerLinks.map(({ title, sub1, sub2, sub3, sub4, sub5 }) => (
          <div className="mb-5">
            <h1 className="text-xl font-semibold mb-2">{title}</h1>
            <p className="text-gray-600 hover:text-pink-500 cursor-pointer">
              {sub1}
            </p>
            <p className="text-gray-600 hover:text-pink-500 cursor-pointer">
              {sub2}
            </p>
            <p className="text-gray-600 hover:text-pink-500 cursor-pointer">
              {sub3}
            </p>
            <p className="text-gray-600 hover:text-pink-500 cursor-pointer">
              {sub4}
            </p>
            <p className="text-gray-600 hover:text-pink-500 cursor-pointer">
              {sub5}
            </p>
          </div>
        ))}
        <p className="text-center text-sm text-gray-600 col-span-full"> Copy Right© Fruity 2021</p>
      </div>
    </footer>
  );
}
