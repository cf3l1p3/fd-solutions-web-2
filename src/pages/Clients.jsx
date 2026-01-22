import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';
import clientMercadoPublico from '../assets/images/client-mercadopublico.png';

const Clients = () => {
    const { t } = useLanguage();
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();
    const controls = useAnimationControls();

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    // Client Data
    const clients = [
        {
            id: 1,
            name: "Mercado Público",
            logo: clientMercadoPublico,
            url: "https://www.mercadopublico.cl",
            isImage: true
        }
    ];

    const startAnimation = () => {
        if (width > 0) {
            controls.start({
                x: -width,
                transition: {
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            });
        }
    };

    useEffect(() => {
        startAnimation();
    }, [width, controls]);

    return (
        <div className="flex flex-col min-h-[calc(100vh-80px)] bg-slate-50 relative overflow-hidden pt-20 pb-20">
            {/* Plain White Background (Grid Removed) */}

            <div className="container mx-auto px-4 z-10 relative">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-secondary mb-6"
                    >
                        {t('clients.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        {t('clients.description')}
                    </motion.p>
                </div>

                {/* Draggable Carousel with Auto-Scroll */}
                <div className="relative w-full py-8">
                    {/* Fade Masks */}
                    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        ref={carouselRef}
                        className="cursor-grab active:cursor-grabbing overflow-hidden flex justify-center w-full"
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <motion.div
                            drag={width > 0 ? "x" : false}
                            dragConstraints={{ right: 0, left: -width }}
                            animate={controls}
                            onDragStart={() => controls.stop()} // Stop auto-scroll on interaction
                            onDragEnd={() => startAnimation()} // Resume auto-scroll after interaction
                            className={`flex gap-8 w-max px-4 md:px-8 ${width <= 0 ? 'justify-center mx-auto' : ''}`}
                        >
                            {/* Render Clients */}
                            {clients.map((client, index) => (
                                <motion.div
                                    key={`${client.id}-${index}`}
                                    className="flex-shrink-0 w-80"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <a
                                        href={client.url}
                                        target={client.url.startsWith('http') ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="block bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 p-8 h-64 group border border-slate-100 hover:border-primary/20 pointer-events-none"
                                    >
                                        <div className="h-full flex flex-col items-center justify-center">
                                            <div className="h-28 w-full flex items-center justify-center mb-4">
                                                {client.isImage ? (
                                                    <img
                                                        src={client.logo}
                                                        alt={client.name}
                                                        className="max-h-full max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-110 grayscale-0"
                                                    />
                                                ) : (
                                                    <div className="text-slate-400 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110">
                                                        {client.logo}
                                                    </div>
                                                )}
                                            </div>
                                            <h3 className="text-lg font-semibold text-slate-700 group-hover:text-secondary transition-colors text-center">{client.name}</h3>
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/">
                        <Button variant="secondary">
                            {t('clients.backHome')}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Clients;
