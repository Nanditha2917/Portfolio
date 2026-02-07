import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Technical Skills</h2>
      <ul>
        <li>Programming & Querying: C, C++, SQL, Python(Basics)</li>
        <li>Web Technologies: HTML, CSS, PHP, React</li>
        <li>
          CS Fundamentals: Data Structures and Algorithm, OOPs, Computer
          Network.{" "}
        </li>
      </ul>
    </motion.div>
  );
}
