import React from "react";
import "../assets/css/Style.css";

function Experience() {
  return (
    <div className="row experience" id="experience">
      <div className="row text-center">
        <h3 className="section-title">
          03.<span> Experience ----------------</span>
        </h3>
      </div>
      <div className="row education-div">
        <h4 className="col-12 education-title">// Education</h4>
        <div className="col-12 education-wrapper">
          <ul className="list-group">
            <li className="list-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-laptop"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
              </svg>
              <h5>University of Birmingham Bootcamp</h5>
              <span className="education-dates">Jan 2023 - July 2023</span>
              <span>
                Intensive and comprehensive web development Bootcamp, covering
                both front end and back end development. Graduated with a 96.15%
                grade.
              </span>
            </li>
            <li className="list-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-mortarboard"
                viewBox="0 0 16 16"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
              </svg>
              <h5>The Mount Academy</h5>
              <span className="education-dates">Sept 2013 - June 2017</span>
              <span>Graduated with a High School Diploma. And a 3.77 GPA</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row work-div">
        <h4 className="col-12 work-title">// Work History</h4>
        <div className="col-12 work-wrapper">
          <div className="d-flex align-items-start">
            <div
              className="work-tabs nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
              style={{ marginRight: "0 !important" }}
            >
              <button
                className="nav-link text-start active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nova"
                type="button"
                role="tab"
                aria-controls="v-pills-nova"
                aria-selected="true"
              >
                Nova International Group
              </button>
              <button
                className="nav-link text-start"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Pakistan Consulate
              </button>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-nova"
                role="tabpanel"
                aria-labelledby="v-pills-nova-tab"
              >
                <h3>Web Developer Assistant</h3>
                <h5>2023 - Current</h5>
                <ul>
                  <li>
                    Designed, developed, and maintained a children's charity
                    website using Figma and WordPress.
                  </li>
                  <li>
                    Collaborated with the product design, product management,
                    and software engineering teams to improve user experience by
                    87%, including the implementation of microinteractions and
                    parallax scrolling.
                  </li>
                  <li>
                    Implemented 11 uniquely identified trends to create an
                    optimal website, based on research and analysis of data
                    reports.
                  </li>
                  <li>
                    Built a scalable system capable of withstanding more than a
                    1000% increase in traffic, and improved the speed of the
                    website by up to 80% using the WP Rocket plugin.
                  </li>
                  <li>
                    Used the Yoast SEO plugin to optimize WordPress websites for
                    search engines, including features such as keyword research,
                    title tag and meta description optimization, and content
                    analysis.
                  </li>
                  <li>
                    Wrote custom CSS to style the WordPress site, resulting in a
                    more visually appealing and user-friendly experience.
                  </li>
                  <li>
                    Teamed up with the development and management teams to
                    create a system that improves the children's charity's
                    ability to track their progress, measure their impact, and
                    manage their website efficiently.
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <h3>Office Administrator</h3>
                <h5>2020 - 2023</h5>
                <ul>
                  <li>
                    Implemented and maintained robust security protocols to
                    ensure the safety and confidentiality of sensitive
                    information.
                  </li>
                  <li>
                    Contributed to various projects, showcasing strong attention
                    to detail and organizational skills.
                  </li>
                  <li>
                    Assisted in managing administrative tasks, including
                    document preparation, record keeping, and scheduling
                    appointments.{" "}
                  </li>
                  <li>
                    Collaborated with team members to streamline office
                    operations and improve overall efficiency.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
