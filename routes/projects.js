const express = require('express');
const router = express.Router();

const projects = [
  {
    id: 1,
    title: 'Interactive Portfolio Website',
    date: 'Jun 2025',
    tech: ['React', 'Three.js', 'Tailwind CSS', 'Express', 'Node.js', 'JavaScript', 'Python', 'Flask', 'MongoDB'],
    highlights: [
      'Engineered a full-stack portfolio website to showcase projects and experiences, incorporating interactive UI panels and real-time effects using React, Three.js, and Framer Motion',
      'Connected a Python Flask backend with MongoDB to store and retrieve contact form submissions, enabling seamless communication between visitors and the developer',
      'Implemented modular project pages, animated transitions, and dynamic component visibility (e.g., hide/show content or stars) to enhance the user experience across devices',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Periodic_table_large.png',
    github: 'https://github.com/aaa474/NJ-Transit-Railway-Health',
    demo: 'https://periodic-chem.web.app',
  },
  {
    id: 2,
    title: 'Quantum Circuit Visualizer',
    date: 'Jun 2025',
    tech: ['JavaScript', 'HTML', 'CSS', 'Python', 'Qiskit', 'Flask'],
    highlights: [
      'Engineered a web-based quantum circuit simulator with a drag-and-drop timeline editor and real-time state updates.',
      'Integrated a Python Flask backend with Qiskit to simulate quantum gates, render Bloch spheres, and return measurement outcomes.',
      'Implemented editable gates, JSON export/import, connection line rendering, and responsive animations for an immersive UI experience.',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Qubit_Bloch_sphere.svg/512px-Qubit_Bloch_sphere.svg.png',
    github: 'https://github.com/aaa474/Quantum-Circuit-Visualizer',
    demo: 'https://quantum-visualizer.web.app',
  },
  {
    id: 3,
    title: 'Truth Table Converter',
    date: 'Dec 2024',
    tech: ['C'],
    highlights: [
      'Created a Truth Table Converter that accurately converts logic gate expressions into truth tables to aid in circuit analysis and debugging ',
      'Utilized C to develop an algorithm that parses logic gate inputs and generates corresponding truth tables ',
      'Improved algorithmic efficiency by reducing any redundant computations, allowing for faster truth table generation',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Railroad-track.jpg',
    github: 'https://github.com/aaa474/Truth-Table-Converter',
    demo: '',
  },
  {
    id: 4,
    title: 'NJ Transit Railway System',
    date: 'Oct 2024',
    tech: ['Python', 'JavaScript'],
    highlights: [
      'Engineered a railway health monitoring simulation with a team of 2 to visualize and track NJ Transit railway conditions over time',
      'Developed a Python-based algorithm to assess railway degradation, dynamically updating a visual map with color-coded indicators (green to red) to represent track conditions ',
      'Integrated JavaScript for front-end visualization, allowing real-time updates on railway health, improving predictive maintenance planning ',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Periodic_table_large.png',
    github: 'https://github.com/aaa474/NJ-Transit-Railway-Health',
    demo: 'https://periodic-chem.web.app',
  },
];

router.get('/', (req, res) => {
  console.log('GET /api/projects called');
  res.json(projects);
});

module.exports = router;
