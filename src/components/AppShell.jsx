import { useEffect } from "react";
import { motion } from "motion/react";

function AppShell({ children }) {
  useEffect(() => {
    document.title = "The Last Receipt";
  }, []);

  return (
    <div className="page-shell paper-texture">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        {children}
      </motion.main>
    </div>
  );
}

export default AppShell;