import React from 'react';
import './AboutPage.css';
import * as motion from 'motion/react-client';

function AboutPage() {
    return (
        <main className="container">
            <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                }}
            >
                About this project
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                }}
            >
                This project was made by Giorgi Chanturia for final React exams
                in BTU university. Thank you very much for checking out this
                project.
            </motion.p>
        </main>
    );
}

export default AboutPage;
