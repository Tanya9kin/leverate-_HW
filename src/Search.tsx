import React from "react";

const Search: React.FunctionComponent<{
  title: string;
  value: string;
  onChange: (e: any) => void;
}> = ({ title, value, onChange }) => {
  return (
    <div>
      <p>{title}</p>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default Search;
