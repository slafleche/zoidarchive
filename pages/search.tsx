import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import styles from "./search.module.css";
import { NextSeo } from "next-seo";
import { Navbar } from "../src/components/Navbar";
import utilityStyles from "../styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import React from "react";
import { matchSorter } from "match-sorter";
import cities from "./api/dummyData";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
  ComboboxInputProps,
  useComboboxContext,
} from "@reach/combobox";

// function Search() {
//   const searchRef = useRef(null);
//   const [query, setQuery] = useState("");
//   const [active, setActive] = useState(false);
//   const [results, setResults] = useState([]);

//   const searchEndpoint = (query: string) => `/api/search?q=${query}`;

//   const onChange = useCallback((event) => {
//     const query = event.target.value;
//     setQuery(query);
//     if (query.length) {
//       fetch(searchEndpoint(query))
//         .then((res) => res.json())
//         .then((res) => {
//           setResults(res.results);
//         });
//     } else {
//       setResults([]);
//     }
//   }, []);

//   const onFocus = useCallback(() => {
//     setActive(true);
//     window.addEventListener("click", onClick);
//   }, []);

//   const onClick = useCallback((event) => {
//     if (
//       searchRef.current &&
//       !(searchRef.current as HTMLDivElement).contains(event.target)
//     ) {
//       setActive(false);
//       window.removeEventListener("click", onClick);
//     }
//   }, []);
//   return (
//     <>
//       <NextSeo title="Contribute" />
//       <Navbar />
//       <SkipNavContent>
//         <div className={utilityStyles.content}>
//           <div className={styles.container} ref={searchRef}>
//             <input
//               className={styles.search}
//               onChange={onChange}
//               onFocus={onFocus}
//               placeholder="Search posts"
//               type="text"
//               value={query}
//             />
//             {active && results.length > 0 && (
//               <ul className={styles.results}>
//                 {results.map(({ id, title }) => (
//                   <li className={styles.result} key={id}>
//                     <Link href="/posts/[id]" as={`/posts/${id}`}>
//                       <a>{title}</a>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </SkipNavContent>
//     </>
//   );
// }

// export default Search;

// function cities(
//   cities: any,
//   term: string,
//   arg2: { keys: ((item: any) => string)[] }
// ): any[] | null {
//   throw new Error("Function not implemented.");
// }

export function useThrottle(value: any, limit: number) {
  const [throttledValue, setThrottledValue] = React.useState(value);
  const lastRan = React.useRef(Date.now());

  React.useEffect(() => {
    const handler = window.setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => window.clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}

function useCityMatch(term: string) {
  const throttledTerm = useThrottle(term, 100);
  return React.useMemo(
    () =>
      term.trim() === ""
        ? null
        : matchSorter(cities, term, {
            keys: [(item: any) => `${item.city}, ${item.state}`],
          }),
    [term]
  );
}

function Search() {
  const [term, setTerm] = React.useState("");
  const results = useCityMatch(term);
  const handleChange = (event: any) => setTerm(event.target.value);
  return (
    <>
      <NextSeo title="404 Page Not Found" />

      <div>
        <h4 style={{ margin: 0 }}>Lots of stuff going on</h4>
        <Combobox>
          <ComboboxInput
            onChange={handleChange}
            style={{ width: 300, margin: 0 }}
          />
          {results && (
            <ComboboxPopover style={{ width: 300 }}>
              {results.length > 0 ? (
                <ComboboxList>
                  <h5>Top 3 results!</h5>
                  {results.slice(0, 3).map((result: any, index) => (
                    <ComboboxOption
                      key={index}
                      value={`${result.city}, ${result.state}`}
                    />
                  ))}
                  {results.length > 3 && (
                    <React.Fragment>
                      <h5>The Rest</h5>
                      {results.slice(3, 10).map((result: any, index) => (
                        <ComboboxOption
                          key={index}
                          value={`${result.city}, ${result.state}`}
                        />
                      ))}
                    </React.Fragment>
                  )}
                </ComboboxList>
              ) : (
                <div>
                  <p style={{ padding: 10, textAlign: "center" }}>
                    No results 😞
                  </p>
                </div>
              )}
            </ComboboxPopover>
          )}
        </Combobox>
      </div>
    </>
  );
}

export default Search;
