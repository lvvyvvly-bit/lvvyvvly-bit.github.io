import { NavLink } from 'react-router-dom';

const SunflowerIcon = () => (
  <svg className="w-5 h-5 fill-current text-[#E8C84A]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="20" />
    <circle cx="50" cy="15" r="10" />
    <circle cx="85" cy="50" r="10" />
    <circle cx="50" cy="85" r="10" />
    <circle cx="15" cy="50" r="10" />
    <circle cx="75" cy="25" r="8" />
    <circle cx="75" cy="75" r="8" />
    <circle cx="25" cy="75" r="8" />
    <circle cx="25" cy="25" r="8" />
  </svg>
);

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/works', label: 'Works' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 border border-outline-variant shadow-sm bg-surface-container-lowest flex items-center gap-6">
      <NavLink to="/" className="flex items-center gap-2 mr-2">
        <SunflowerIcon />
        <span className="font-headline-md text-[18px] italic text-secondary leading-none">
          SUNNY
        </span>
      </NavLink>
      <ul className="flex items-center gap-6">
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-label-caps text-label-caps uppercase tracking-widest transition-colors duration-200 block ${
                  isActive
                    ? 'text-primary border-b-2 border-secondary pb-1'
                    : 'text-on-surface-variant hover:text-secondary'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
