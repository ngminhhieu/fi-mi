import React from "react";
import "./news.sass";

const News = () => {
  return (
    <>
      <div className="block_title">News</div>
      <div className="news">
        <div className="news_list">
          <div className="news_list_item">
            <div className="news_list_item_image">
              <img
                src={require("../../images/body/news/news_1.png")}
                alt="News 1"
              />
            </div>
            <div className="news_list_item_title">Newsletter No.1</div>
            <div className="news_list_item_time">26th Feb 2020</div>
            <div className="news_list_item_details">
              <p>
                The first issue of 5G-Enhance newsletter has been released. The
                5G-Enhance newsletters will keep you updated with the latest
                project's news and achievements. 5G-Enhance_newsletter_No1
              </p>
              <a href="#abc" className="view_detail">View Detail &#62;&#62;</a>
            </div>
          </div>
          <div className="news_list_item">
            <div className="news_list_item_image">
              <img
                src={require("../../images/body/news/news_2.png")}
                alt="News 2"
              />
            </div>
            <div className="news_list_item_title">EU JP Workshop</div>
            <div className="news_list_item_time">26th Feb 2020</div>
          </div>
          <div className="news_list_item">
            <div className="news_list_item_image">
              <img
                src={require("../../images/body/news/news_3.png")}
                alt="News 3"
              />
            </div>
            <div className="news_list_item_title">
              The 6th IEEE WCNC International Workshop on Smart Spectrum (IWSS
              2020).
            </div>
            <div className="news_list_item_time">26th Feb 2020</div>
          </div>
          <div className="news_list_item">
            <div className="news_list_item_image">
              <img
                src={require("../../images/body/news/news_4.png")}
                alt="News 4"
              />
            </div>
            <div className="news_list_item_title">
              The 5th F2F meeting took place at Tokyo, Japan.
            </div>
            <div className="news_list_item_time">26th Feb 2020</div>
          </div>
          <div className="news_list_item">
            <div className="news_list_item_image">
              <img
                src={require("../../images/body/news/news_5.png")}
                alt="News 5"
              />
            </div>
            <div className="news_list_item_title">
              The 1st IEEE VTC Fall Workshop: 5G and Beyond Technologies for
              Ultra-Dense Environments
            </div>
            <div className="news_list_item_time">26th Feb 2020</div>
          </div>
          <div className="news_list_item">
            <div className="news_list_item_image">
              <img
                src={require("../../images/body/news/news_6.png")}
                alt="News 6"
              />
            </div>
            <div className="news_list_item_title">
              The 4th F2F meeting took place at Antwerp, Belgium.
            </div>
            <div className="news_list_item_time">26th Feb 2020</div>
          </div>
          <div className="news_list_item">
            <div className="news_list_item_image">
              <img
                src={require("../../images/body/news/news_7.png")}
                alt="News 7"
              />
            </div>
            <div className="news_list_item_title">
              The 3rd F2F meeting took place at Ehime, Japan.
            </div>
            <div className="news_list_item_time">26th Feb 2020</div>
          </div>
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
      </div>
    </>
  );
};

export default News;
