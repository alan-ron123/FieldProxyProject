import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
{
  /* <div>
          <p>
            <a
              class="btn btn-secondary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <FaBars />
            </a>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <p>
                <Link to="/body" className="links">
                  Home
                </Link>
              </p>

              <p>
                <Link to="/mobile" className="links">
                  Mobile
                </Link>
              </p>

              <p>
                <Link to="/Laptop" className="links">
                  Laptop
                </Link>
              </p>
            </div>
          </div>
        </div> */
}
{
  /* <div>
          <Link to="/body">
            {" "}
            <FaBars />{" "}
          </Link>

          <Link to="/mobile">Mobile</Link>

          <Link to="/Laptop">Laptop</Link>
        </div> */
}
