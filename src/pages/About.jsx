import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const values = [
        {
            icon: <CheckCircle size={28} />,
            title: t('about.values.excellence.title'),
            description: t('about.values.excellence.desc')
        },
        {
            icon: <CheckCircle size={28} />,
            title: t('about.values.innovation.title'),
            description: t('about.values.innovation.desc')
        },
        {
            icon: <CheckCircle size={28} />,
            title: t('about.values.integrity.title'),
            description: t('about.values.integrity.desc')
        },
        {
            icon: <CheckCircle size={28} />,
            title: t('about.values.client.title'),
            description: t('about.values.client.desc')
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Header Section */}
            <section className="bg-secondary py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] opacity-10 bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            {t('about.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-20">

                        {/* Story */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-bold text-secondary mb-6">{t('about.storyTitle')}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {t('about.storyDesc')}
                            </p>
                        </motion.div>

                        {/* Mission & Vision */}
                        <div className="grid md:grid-cols-2 gap-10">
                            <motion.div
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary mb-4">{t('about.missionTitle')}</h3>
                                <p className="text-slate-600">
                                    {t('about.missionDesc')}
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, delay: 0.2 }}
                                variants={fadeInUp}
                            >
                                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-green-700 mb-6">
                                    <Eye size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary mb-4">{t('about.visionTitle')}</h3>
                                <p className="text-slate-600">
                                    {t('about.visionDesc')}
                                </p>
                            </motion.div>
                        </div>

                        {/* Values */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">{t('about.valuesTitle')}</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {values.map((value, index) => (
                                    <div key={index} className="flex gap-4 p-4 hover:bg-slate-50 rounded-lg transition-colors">
                                        <div className="text-primary flex-shrink-0 mt-1">
                                            {value.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-secondary mb-2">{value.title}</h4>
                                            <p className="text-slate-600">{value.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
