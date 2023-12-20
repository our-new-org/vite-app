import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedDivProps = HTMLMotionProps<'div'> & {
  children?: ReactNode;
};
const AnimatedDiv = ({ children, ...rest }: AnimatedDivProps) => {
  return (
    <motion.div
      className="animated"
      transition={{ duration: 0.075 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...rest}>
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
