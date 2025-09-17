import React from "react";
import "../App.css";

const WhyCard = React.memo(() => (
  <div className="whoami-glass-card whoami-landscape">
    <div className="whoami-profile-col">
      <h3 className="whoami-title">Why</h3>
    </div>
    <div className="whoami-info-col">
      {/* Story */}
      <div className="whoami-section">
        <p>
          One night I posted on X that gravity didn't feel strong enough and I
          was going to rewrite its code. Total joke. But then I thought: what if
          I just did?
        </p>
      </div>
      <div className="whoami-section">
        <p>
          So, it began, as a gag. Then came the rabbit hole. If you touch
          gravity, you end up touching everything else (sus). Spin, orbit, meteor
          showers, asteroids, even global warmin (all coming soon).
        </p>
      </div>
      <div className="whoami-section">
        <p>
          That's really the point: some ideas are too dumb not to build. This
          wasn't about accuracy or usefulness. It was about seeing if a
          ridiculous thought could live as code.
        </p>
      </div>

      {/* About me (last 25%) */}
      <div className="whoami-section whoami-mobile-hide">
        <h5>Who Made This</h5>
        <p>
          Hi, I'm Anant. A 19-year-old developer from New Delhi, India. I'm a tech
          geek who loves designing, video editing, and music (even made my own music
          app). Mostly, I follow random ideas until they become something
          tangible — whether it's a new AI project, a mini-world, or something
          completely unexpected.
        </p>
      </div>
      <div className="whoami-footer">
        <p>
          Type{" "}
          <span
            className="command-link"
            data-command="github"
            style={{
              color: "#5abb9a",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            github
          </span>
          ,{" "}
          <span
            className="command-link"
            data-command="linkedin"
            style={{
              color: "#5abb9a",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            linkedin
          </span>
          , or{" "}
          <span
            className="command-link"
            data-command="email"
            style={{
              color: "#5abb9a",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            email
          </span>{" "}
          to connect.
        </p>
      </div>
    </div>
  </div>
));
export default WhyCard;
