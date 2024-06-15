import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/PageHeaderContent";
import "./styles.scss";
import { useState } from "react";
import webDevDummy from "../../images/webDevDummy.jpg";
import { Link } from "react-router-dom";


const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: webDevDummy,
    link: "https://www.geeksforgeeks.org/30-days-of-sql-from-basic-to-advanced-level/",
  },
  {
    id: 3,
    name: "Notes App",
    link: "https://www.google.co.in/",
    image: webDevDummy,
  },
  {
    id: 2,
    name: "Supplier Design",
    image: webDevDummy,
    link: "https://www.youtube.com/",
  },
  {
    id: 2,
    name: "Todo App",
    image: webDevDummy,
    link: "https://takeuforward.org/interviews/tcs-nqt-coding-sheet-tcs-coding-questions/",
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: webDevDummy,
    link: "https://www.interviewbit.com/oops-interview-questions/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

function Portfolio() {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }
  function handleHover(index) {
    setHoveredValue(index);
  }
  console.log("==========");
  console.log(filteredValue);
  console.log("==========");

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);
  console.log(filteredItems);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="Portfolio!"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map((item) => (
            <li
              key={item.filterId}
              onClick={() => handleFilter(item.filterId)}
              className={item.filterId === filteredValue ? "active" : ""}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio_content_cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio_content_cards_item"
              key={`cardItem{item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio_content_cards_item_img-wrapper">
                <a>
                  <img src={item.image} alt="item-image" />
                </a>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <Link to={item.link}>
                        <button>Visit</button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
