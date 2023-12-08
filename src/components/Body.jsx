import Card from "./Card";
import Header from "./Header";
import data from "../utils/data";
import { useState } from "react";

const Body = () => {
  const [filters, setFilters] = useState(new Set());
  const [companies, setCompanies] = useState(data);

  const getCompanies = () => {
    if (filters.size == 0) {
      setCompanies(data);
      return;
    }
    const filteredCompanies = data.filter((d) => {
      const tags = [d.role, d.level, ...d.languages, ...d.tools];
      return tags.some((tag) => filters.has(tag));
    });
    setCompanies(filteredCompanies);
  };

  const handleFilterClick = (e) => {
    filters.add(e.target.textContent);
    setFilters(filters);
    getCompanies();
  };

  const handleRemoveFilter = (e) => {
    filters.delete(e.target.textContent);
    setFilters(filters);
    getCompanies();
  };

  const handleClearAllFilters = () => {
    setFilters(new Set());
    setCompanies(data);
  };

  return (
    <section className="min-h-screen bg-light-grayish-cyan-bg">
      <Header
        filters={filters}
        handleClearAllFilters={handleClearAllFilters}
        handleRemoveFilter={handleRemoveFilter}
      />
      <main
        className=" font-league-spartan px-4 py-6"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {companies.map((company) => {
          return (
            <Card
              key={company.id}
              data={company}
              handleFilterClick={handleFilterClick}
            />
          );
        })}
      </main>
    </section>
  );
};

export default Body;
