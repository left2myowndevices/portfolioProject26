"use client";

import { useMemo, useState } from "react";

const components = [
  { type: "toggle", name: "Button toggle", detail: "Connected controls with a clear active state" },
  { type: "search", name: "Search select", detail: "Filter, keyboard, selection, and clear states" },
  { type: "control", name: "Date range", detail: "Composable input behavior" },
  { type: "select", name: "Multi-select", detail: "Clear selected state" },
  { type: "data", name: "Data table", detail: "Dense information, readable structure" },
  { type: "chart", name: "Chart adapter", detail: "Consistent data-view conventions" },
  { type: "status", name: "Status feedback", detail: "Visible state and next steps" },
  { type: "overlay", name: "Disabled overlay", detail: "Honest unavailable states" },
  { type: "radial", name: "Contents menu", detail: "Progressive navigation without covering work" },
];

const searchOptions = ["Account settings", "Activity report", "Alerts", "Analytics workspace"];

export default function ComponentLibraryShowcase() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleValue, setToggleValue] = useState("Month");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState<string | null>(null);
  const visibleOptions = useMemo(
    () => searchOptions.filter((option) => option.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery],
  );

  const selectSearchOption = (option: string) => {
    setSelectedSearch(option);
    setSearchQuery(option);
    setIsSearchOpen(false);
  };

  return (
    <section className="component-library-showcase" aria-label="Representative component library patterns">
      <div className="component-library-showcase-header">
        <div>
          <p className="eyebrow">Representative patterns</p>
          <h2>A focused sample of the system, not a component catalog.</h2>
        </div>
        <p>These nine patterns represent the kinds of components I designed, implemented, documented, and maintained across application surfaces.</p>
      </div>

      <div className="component-library-grid">
        {components.map((component, index) => (
          <article className={`component-library-card component-library-card-${component.type}`} key={component.name}>
            <p className="component-library-card-index">{String(index + 1).padStart(2, "0")}</p>
            <div className="component-library-demo" aria-hidden={!["radial", "toggle", "search"].includes(component.type) || undefined}>
              {component.type === "toggle" && <div className="demo-toggle" role="group" aria-label="Time range"><button type="button" className={toggleValue === "Week" ? "is-active" : ""} onClick={() => setToggleValue("Week")}>Week</button><button type="button" className={toggleValue === "Month" ? "is-active" : ""} onClick={() => setToggleValue("Month")}>Month</button><button type="button" className={toggleValue === "Quarter" ? "is-active" : ""} onClick={() => setToggleValue("Quarter")}>Quarter</button></div>}
              {component.type === "search" && <div className="demo-search-select">
                <label htmlFor="showcase-search">Search workspace</label>
                <div><input id="showcase-search" type="text" role="combobox" aria-expanded={isSearchOpen} aria-controls="showcase-search-options" value={searchQuery} placeholder="Search..." onFocus={() => setIsSearchOpen(true)} onChange={(event) => { setSearchQuery(event.target.value); setSelectedSearch(null); setIsSearchOpen(true); }} />{selectedSearch && <button type="button" aria-label="Clear selection" onClick={() => { setSelectedSearch(null); setSearchQuery(""); setIsSearchOpen(true); }}>Clear</button>}</div>
                {isSearchOpen && <ul id="showcase-search-options" role="listbox">{visibleOptions.length ? visibleOptions.map((option) => <li key={option} role="option" aria-selected={selectedSearch === option}><button type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => selectSearchOption(option)}>{option}</button></li>) : <li className="demo-empty">No results found</li>}</ul>}
              </div>}
              {component.type === "control" && <><span className="demo-label">DATE RANGE</span><div className="demo-input">Apr 08 <b>to</b> Apr 22 <i>⌄</i></div></>}
              {component.type === "select" && <><span className="demo-label">FILTERS</span><div className="demo-tags"><b>Active</b><b>Review</b><i>+ 2</i></div></>}
              {component.type === "data" && <><span className="demo-label">RECENT ACTIVITY</span><div className="demo-table"><b>State</b><b>Owner</b><b>Updated</b><i /><i /><i /><i /><i /><i /></div></>}
              {component.type === "chart" && <><span className="demo-label">WEEKLY TREND</span><div className="demo-chart"><i /><i /><i /><i /><i /><i /><i /></div></>}
              {component.type === "status" && <div className="demo-status"><span>✓</span><div><b>Saved successfully</b><small>Changes are ready to share.</small></div></div>}
              {component.type === "overlay" && <div className="demo-overlay"><span>Access needed</span><small>This action is unavailable until a selection is made.</small></div>}
              {component.type === "radial" && <div className={`demo-radial ${isMenuOpen ? "is-open" : ""}`}>
                <button type="button" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>Contents</button>
                <a href="#library-problem" onClick={() => setIsMenuOpen(false)}><span>01</span> Problem</a>
                <a href="#library-system" onClick={() => setIsMenuOpen(false)}><span>02</span> System</a>
                <a href="#library-approach" onClick={() => setIsMenuOpen(false)}><span>03</span> Approach</a>
                <a href="#library-takeaway" onClick={() => setIsMenuOpen(false)}><span>04</span> Takeaway</a>
              </div>}
            </div>
            <div className="component-library-card-copy"><h3>{component.name}</h3><p>{component.detail}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
