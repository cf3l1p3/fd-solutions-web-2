import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Globe } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleNavClick = async (e, path) => {
        // If it's a hash link (e.g., /#services)
        if (path.includes('#')) {
            e.preventDefault();
            const [pagePath, hash] = path.split('#');

            // If we are not on the page, navigate first
            if (location.pathname !== pagePath) {
                await navigate(pagePath);
                // Wait for navigation to complete then scroll
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                // We are already on the page, just scroll
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.services'), path: '/#services' },
        { name: t('nav.clients'), path: '/clients' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg text-white group-hover:shadow-[0_0_15px_rgba(0,168,142,0.5)] transition-shadow duration-300">
                            <Terminal size={24} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary group-hover:opacity-80 transition-opacity">
                            FD Solutions
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={(e) => handleNavClick(e, link.path)}
                                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path && !link.path.includes('#') ? 'text-primary' : 'text-slate-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 text-slate-600 hover:text-primary transition-colors font-medium text-sm border-l border-slate-200 pl-4"
                        >
                            <Globe size={18} />
                            <span>{language.toUpperCase()}</span>
                        </button>

                        <Link to="/contact">
                            <Button size="sm" className="ml-4">
                                {t('nav.contact')}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 text-slate-600 hover:text-primary transition-colors font-medium text-sm"
                        >
                            <Globe size={18} />
                            <span>{language.toUpperCase()}</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-600 hover:text-primary transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={(e) => handleNavClick(e, link.path)}
                                    className={`text-base font-medium py-2 border-b border-slate-50 last:border-0 ${location.pathname === link.path && !link.path.includes('#') ? 'text-primary' : 'text-slate-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" className="mt-2">
                                <Button className="w-full justify-center">{t('nav.contact')}</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
