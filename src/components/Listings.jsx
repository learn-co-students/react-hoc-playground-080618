import React from "react";
import WithAds from "./withAds";

const languages = ["Pearl", "Java", "Python", "Ruby", "Scala", "Cobal"];

const LanguageListing = ({ name }) => (
  <h3>Learn {name} the best langauge in the world</h3>
);

const LanguageListingWithAds = WithAds(LanguageListing);

const LanguageListings = languages.map(l => {
  return <LanguageListingWithAds name={l} key={l} />;
});

const Listings = () => {
  return LanguageListings;
};

export default Listings;
