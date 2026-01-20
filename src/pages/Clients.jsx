import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

const Clients = () => {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block p-6 bg-white rounded-full shadow-xl shadow-primary/10 mb-8"
                >
                    <div className="bg-primary/10 p-4 rounded-full text-primary">
                        <Rocket size={48} />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-secondary mb-4"
                >
                    {t('clients.title')}
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-slate-600 max-w-lg mx-auto mb-10"
                >
                    {t('clients.description')}
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link to="/">
                        <Button size="lg">
                            {t('clients.backHome')}
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Clients;
