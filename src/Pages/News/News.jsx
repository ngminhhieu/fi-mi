import React, {useEffect} from "react";
import "./news.sass";
import { Link } from "react-router-dom";
import news_list from "./data.js";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div 
        className="block_title"
        style={{
          backgroundImage: `url("${require("../../images/header/news.png")}"`
        }}
      >News</div>
      <div className="tba">TO BE ANNOUNCED</div>
      {/* <div className="news">
        <div className="news_list">
        {
          news_list.map((item, index) => (
            <div className="news_list_item">
              <div className="news_list_item_image">
                <img
                  src={item.image}
                  alt="News 1"
                />
              </div>
              <div className="news_list_item_title">
                <Link to="/news-detail/1">{item.title}</Link>
              </div>
              <div className="news_list_item_time">{item.time}</div>
              {
                item.description ? (
                  <div className="news_list_item_details">
                    <p>{item.description}</p>
                    <Link to="/news-detail/1" className="view_detail">View Detail &#62;&#62;</Link>
                  </div>
                ) : null
              }
            </div>
          ))
        }
        </div>
        <div className="news_navigation">
          <div className="news_navigation_left news_navigation_transparent news_navigation_item">
            <img
              src={require("../../images/body/news/right_end.png")}
              alt="left_end"
            />
          </div>
          <div className="news_navigation_left news_navigation_transparent news_navigation_item">
            <img src={require("../../images/body/news/right.png")} alt="left" />
          </div>
          <div className="news_navigation_item">1</div>
          <div className="news_navigation_item">2</div>
          <div className="news_navigation_item">3</div>
          <div className="news_navigation_item">4</div>
          <div className="news_navigation_item">5</div>
          <div className="news_navigation_right news_navigation_transparent news_navigation_item">
            <img src={require("../../images/body/news/right.png")} alt="right" />
          </div>
          <div className="news_navigation_right news_navigation_transparent news_navigation_item">
            <img
              src={require("../../images/body/news/right_end.png")}
              alt="right_end"
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default News;
