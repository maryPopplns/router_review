# React router learning

- wrap your app in browserRouter

```
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
```

- Use Link to 'link' to a route

```
<Link to="/invoices">Invoices</Link>
<Link to="/expenses">Expenses</Link>
```

- Add routes to browserRouter

```
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
```

- You can nest routes by using indentation and the Outlet component.

```
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
```

- useParams is used to get the value of URL parameters

```
import { useParams } from "react-router-dom";

export default function Invoice() {
  let params = useParams();
  return <h2>Invoice: {params.invoiceId}</h2>;
}
```

- Index routes are fill in for when a route has child routes (<Outlet /> component), but one is not currently active

```
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
```

- Active routes allow conditional styling

```
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
```

- Search Params : allows you to easily access search parameters, and set seach parameters as well

```
let [searchParams, setSearchParams] = useSearchParams();

<input
value={searchParams.get("filter") || ""}
onChange={(event) => {
  let filter = event.target.value;
  if (filter) {
    setSearchParams({ filter });
  } else {
    setSearchParams({});
  }
}}
/>
```
