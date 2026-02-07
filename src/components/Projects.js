import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Projects</h2>
      <ul>
        <li>Student Counselling Application</li>
        <li>Sudoku Solver</li>
      </ul>
    </motion.div>
  );
}
