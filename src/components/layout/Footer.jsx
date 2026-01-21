import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-primary p-1.5 rounded-md text-white">
                                <Terminal size={20} strokeWidth={2.5} />
                            </div>
                            <span className="text-xl font-bold text-white">FD Solutions</span>
                        </div>
                        <p className="text-slate-300 max-w-sm mb-6">
                            {t('footer.desc')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-primary transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-primary transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-primary transition-colors">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">{t('footer.company')}</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-primary transition-colors">{t('nav.home')}</Link></li>
                            <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-primary transition-colors">{t('nav.about')}</Link></li>
                            <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">{t('footer.services')}</h4>
                        <ul className="space-y-3">
                            <li><span className="text-slate-300">{t('services.items.web.title')}</span></li>
                            <li><span className="text-slate-300">{t('services.items.consulting.title')}</span></li>
                            <li><span className="text-slate-300">{t('services.items.recruitment.title')}</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>© {currentYear} FD Solutions SpA. {t('footer.rights')}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
