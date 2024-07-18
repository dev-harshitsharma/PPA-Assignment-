"use client";

import NavbarComponent from '../components/Navbar/NavBarComponent';
import FooterComponent from '../components/Footer/FooterComponent';
import Hero from "sections/Hero";
import {
  Clients,
  Manage,
  Pixelgrade,
  BusinessStats,
  Design,
  MeetAllCustomers,
  Marketing,
  Demo,
} from '../../sections';

export default function Home() {
  return (
    <main>
      <header className="bg-silver">
        <NavbarComponent />
        <Hero />
      </header>
      <section className="bg-silver">
        <Clients />
        <Manage />
        <Pixelgrade />
        <BusinessStats />
        <Design />
        <MeetAllCustomers />
        <Marketing />
        <div className="mt-10">
          <Demo />
        </div>
      </section>
      <footer className="bg-secondary">
        <FooterComponent />
      </footer>
    </main>
  );
}
