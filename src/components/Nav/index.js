import React from "react";

function Nav() {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      name: "portraits",
      description: "Portraits of people in my life",
    },
    {
      name: "food",
      description: "Delicious Delicaies",
    },
    {
      name: "landscape",
      description: "Fields, Farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  function categorySelected(name) {
    console.log(`Hello!, You clicked on ${name}`);
  }
  return (
    <header>
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            📸
          </span>
          Oh Snap!
        </a>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" href="#about">
                About me
              </a>
            </li>
            <li>
              <span>Contact</span>
            </li>

            {/* this is mapping and creating an list item for each category picture */}
            {categories.map((category) => (
              <li className="mx-1" key={category.name}>
                <span onClick={() => categorySelected(category.name)}>
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </h2>
    </header>
  );
}
export default Nav;
