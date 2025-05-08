import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Project Team</h1>
      </nav>
      
      <div style={styles.content}>
        <div style={styles.welcomeSection}>
          <h2>Welcome to Project Team</h2>
          <p>Your central hub for team collaboration</p>
        </div>

        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <h3>Projects</h3>
            <p>View and manage your projects</p>
          </div>
          <div style={styles.featureCard}>
            <h3>Team</h3>
            <p>Collaborate with team members</p>
          </div>
          <div style={styles.featureCard}>
            <h3>Tasks</h3>
            <p>Track your assignments</p>
          </div>
          <div style={styles.featureCard}>
            <h3>Analytics</h3>
            <p>Monitor project progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#333',
  },
  content: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  welcomeSection: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    padding: '1rem',
  },
  featureCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
};

export default Home;
