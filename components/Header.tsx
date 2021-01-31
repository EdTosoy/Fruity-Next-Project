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
  return (
    <div className="grid-container sticky top-0 border-b z-50 bg-white">
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
        <div className="md:hidden">
          <box-icon name="menu-alt-right" color="purple" size="md"></box-icon>
        </div>
      </header>
    </div>
  );
}
