import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const { t } = useLanguage();

    const contactSchema = z.object({
        name: z.string().min(2, t('validation.nameRequired')),
        email: z.string().email(t('validation.emailRequired')),
        subject: z.string().min(3, t('validation.subjectRequired')),
        message: z.string().min(10, t('validation.messageRequired'))
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("https://formspree.io/f/xeozrrqy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset();
            } else {
                const errorData = await response.json();
                console.error('Formspree error:', errorData);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-10 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t('contact.title')}</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        className="lg:col-span-1 space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary text-lg mb-1">{t('contact.emailLabel')}</h3>
                                    <p className="text-slate-600 break-all">contacto@fdsolutions.cl</p>
                                    <p className="text-sm text-slate-400 mt-1">{t('contact.emailSub')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary text-lg mb-1">{t('contact.phoneLabel')}</h3>
                                    <p className="text-slate-600">+56 9 8533 4038</p>
                                    <p className="text-sm text-slate-400 mt-1">{t('contact.phoneSub')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary text-lg mb-1">{t('contact.officeLabel')}</h3>
                                    <p className="text-slate-600">
                                        La Florida, Santiago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100 relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Decorative blob */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-2xl font-bold text-secondary mb-8">{t('contact.formTitle')}</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">

                            {/* Formspree specific hidden fields */}
                            <input type="text" name="_gotcha" style={{ display: 'none' }} />

                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    label={t('contact.labels.name')}
                                    id="name"
                                    placeholder={t('contact.placeholders.name')}
                                    error={errors.name}
                                    {...register('name')}
                                />
                                <Input
                                    label={t('contact.labels.email')}
                                    id="email"
                                    type="email"
                                    placeholder={t('contact.placeholders.email')}
                                    error={errors.email}
                                    {...register('email')}
                                />
                            </div>

                            <Input
                                label={t('contact.labels.company')} // Keep label as is for now, mapping subject to it visually
                                id="subject"
                                placeholder={t('contact.placeholders.company')}
                                error={errors.subject}
                                {...register('subject')}
                            />

                            <Textarea
                                label={t('contact.labels.message')}
                                id="message"
                                placeholder={t('contact.placeholders.message')}
                                error={errors.message}
                                {...register('message')}
                            />

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full md:w-auto min-w-[160px]"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            {t('contact.labels.sending')}
                                        </>
                                    ) : (
                                        t('contact.labels.submit')
                                    )}
                                </Button>
                            </div>

                            {/* Feedback Messages */}
                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center gap-3 border border-green-100"
                                    >
                                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">{t('contact.success.title')}</p>
                                            <p className="text-sm text-green-600">{t('contact.success.desc')}</p>
                                        </div>
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-3 border border-red-100"
                                    >
                                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">{t('contact.error.title')}</p>
                                            <p className="text-sm text-red-600">{t('contact.error.desc')}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
