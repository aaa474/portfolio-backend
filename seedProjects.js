require('dotenv').config(); 
const mongoose = require('mongoose');
const Project = require('./models/Project');

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { dbName: 'portfolioDB' })
  .then(() => {
    console.log('Connected to MongoDB');

    return Project.insertMany([
      {
        title: 'Quantum Circuit Visualizer',
        description: 'Simulates quantum gates and renders Bloch spheres.',
        tech: ['JavaScript', 'Flask', 'Qiskit'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Qubit_Bloch_sphere.svg',
        github: 'https://github.com/aslamazes/quantum-visualizer',
        demo: 'https://quantum-visualizer.web.app'
      },
      {
        title: 'Railroad Degradation Simulator',
        description: 'Visual map of track condition decay over time.',
        tech: ['C', 'OpenGL', 'SQLite'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Railroad-track.jpg',
        github: 'https://github.com/aslamazes/railroad-degradation'
      },
      {
        title: 'Chemistry Periodic Table Web App',
        description: 'Interactive table with electron configuration and hybridization data.',
        tech: ['HTML', 'CSS', 'React'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Periodic_table_large.png',
        github: 'https://github.com/aslamazes/chem-periodic-table',
        demo: 'https://periodic-chem.web.app'
      }
    ]);
  })
  .then(() => {
    console.log('Projects inserted');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Seeding failed:', err);
    mongoose.disconnect();
  });
