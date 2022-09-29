import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Propertylist from "../../components/propertyList/Propertylist";

import "./home.css";
export const Home = () => {
  return (
    <div>
     <Navbar></Navbar>
      <Header></Header>
      <div className="homeContainer">
        <Featured></Featured>
        <h1 className="homeTitle">Browse by property type</h1>
        <Propertylist></Propertylist>
        <h1 className="homeTitle">Homes guests love</h1>
      <FeaturedProperties></FeaturedProperties>
      <MailList></MailList>
      <Footer></Footer>
      </div>
    </div>
  );
};
