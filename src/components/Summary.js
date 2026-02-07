import { motion } from "framer-motion";

export default function Summary() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Summary</h2>
      <p>
        Aspiring technology professional specializing in CSE(AI&ML), with strong
        technical fundamentals and hands-on experience in developing real-time
        academic and practical projects. Highly motivated to learn, adapt to new
        technologies, and contribute effectively in a innovation-driven
        organization focused on digital transformation and continuous growth.
      </p>
    </motion.div>
  );
}
