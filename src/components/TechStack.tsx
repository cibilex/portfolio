import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const technologies = [
  {
    name: "Node.js",
    color:
      "from-green-500/20 to-green-600/20 border-green-500/30 text-green-500",
  },
  {
    name: "React",
    color: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400",
  },
  {
    name: "Vue",
    color:
      "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400",
  },
  {
    name: "Fastify",
    color: "from-gray-400/20 to-gray-500/20 border-gray-400/30 text-gray-300",
  },
  {
    name: "Express",
    color:
      "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400",
  },
  {
    name: "NestJS",
    color: "from-red-500/20 to-red-600/20 border-red-500/30 text-red-400",
  },
  {
    name: "TypeScript",
    color: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400",
  },
  {
    name: "PostgreSQL",
    color:
      "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-400",
  },
  {
    name: "MongoDB",
    color: "from-lime-500/20 to-lime-600/20 border-lime-500/30 text-lime-400",
  },
  {
    name: "Docker",
    color: "from-sky-500/20 to-sky-600/20 border-sky-500/30 text-sky-400",
  },
];

export const TechStack = () => {
  return (
    <div className="space-y-2">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xs font-medium text-muted-foreground"
      >
        Tech Stack
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <InfiniteMovingCards
          items={technologies}
          direction="left"
          speed="slow"
          pauseOnHover
        />
      </motion.div>
    </div>
  );
};
