"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, Star, User } from 'lucide-react';
import { Mitr } from 'next/font/google';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';


const mitr = Mitr({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.7, ease: easeOut } }
};

const LandingPage = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 12,
        minutes: 53,
        seconds: 26
    });

    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
    const [navOpen, setNavOpen] = useState(false);


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const toggleFAQ = (index: number) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };



    const plans = [
        {
            name: "Smart Plan",
            price: "$30",
            period: "/month",
            features: [
                "Access to all courses",
                "1000+ practice problems",
                "Community support",
                "Monthly assessments",
                "Certificate of completion"
            ],
            popular: false
        },
        {
            name: "Premium Plan",
            price: "$135",
            period: "/month",
            features: [
                "Everything in Smart Plan",
                "1-on-1 mentoring sessions",
                "Live doubt clearing",
                "Interview preparation",
                "Job referral assistance",
                "Priority support"
            ],
            popular: true
        },
        {
            name: "Custom",
            price: "Contact",
            period: "for pricing",
            features: [
                "Customized curriculum",
                "Dedicated mentor",
                "Flexible scheduling",
                "Corporate training",
                "Bulk pricing available"
            ],
            popular: false
        }
    ];

    const testimonials = [
        {
            name: "Arjun",
            role: "Software Engineer",
            company: "Google",
            image: "/api/placeholder/50/50",
            content: "TUF helped me crack Google! The systematic approach and quality content made all the difference."
        },
        {
            name: "Priya Singh",
            role: "SDE-2",
            company: "Amazon",
            image: "/api/placeholder/50/50",
            content: "Amazing platform with excellent problem explanations. Highly recommend for interview preparation."
        },
        {
            name: "Rohit Kumar",
            role: "Senior Developer",
            company: "Microsoft",
            image: "/api/placeholder/50/50",
            content: "The structured learning path and mentor support helped me transition into tech successfully."
        }
    ];

    const faqs = [
        {
            question: "What programming languages are supported?",
            answer: "We support all major programming languages including C++, Java, Python, JavaScript, and more."
        },
        {
            question: "Are there any prerequisites for taking this course?",
            answer: "Basic programming knowledge is helpful but not required. We start from fundamentals."
        },
        {
            question: "How long do I have access to the course content?",
            answer: "You get lifetime access to all course materials and updates with any paid plan."
        },
        {
            question: "Can I get a refund if I&apos;m not satisfied?",
            answer: "Yes, we offer a 30-day money-back guarantee if you&apos;re not satisfied with the course."
        },
        {
            question: "Do you provide job placement assistance?",
            answer: "Yes, Premium plan includes job referral assistance and interview preparation support."
        }
    ];

    // Add a reusable button class for 3D gradient effect (primary CTA)
    const button3D =
        'relative z-50 bg-gradient-to-b from-orange-400 to-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition-all duration-200 cursor-pointer';
    const buttonOverlay =
        'absolute inset-0 rounded-full bg-white/10 mix-blend-overlay pointer-events-none';
    const buttonText = 'relative z-10';
    // Outlined/secondary button style
    const buttonOutline =
        'border border-orange-500 text-orange-500 font-semibold px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer bg-transparent';

    return (
        <motion.div
            className="min-h-screen bg-black text-white pt-20 sm:pt-24"
            initial="hidden"
            animate="show"
            variants={fadeIn}
        >
            {/* Header */}
            <motion.div
                className="relative min-h-screen bg-black font-sans text-gray-100 overflow-hidden"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                {/* Background TUF+ Text */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        height={2000} width={2000}
                        src="/tuf-logo.png"
                        alt="TUF Logo"
                        className="w-full h-full object-cover opacity-20 mx-auto select-none"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-150 bg-gradient-to-t from-black to-transparent pointer-events-none z-40" />
                </div>

                



                {/* Header Section */}
                <motion.header
                    className="bg-black fixed top-0 left-0 w-full z-50 shadow-lg"
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: easeOut }}
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                        <div className="flex items-center justify-between w-full sm:w-auto">
                            {/* Logo */}
                            <div className="text-2xl font-bold">
                                <Image src="/tuf-logo.png" height={60} width={60} alt="" />
                            </div>
                            {/* Hamburger */}
                            <button className="sm:hidden ml-auto" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            </button>
                        </div>
                        {/* Navigation Links */}
                        <nav className={`flex-col sm:flex-row sm:flex space-y-2 sm:space-y-0 sm:space-x-6 w-full sm:w-auto ${navOpen ? 'flex' : 'hidden sm:flex'} bg-black sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none z-50`}> 
                            <a href="#" className="text-gray-300 hover:text-white transition-colors block">Home</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors block">Pricing</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors block">Resources</a>
                        </nav>
                        <div className="flex gap-2 mt-2 sm:mt-0">
                            <button className={buttonOutline + ' text-xs sm:text-sm px-3 sm:px-4 py-2'}>Sign Up</button>
                            <button className={buttonOutline + ' text-xs sm:text-sm px-3 sm:px-4 py-2'}>Sign In</button>
                        </div>
                    </div>
                </motion.header>

                {/* Main Content Section */}
                <main className="flex flex-col items-center justify-center text-center py-20 px-4 relative z-10 mt-11">
                    {/* Sub-heading */}
                    <p className="text-gray-400 text-sm mb-2 border-2 rounded-2xl px-2 bg-zinc-900 border-zinc-600">Crafted by Top Engineers</p>
                    {/* Main Heading */}
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-snug sm:leading-tight mb-4 sm:mb-6">
                        upskill yourself with just <br />
                        <span className="text-orange-500">one subscription.</span>
                    </h1>
                    {/* Description */}
                    <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-xs sm:max-w-xl">
                        Make automations with the simplest builder <br />
                        you will ever see
                    </p>
                    {/* Call to Action Button */}
                    <button className={button3D + ' text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-2'}>
                        <span className={buttonOverlay}></span>
                        <span className={buttonText}>Get Started</span>
                    </button>
                </main>
            </motion.div>


            {/* Hero Section */}
            <motion.section
                className="relative overflow-hidden min-h-[60vh] sm:h-screen"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="absolute inset-0 bg-black"></div>
                <div className="relative container mx-auto px-4 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-2xl sm:text-4xl mb-2 sm:mb-4 text-gray-300">
                            use code <span className='text-4xl text-orange-500'>&quot;payday&quot;</span>
                        </p>
                        <p className="text-sm mb-8 text-zinc-400">
                            <span className='text-zinc-300'>Lifetime Access</span> won&apos;t last forever - Grab <br />it while you can
                        </p>


                        {/* Countdown Timer */}
                        <div className={`mb-4 ${mitr.className}`}>
                            <div className="flex justify-center space-x-4 text-white">
                                <div className="rounded-lg p-3 min-w-[60px] text-center">
                                    <div className="text-5xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                                    <div className="text-xs text-gray-400 tracking-wide">DAYS</div>
                                </div>
                                <div className="rounded-lg p-3 min-w-[60px] text-center">
                                    <div className="text-5xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                                    <div className="text-xs text-gray-400 tracking-wide">HOURS</div>
                                </div>
                                <div className="rounded-lg p-3 min-w-[60px] text-center">
                                    <div className="text-5xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                                    <div className="text-xs text-gray-400 tracking-wide">MIN</div>
                                </div>
                                <div className="rounded-lg p-3 min-w-[60px] text-center">
                                    <div className="text-5xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                                    <div className="text-xs text-gray-400 tracking-wide">SEC</div>
                                </div>
                            </div>
                        </div>

                        <button className={button3D}>
                            <span className={buttonOverlay}></span>
                            <span className={buttonText}>Grab Now</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                className="py-20 bg-black h-screen"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="container mx-auto px-4">
                    <div className='flex flex-col sm:flex-row justify-between gap-2 sm:gap-0'>
                        <div className="mb-8 sm:mb-16">
                            <h2 className="text-2xl sm:text-4xl mb-2 sm:mb-4 leading-snug sm:leading-0.5">everything you need</h2>
                            <span className="block text-orange-500 text-2xl sm:text-4xl break-words">to crack interviews</span>
                        </div>
                        <div className='hidden md:flex flex-wrap justify-center gap-2 items-center overflow-x-auto pb-2'>
                            <button className={buttonOutline}>DSA</button>
                            <button className={buttonOutline}>Core</button>
                            <button className={buttonOutline}>System Design</button>
                            <button className={buttonOutline}>Aptitude</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-6 sm:mb-0">
                        {/* Card 1 */}
                        <div className="bg-zinc-900 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-semibold">DSA</h3>
                            <p className="text-gray-400">Designed for beginners as well as experts to prepare DSA</p>
                            <ul className="text-sm text-gray-100 space-y-2 pt-2">
                                <li className="flex items-center gap-2">✔️ <span>19+ Topics</span></li>
                                <li className="flex items-center gap-2">✔️ <span>16+ Contests</span></li>
                                <li className="flex items-center gap-2">✔️ <span>473+ Problems</span></li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-zinc-900 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-semibold">DSA (Concept Revision)</h3>
                            <p className="text-gray-400">Suitable for people looking to study concepts for similar kind of problems</p>
                            <ul className="text-sm text-gray-100 space-y-2 pt-2">
                                <li className="flex items-center gap-2">✔️ <span>40+ Topics</span></li>
                                <li className="flex items-center gap-2">✔️ <span>199+ Contests</span></li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-zinc-900 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-semibold">DSA (Quick Revision)</h3>
                            <p className="text-gray-400">Suitable to bump up your last moment confidence with quick revision</p>
                            <ul className="text-sm text-gray-100 space-y-2 pt-2">
                                <li className="flex items-center gap-2">✔️ <span>10+ Topics</span></li>
                                <li className="flex items-center gap-2">✔️ <span>79+ Contests</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </motion.section>

            {/* Comparison Table */}
            <motion.section
                className="py-20 bg-black mb-20"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="container mx-auto px-4">
                    <div className='flex flex-col sm:flex-row justify-between gap-2 sm:gap-0'>
                        <div className="mb-8 sm:mb-16">
                            <h2 className="text-2xl sm:text-4xl mb-2 sm:mb-4 leading-snug sm:leading-0.5">compare what</h2>
                            <span className="block text-orange-500 text-2xl sm:text-4xl break-words">you learn</span>
                        </div>
                        <div className='flex gap-2 items-center '>
                            <button className={buttonOutline}>TUF free</button>
                            <button className={buttonOutline}>Other platforms</button>
                        </div>
                    </div>



                    <div className="flex flex-wrap justify-between gap-4">
                        <div className="max-w-full md:max-w-5xl mx-auto rounded-2xl overflow-x-auto bg-zinc-900 shadow-lg relative text-xs sm:text-sm">
                            {/* Header */}
                            <div className="grid grid-cols-3 text-sm md:text-base bg-zinc-800 text-white font-semibold px-6 py-4 border-b border-zinc-700">
                                <div className="">Features</div>
                                <div className="text-center text-orange-400 font-logo text-lg">TUF</div>
                                <div className="text-center">Other platforms</div>
                            </div>

                            {/* Features */}
                            {[
                                ['DSA (Basics to Advanced)', 'Yes (Curated list of beginners with practice set)', 'Yes'],
                                ['Live Content', 'No (Too crowded and chaotic)', 'Yes'],
                                ['Recorded Content', 'Yes (Broken down to smaller parts to save time)', 'Yes'],
                                ['DSA (Pattern Wise)', 'Yes', 'No'],
                                ['1000+ Practice Problems', 'Yes', 'No (Apart from very few)'],
                                ['Customised Roadmap', 'Yes', 'No'],
                                ['Course + Platform', 'Yes', 'No (Apart from few dead ones)'],
                                ['Notes Downloader to Google Docs', 'Yes', 'No'],
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-3 px-6 py-4 border-b border-zinc-800 text-sm text-gray-300">
                                    <div className="">{row[0]}</div>
                                    <div className="text-center text-white">{row[1]}</div>
                                    <div className="text-center text-white">{row[2]}</div>
                                </div>
                            ))}

                            {/* Fade effect */}
                            <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black to-transparent pointer-events-none z-40" />

                            {/* Button */}

                            <div className='text-center mb-6 sm:mb-10'>
                                <button className={button3D}>
                                    <span className={buttonOverlay}></span>
                                    <span className={buttonText}>Show all features</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Pricing Section */}
            <motion.section
                className="py-20 bg-black mt-16 sm:mt-24"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
            <motion.div
                className="relative min-h-screen bg-black font-sans text-gray-100 overflow-hidden"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
            <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        height={2000} width={2000}
                        src="/tuf-logo.png"
                        alt="TUF Logo"
                        className="w-full h-full object-cover opacity-20 mx-auto select-none"
                    />
                    
                <div className="absolute bottom-0 left-0 w-full h-150 bg-gradient-to-t from-black to-transparent pointer-events-none z-40" />
                </div>

                

                <div className="container mx-auto px-4">
                    <div>
                        <div className="text-center mb-16 leading-1">
                            <p className="text-4xl">affordable plans</p>
                            <p className="text-orange-500 text-4xl mb-4">for everyone</p>
                            <br />
                            <p className='text-zinc-400 text-sm'>Choose the best <span>fit for you</span></p>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-full md:max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <div key={index} className={`rounded-xl p-8 relative ${plan.popular
                                ? 'bg-zinc-900 text-white'
                                : 'bg-zinc-900 border border-gray-700'
                                }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zinc-600 px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <div className="text-4xl font-bold mb-2">
                                        {plan.price}
                                        <span className="text-lg font-normal">{plan.period}</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <Check className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={button3D + ' w-full py-3'}>
                                    <span className={buttonOverlay}></span>
                                    <span className={buttonText}>{plan.name === 'Custom' ? 'Contact Us' : 'Get Started'}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                </motion.div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                className="py-20 bg-black h-screen"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl mb-4 leading-0.5">what users have to say</h2>
                        <p className="text-3xl text-orange-500">
                            about the v3 launch of{" "}
                            <Image
                                src="/tuf-logo.png"
                                alt="TUF Logo"
                                width={70}
                                height={70}
                                className="inline align-middle h-12 w-auto"
                            />
                        </p>

                    </div>
                    <div className="relative">
                        {/* Testimonials Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 sm:mb-0">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-zinc-800 rounded-xl p-8">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mr-4">
                                            <User className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">&quot;{testimonial.name}&quot;</h4>
                                            <p className="text-sm text-gray-400">&quot;{testimonial.role}&quot;</p>
                                            <p className="text-sm text-orange-500">&quot;{testimonial.company}&quot;</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic">&quot;{testimonial.content}&quot;</p>
                                    <div className="flex mt-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Fade Effect */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-40" />
                    </div>

                    <div className='text-center mb-6 sm:mb-10'>
                        <button className={button3D}>
                            <span className={buttonOverlay}></span>
                            <span className={buttonText}>See More</span>
                        </button>
                    </div>


                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                className="py-20 bg-black mt-16 sm:mt-24"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-3xl mb-4 leading-0.5">frequently asked</p>
                        <p className="text-orange-500 text-3xl">questions</p>
                    </div>
                    <div className="max-w-full md:max-w-3xl mx-auto mb-8 sm:mb-12">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="cursor-pointer w-full bg-zinc-900 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
                                    style={{ marginBottom: expandedFAQ === index ? 0 : '0.5rem' }}
                                >
                                    <span className="font-normal text-sm sm:text-base">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFAQ === index && (
                                    <div className="bg-zinc-900 rounded-b-lg p-4 sm:p-6 -mt-2">
                                        <p className="text-gray-300 text-sm sm:text-base">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>




            <motion.div
                className="relative min-h-screen bg-black font-sans text-gray-200 overflow-hidden"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
            >
                {/* Background TUF+ Text */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        height={9000} width={9000}
                        src="/tuf-logo.png"
                        alt="TUF Logo"
                        className="w-full h-full object-cover opacity-40 mx-auto select-none"
                    />
                </div>
            </motion.div>

            {/* Footer */}
            <motion.footer
                className="bg-[#0a0a0a] text-gray-400 py-12"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
            >
                <div className="max-w-full md:max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
                    {/* Left - Logo & Description */}
                    <div className="md:col-span-1">
                        <div className="text-3xl font-bold text-white mb-4">
                        <Image
                        height={70} width={70}
                        src="/tuf-logo.png"
                        alt="TUF Logo"
                       
                    />
                        </div>
                        <p className="text-sm mb-4 leading-relaxed">
                            The best place to learn <span className="text-white font-medium">data Structures, algorithms, most asked coding interview questions, real interview experiences</span>{' '}
                            <span className="text-orange-500 font-medium">free of cost.</span>
                        </p>
                        {/* <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                            <p className="text-sm">All systems are operational</p>
                        </div> */}
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-orange-500 uppercase text-sm font-semibold mb-4 tracking-wider">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Cancellation & Refund Policy</a></li>
                        </ul>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h4 className="text-orange-500 uppercase text-sm font-semibold mb-4 tracking-wider">Quick Access</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">Striver&apos;s DSA Sheet</a></li>
                            <li><a href="#">Technical Blogs</a></li>
                            <li><a href="#">CS Subjects</a></li>
                            <li><a href="#">Striver&apos;s CP Sheet</a></li>
                        </ul>
                    </div>

                    {/* DSA Sheets */}
                    <div>
                        <h4 className="text-orange-500 uppercase text-sm font-semibold mb-4 tracking-wider">DSA Sheets</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">Striver&apos;s SDE Sheet</a></li>
                            <li><a href="#">Striver&apos;s A2Z DSA Playlist</a></li>
                            <li><a href="#">SDE Core Sheet</a></li>
                            <li><a href="#">Striver&apos;s CP Sheet</a></li>
                        </ul>
                    </div>

                    {/* DSA Playlist */}
                    <div>
                        <h4 className="text-orange-500 uppercase text-sm font-semibold mb-4 tracking-wider">DSA Playlist</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">Array Series</a></li>
                            <li><a href="#">Graph Series</a></li>
                            <li><a href="#">DP Series</a></li>
                            <li><a href="#">LinkedList Series</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-xs text-zinc-600 mt-10 border-t border-zinc-800 pt-6">
                    &copy; 2025 TUF. All rights reserved.
                </div>
            </motion.footer>

        </motion.div>
    );
};

export default LandingPage;