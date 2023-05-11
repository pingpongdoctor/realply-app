"use client";

import styles from "./SearchBoxComponent.module.scss";

//SEARCH COMPONENT IS A CLIENT COMPONENT SINCE IT NEEDS USE INTERACTIVITY
export default function SearchBoxComponent() {
  return (
    <input
      className={styles.searchBoxComponent}
      type="text"
      placeholder="Search"
      name="search-box"
    />
  );
}
