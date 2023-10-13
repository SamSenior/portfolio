"use client";
import React from 'react';
import Header from '../components/Header';
import styles from './page.module.css';
import ScrollToComponent from '../components/ScrollToComponent'; // Import the new ScrollToComponent
import About from '@/components/About';
import Skills from '@/components/Skills';
import TechSkills from '@/components/TechSkills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ScrollToComponent id="about">
        <About />
      </ScrollToComponent>
      <ScrollToComponent id="skills">
        <Skills />
      </ScrollToComponent>
      <ScrollToComponent id="techSkills">
        <TechSkills />
      </ScrollToComponent>
      <ScrollToComponent id="projects">
        <Projects />
      </ScrollToComponent>
      <ScrollToComponent id="contact">
        <Contact />
      </ScrollToComponent>
      <ScrollToComponent id="footer">
        <Footer />
      </ScrollToComponent>
    </main>
  );
}

