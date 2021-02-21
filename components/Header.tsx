import { useContext } from "react";
import { MenuContext } from "../ContextAPI/openMenu";

export default function Header() {
  const nav = [
    {
      name: "Home",
      id: "",
    },
    {
      name: " New",
      id: "New",
    },

    {
      name: " Shop",
      id: "Shop",
    },
    {
      name: " Featured",
      id: "Featured",
    },
    {
      name: " Contact",
      id: "Contact",
    },
  ];

  const { openMenu, setOpenMenu } = useContext(MenuContext);
  return (
    <div className="grid-container sticky top-0 border-b z-50 bg-white">
      {openMenu && (
        <div className="md:hidden  col-start-1  col-end-4">
          <div className="top-16 border-t border-b shadow-md absolute w-full  text-center  p-6 bg-white ">
            {nav.map(({ name, id }) => (
              <a href={`#${id}`} key={name}>
                <nav className="cursor-pointer navigation my-4 hover:text-purple-800">
                  {name}
                </nav>
              </a>
            ))}
          </div>
        </div>
      )}
      <header className="col-start-2 col-end-3 flex justify-between items-center py-3 ">
        <h1 className="text-3xl font-extrabold text-purple-900 hover:text-purple-800">
          <a href="#">Fruity</a>
        </h1>
        <div className="hidden md:flex ">
          {nav.map(({ id, name }) => (
            <a
              href={`#${id}`}
              className="p-4 font-semibold hover:text-purple-900"
              key={id}
            >
              {name}
            </a>
          ))}
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => {
            setOpenMenu((prev) => !prev);
            console.log(openMenu);
          }}
        >
          <box-icon name="menu-alt-right" color="purple" size="md"></box-icon>
        </div>
      </header>
    </div>
  );
}
