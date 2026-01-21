import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Cloud, Lock, BarChart, Terminal, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button'; // Assuming Button is in ui folder
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
    const { t } = useLanguage();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Services map based on the new 3 key services
    const services = [
        {
            icon: <Code size={32} />,
            title: t('services.items.web.title'),
            description: t('services.items.web.desc'),
            tech: t('services.items.web.tags')
        },
        {
            icon: <Terminal size={32} />,
            title: t('services.items.consulting.title'),
            description: t('services.items.consulting.desc'),
            tech: t('services.items.consulting.tags')
        },
        {
            icon: <Users size={32} />,
            title: t('services.items.recruitment.title'),
            description: t('services.items.recruitment.desc'),
            tech: t('services.items.recruitment.tags')
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden pt-20">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.span
                            className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-primary text-sm font-medium mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {t('hero.badge')}
                        </motion.span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {t('hero.title')} <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-teal-400 to-accent">
                                {t('hero.titleHighlight')}
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {t('hero.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20">
                                    {t('hero.ctaPrimary')}
                                </Button>
                            </Link>
                            <a href="#services">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                                    {t('hero.ctaSecondary')}
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-slate-500 rounded-full"></div>
                    </div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-slate-50 relative section-scroll-offset">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('services.title')}</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {t('services.subtitle')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20 hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>

                                <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10 border border-slate-50">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tech.map((item, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/5 skew-y-3 origin-bottom-right"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-slate-800 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('ctaSection.title')}</h2>
                            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                                {t('ctaSection.description')}
                            </p>
                            <div className="relative z-10">
                                <Button
                                    as={Link}
                                    to="/contact"
                                    size="lg"
                                    className="bg-primary hover:bg-primary-hover text-white border-none shadow-lg shadow-primary/25"
                                >
                                    {t('ctaSection.button')}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
