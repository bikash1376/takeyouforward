"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, Star, User, Shield, BookOpen, Users } from 'lucide-react';
import { Share_Tech_Mono } from 'next/font/google';
import Image from 'next/image';

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});



const LandingPage = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 12,
        minutes: 53,
        seconds: 26
    });

    const [expandedFAQ, setExpandedFAQ] = useState(null);

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

    const toggleFAQ = (index:any) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const features = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "1000+ Coding Problems",
            description: "Master DSA with our comprehensive problem set"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Live Classes",
            description: "Interactive sessions with industry experts"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Doubt Support",
            description: "Get your queries resolved instantly"
        }
    ];

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
            question: "Can I get a refund if I'm not satisfied?",
            answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course."
        },
        {
            question: "Do you provide job placement assistance?",
            answer: "Yes, Premium plan includes job referral assistance and interview preparation support."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="relative min-h-screen bg-black font-sans text-gray-100 overflow-hidden">
                {/* Background TUF+ Text */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src="/tuf-logo.png"
                        alt="TUF Logo"
                        className="w-full h-full object-cover opacity-10 mx-auto select-none"
                    />
                </div>



                {/* Header Section */}
                <header className="bg-black relative z-10">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            {/* Logo */}
                            <div className="text-2xl font-bold">
                             <Image src="/tuf-logo.png" height={60} width={60} alt="" />
                            </div>
                            {/* Navigation Links */}
                            <nav className="hidden md:flex space-x-6">
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            {/* Sign In Button */}
                            <button className="text-gray-300 hover:text-white transition-colors">Sign Up</button>
                            {/* Get Started Button */}
                            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors">
                                Sign In
                            </button>
                    
                            <button className="text-gray-300 hover:text-white transition-colors">
                    
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content Section */}
                <main className="flex flex-col items-center justify-center text-center py-20 px-4 relative z-10 mt-11">
                    {/* Sub-heading */}
                    <p className="text-gray-400 text-sm mb-2 border-2 rounded-2xl px-2 bg-zinc-900 border-zinc-600">Crafted by Top Engineers</p>
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                        upskill yourself with just <br />
                        <span className="text-orange-500">one subscription.</span>
                    </h1>
                    {/* Description */}
                    <p className="text-lg text-gray-400 mb-8 max-w-xl">
                        Make automations with the simplest builder <br />
                        you will ever see
                    </p>
                    {/* Call to Action Button */}
                    <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-lg transition-colors shadow-lg">
                        Get Started
                    </button>
                </main>
            </div>


            {/* Hero Section */}
            <section className="relative overflow-hidden h-screen">
                <div className="absolute inset-0 bg-black"></div>
                <div className="relative container mx-auto px-4 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-4xl md:text-4xl mb-4 text-gray-300">
                            use code <span className='text-4xl text-orange-500'>"payday"</span>
                        </p>
                        <p className="text-sm mb-8 text-zinc-400">
                            <span className='text-zinc-300'>Lifetime Access</span> won't last forever - Grab <br />it while you can
                        </p>


                        {/* Countdown Timer */}
                       <div className={`mb-4 ${shareTechMono.className}`}>
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

                        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg transition-colors">
                            Grab Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-black h-screen">
                <div className="container mx-auto px-4">
                    <div className='flex justify-between'>
                        <div className="mb-16">
                            <h2 className="text-4xl mb-4">everything you need</h2>
                            <p className="text-orange-500 text-4xl">to crack interviews</p>
                        </div>
                        <div className='flex gap-2 items-center '>
                            <button className='px-4 py-2 rounded-full bg-orange-500'>DSA</button>
                            <button className='px-4 py-2 rounded-full bg-zinc-800'>Core</button>
                            <button className='px-4 py-2 rounded-full bg-zinc-800'>System Design</button>
                            <button className='px-4 py-2 rounded-full bg-zinc-800'>Aptitude</button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
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
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-black mb-20">
                <div className="container mx-auto px-4">
                    <div className='flex justify-between'>
                        <div className="mb-16">
                            <h2 className="text-4xl mb-4">compare what</h2>
                            <p className="text-orange-500 text-4xl">you learn</p>
                        </div>
                        <div className='flex gap-2 items-center '>
                            <button className='px-4 py-2 rounded-full bg-orange-500'>TUF free</button>
                            <button className='px-4 py-2 rounded-full bg-zinc-800'>Other platforms</button>

                        </div>
                    </div>



                    <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden bg-zinc-900 shadow-lg relative">
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

                        <div className='text-center'>
                            <button className=" relative z-50 bg-gradient-to-b from-orange-400 to-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-orange-300 hover:to-orange-500 transition-all duration-200">
                                <span className=" absolute inset-0 rounded-full bg-white/10 mix-blend-overlay pointer-events-none"></span>
                                <span className="relative z-10">Show all features</span>
                            </button>

                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-black">
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

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular
                                    ? 'bg-white text-orange-500 hover:bg-gray-100'
                                    : 'bg-orange-500 text-white hover:bg-orange-600'
                                    }`}>
                                    {plan.name === 'Custom' ? 'Contact Us' : 'Get Started'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-black h-screen">
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
                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-zinc-800 rounded-xl p-8">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mr-4">
                                            <User className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                                            <p className="text-sm text-orange-500">{testimonial.company}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
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

                    <div className='text-center'>
                        <button className=" relative z-50 bg-gradient-to-b from-orange-400 to-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition-all duration-200 cursor-pointer">
                            <span className=" absolute inset-0 rounded-full bg-white/10 mix-blend-overlay pointer-events-none"></span>
                            <span className="relative z-10">See More</span>
                        </button>

                    </div>


                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-3xl mb-4 leading-0.5">frequently asked</p>
                        <p className="text-orange-500 text-3xl">questions</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full bg-zinc-900 rounded-lg px-6 py-4 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
                                >
                                    <span className="font-normal">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''
                                        }`} />
                                </button>
                                {expandedFAQ === index && (
                                    <div className="bg-zinc-900 rounded-b-lg p-6 -mt-2">
                                        <p className="text-gray-300">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            

    
      <div className="relative min-h-screen bg-black font-sans text-gray-200 overflow-hidden">
                {/* Background TUF+ Text */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                    height={9000} width={9000}
                        src="/tuf-logo.png"
                        alt="TUF Logo"
                        className="w-full h-full object-cover opacity-40 mx-auto select-none"
                    />
                </div>
                </div>

            {/* Footer */}
            <footer className="bg-[#0a0a0a] text-gray-400 py-12">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-10">
                    {/* Left - Logo & Description */}
                    <div className="md:col-span-1">
                        <div className="text-3xl font-bold text-white mb-4">
                            TUF<span className="text-orange-500">↗</span>
                        </div>
                        <p className="text-sm mb-4 leading-relaxed">
                            The best place to learn <span className="text-white font-medium">data Structures, algorithms, most asked coding interview questions, real interview experiences</span>{' '}
                            <span className="text-orange-500 font-medium">free of cost.</span>
                        </p>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                            <p className="text-sm">All systems are operational</p>
                        </div>
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
                            <li><a href="#">Striver's DSA Sheet</a></li>
                            <li><a href="#">Technical Blogs</a></li>
                            <li><a href="#">CS Subjects</a></li>
                            <li><a href="#">Striver's CP Sheet</a></li>
                        </ul>
                    </div>

                    {/* DSA Sheets */}
                    <div>
                        <h4 className="text-orange-500 uppercase text-sm font-semibold mb-4 tracking-wider">DSA Sheets</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">Striver's SDE Sheet</a></li>
                            <li><a href="#">Striver's A2Z DSA Playlist</a></li>
                            <li><a href="#">SDE Core Sheet</a></li>
                            <li><a href="#">Striver's CP Sheet</a></li>
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
            </footer>

        </div>
    );
};

export default LandingPage;