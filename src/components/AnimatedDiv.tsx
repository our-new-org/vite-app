import { motion } from 'framer-motion';
import { HTMLProps } from 'react';

type AnimatedDivProps = HTMLProps<HTMLDivElement>;

const AnimatedDiv = (props: AnimatedDivProps) => {
  return (
    <motion.div
      transition={{ duration: 0.075 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {props.children}
    </motion.div>
  );
};

export default AnimatedDiv;
