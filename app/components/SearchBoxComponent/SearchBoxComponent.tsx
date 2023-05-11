import styles from "./SearchBoxComponent.module.scss";

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
