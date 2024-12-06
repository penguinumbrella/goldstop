// components/jobApp/JobApp.js
import React from 'react';

const JobApp = () => {
  return (
    <section style={styles.section}>
      <h2>Job Opportunities</h2>
      <p>We're looking for skilled cobblers to join our team!</p>
      <button style={styles.applyButton}>Apply Now</button>
    </section>
  );
};

// Basic styles for JobApp section
const styles = {
  section: {
    padding: '20px',
    backgroundColor: '#f3f3f3',
    textAlign: 'center',
    marginTop: '20px',
    borderRadius: '8px',
  },
  applyButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  }
};

export default JobApp;
