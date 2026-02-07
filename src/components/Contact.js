import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="box contactBox"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Let's Connect</h2>

      <p>
        📧
        <a href="mailto:nandithamnanditha902@gmail.com ">
          nandithamnanditha902@gmail.com
        </a>
      </p>
      <p>
        💻
        <a
          href="https://github.com/Nanditha2917"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>
        🔗
        <a
          href="https://www.linkedin.com/in/nanditha29"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </motion.div>
  );
}
