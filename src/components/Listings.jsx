import React from "react";

const languages = ["Pearl", "Java", "Python", "Ruby", "Scala", "Cobal"];

const LanguageListing = ({ name }) => (
  <h3>Learn {name} the best langauge in the world</h3>
);

const LanguageListings = languages.map(l => {
  return <LanguageListing name={l} key={l} />;
});

const Listings = () => {
  return LanguageListings;
};

export default Listings;
