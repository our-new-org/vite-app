import './index.css';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div>
        <h1>THIS IS THE DASHBOARD</h1>
        <h1>THIS IS THE DASHBOARD</h1>
        <h1>THIS IS THE DASHBOARD</h1>
        <h1>THIS IS THE DASHBOARD</h1>
        <h1>THIS IS THE DASHBOARD</h1>
        <h1>THIS IS THE DASHBOARD</h1>
        <h1>THIS IS THE DASHBOARD</h1>
        <h1>THIS IS THE DASHBOARD</h1>
      </div>
    </motion.div>
  );
};

export default Dashboard;
