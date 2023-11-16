import React from "react";
import { Country } from "DataApi/country.interface";
import { People } from "DataApi/people.interface";

const calculateAge = (dob: string) => {
  const birthdate = new Date(dob);
  const today = new Date();
  var age_now = today.getFullYear() - birthdate.getFullYear();
  var m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age_now--;
  }
  return age_now;
};

const ListItem: React.FunctionComponent<{
  person: People;
  countriesData: Country[];
}> = ({ person, countriesData }) => {
  const personCountry = countriesData?.find(
    (country: Country) => country.alpha2Code === person.country
  );

  return (
    <div>
      <p>{person.first_name + " " + person.last_name}</p>
      <p>{calculateAge(person.date_of_birth)}</p>
      <p>{personCountry?.name}</p>
      {/*
      //wasn't able to make this link work in the time I had
      <img
        className="flag"
        height={50}
        src={personCountry?.flag}
        alt={personCountry?.name}
      /> */}
    </div>
  );
};

export default ListItem;
