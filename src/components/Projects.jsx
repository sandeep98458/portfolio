import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Project Alpha',
            description: 'A responsive web application built with React and Firebase. Features include user authentication, real-time data syncing, and a modern UI.',
            tech: ['React', 'Firebase', 'Tailwind'],
            github: '#',
            external: '#'
        },
        {
            title: 'Project Beta',
            description: 'An e-commerce platform developed using Next.js and Stripe. Includes shopping cart functionality, secure checkout, and order management.',
            tech: ['Next.js', 'Stripe', 'PostgreSQL'],
            github: '#',
            external: '#'
        },
        {
            title: 'Project Gamma',
            description: 'A data visualization dashboard utilizing D3.js. Processes large datasets and presents them in interactive charts and graphs.',
            tech: ['D3.js', 'Vue.js', 'API'],
            github: '#',
            external: '#'
        },
        {
            title: 'Project Delta',
            description: 'A mobile-first social media app. Users can share posts, like content, and follow other users. Built with React Native.',
            tech: ['React Native', 'Redux', 'Node.js'],
            github: '#',
            external: '#'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Some Things I've Built
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="card-header">
                                <Folder size={40} className="folder-icon" />
                                <div className="card-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.external} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>

                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>

                            <ul className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
