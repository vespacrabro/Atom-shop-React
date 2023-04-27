import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <main>
      <h1>About Us</h1>
      <p>
      Atom is a stylish clothing shop that offers a range of trendy clothing and accessories for both men and women. With a focus on modern and minimalistic design, our clothing is perfect for those who appreciate understated but fashionable pieces. Atom stocks a variety of styles, from casual everyday wear to dressier outfits, all made from premium materials that are built to last. Our collections are updated frequently to ensure that customers always have access to the latest trends, and our helpful customer service team is always on hand to assist with any queries.
      </p>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default About;

