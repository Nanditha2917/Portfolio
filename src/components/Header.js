import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="header">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Nanditha M
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        CSE(AI&ML) Student • Developer
      </motion.h3>

      <a href="/resume.pdf" download>
        <button className="resumeBtn">Download Resume</button>
      </a>
    </div>
  );
}
