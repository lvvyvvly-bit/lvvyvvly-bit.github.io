import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onEnter = () => cursor.classList.add('scaled');
    const onLeave = () => cursor.classList.remove('scaled');

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div id="custom-cursor" ref={cursorRef}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" fill="#E8C84A" r="15" />
        <path d="M50 10 C60 30, 70 30, 80 10 C70 40, 60 40, 50 50 Z" fill="#E8C84A" />
        <path d="M90 50 C70 40, 70 30, 90 20 C60 30, 60 40, 50 50 Z" fill="#E8C84A" />
        <path d="M50 90 C40 70, 30 70, 20 90 C30 60, 40 60, 50 50 Z" fill="#E8C84A" />
        <path d="M10 50 C30 60, 30 70, 10 80 C40 70, 40 60, 50 50 Z" fill="#E8C84A" />
        <path d="M80 90 C70 70, 60 70, 90 80 C60 60, 70 60, 50 50 Z" fill="#E8C84A" />
        <path d="M20 10 C30 30, 40 30, 10 20 C40 40, 30 40, 50 50 Z" fill="#E8C84A" />
      </svg>
    </div>
  );
};

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased">
      <CustomCursor />
      <Navbar />
      <main className={`flex-grow flex flex-col ${isHome ? '' : 'pt-32'}`}>
        <Outlet />
      </main>
      {!isHome && <Footer />}
    </div>
  );
};

export default Layout;
