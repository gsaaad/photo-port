import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  // create variables to work with from props passed down from App

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  // useEffect hook to change document title at the top, same as category name
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
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
            {/* add conditional styling */}
            <li>
              <a
                data-testid="about"
                href="#about"
                onClick={() => {
                  setContactSelected(false);
                }}
              >
                About me
              </a>
            </li>
            <li>
              <span
                onClick={() => {
                  setContactSelected(true);
                }}
              >
                Contact
              </span>
            </li>

            {/* this is mapping and creating an list item for each category picture */}
            {/* {categories.map((category) => (
              <li className="mx-1" key={category.name}>

                <span onClick={() => categorySelected(category.name)}>
                  {category.name}
                </span>
              </li>
            ))} */}

            {categories.map((category) => (
              <li
                className={`mx-1 ${
                  currentCategory.name === category.name && "navActive"
                }`}
                key={category.name}
              >
                <span
                  onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                  }}
                >
                  {" "}
                  {capitalizeFirstLetter(category.name)}
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
