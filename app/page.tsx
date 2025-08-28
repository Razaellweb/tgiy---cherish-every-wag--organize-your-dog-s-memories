"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Avatar } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";

const dogPhotos = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/women/77.jpg",
];

const features = [
  {
    icon: "📸",
    title: "Effortless Uploads",
    desc: "Snap, upload, and save every wagging moment in seconds.",
  },
  {
    icon: "🗂️",
    title: "Smart Organization",
    desc: "Auto-sort by dog, date, or adventure—never lose a memory.",
  },
  {
    icon: "☁️",
    title: "Cloud Sync",
    desc: "Connect Google Drive & Dropbox for seamless backup.",
  },
  {
    icon: "🎉",
    title: "Free Forever",
    desc: "No hidden fees. Enjoy unlimited memories at no cost!",
  },
];

const testimonials = [
  {
    name: "Jessie B.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Tgiy made it so easy to relive my puppy's first year. The playful design makes me smile every time!",
  },
  {
    name: "Carlos M.",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    text: "Finally, all my dog photos in one place. The smart sorting is a game changer!",
  },
  {
    name: "Priya S.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "I love sharing albums with friends. Tgiy is pawsitively perfect!",
  },
];

const faqs = [
  {
    q: "Is Tgiy really free?",
    a: "Yes! Tgiy is free to use, with no hidden fees or subscriptions.",
  },
  {
    q: "Can I organize photos for multiple dogs?",
    a: "Absolutely! Create profiles for each pup and keep their memories separate and organized.",
  },
  {
    q: "How do I connect Google Drive or Dropbox?",
    a: "Just head to settings in the app and follow the simple integration steps.",
  },
  {
    q: "Is my data private and secure?",
    a: "We use industry-standard encryption and never share your data without your permission.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white font-inter">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-extrabold text-blue-500 tracking-tight rounded-lg bg-blue-100 dark:bg-blue-900 px-2 py-1">🐶 tgiy</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/signin" className="text-base font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors">Sign In</Link>
          <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-full shadow-lg transition-all focus:ring-2 focus:ring-blue-400">
            <Link href="/signup" aria-label="Get Started Free">Get Started Free</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-blue-700 dark:text-blue-300 drop-shadow-sm">
            Cherish Every Wag
            <span className="block text-pink-500 dark:text-pink-300">Organize Your Dog's Memories</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-xl">
            Tgiy is the easiest way for dog owners and pet lovers to store, organize, and relive their favorite dog photos—all in one colorful, friendly app.
          </p>
          <div className="flex gap-4 mt-2">
            <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-full shadow-xl transition-all focus:ring-2 focus:ring-pink-400 animate-bounce-slow">
              <Link href="/signup" aria-label="Get Started Free">Get Started Free</Link>
            </Button>
            <Link href="#features" className="inline-flex items-center text-blue-500 hover:underline font-semibold text-lg transition-colors">See Features →</Link>
          </div>
        </div>
        {/* Visual Collage */}
        <div className="flex-1 flex justify-center items-center relative min-h-[320px] md:min-h-[400px]">
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
            {/* Dog photo collage */}
            {dogPhotos.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Happy dog ${i + 1}`}
                className={`absolute rounded-2xl shadow-xl border-4 border-white dark:border-gray-800 transition-transform duration-500 ease-in-out hover:scale-105 animate-float${i % 3}`}
                style={{
                  top: `${40 + 80 * Math.sin((i / dogPhotos.length) * 2 * Math.PI)}px`,
                  left: `${40 + 80 * Math.cos((i / dogPhotos.length) * 2 * Math.PI)}px`,
                  width: '96px',
                  height: '96px',
                  zIndex: 10 - i,
                }}
              />
            ))}
            {/* Center paw print */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-300 dark:bg-yellow-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800 animate-pulse">
              <span className="text-5xl">🐾</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="flex flex-col items-center gap-4 px-6 md:px-12 lg:px-24 py-6" aria-label="Trusted by dog lovers everywhere">
        <span className="uppercase text-xs tracking-widest text-gray-500 dark:text-gray-400 font-semibold">Trusted by dog lovers everywhere</span>
        <div className="flex flex-wrap gap-4 justify-center items-center mt-2">
          {dogPhotos.map((src, i) => (
            <Avatar key={src} className="w-10 h-10 border-2 border-pink-300 dark:border-pink-600 shadow-md">
              <img src={src} alt={`Dog lover ${i + 1}`} />
            </Avatar>
          ))}
          <span className="text-base text-gray-600 dark:text-gray-300 ml-2">+10,000 happy pups & their humans</span>
        </div>
      </section>

      <Separator className="my-8 mx-auto w-2/3" />

      {/* Features & Benefits */}
      <section id="features" className="flex flex-col items-center px-6 md:px-12 lg:px-24 py-12 gap-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-2">Why You'll Love Tgiy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {features.map((f, i) => (
            <div key={f.title} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 border-2 border-blue-100 dark:border-blue-900 hover:scale-105 transition-transform duration-300 group">
              <span className="text-4xl mb-2 group-hover:animate-wiggle" aria-hidden>{f.icon}</span>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-200 text-center">{f.title}</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="flex flex-col items-center px-6 md:px-12 lg:px-24 py-12 gap-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-500 dark:text-pink-300 mb-2">How It Works</h2>
        <ol className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-center">
          <li className="flex flex-col items-center gap-2 bg-yellow-100 dark:bg-yellow-900 rounded-xl p-6 shadow-md w-full md:w-1/3">
            <span className="text-3xl">1️⃣</span>
            <span className="font-semibold text-lg">Sign Up & Add Your Pup</span>
            <span className="text-gray-600 dark:text-gray-300 text-center">Create a profile for each dog and start uploading memories.</span>
          </li>
          <li className="flex flex-col items-center gap-2 bg-blue-100 dark:bg-blue-900 rounded-xl p-6 shadow-md w-full md:w-1/3">
            <span className="text-3xl">2️⃣</span>
            <span className="font-semibold text-lg">Organize & Relive</span>
            <span className="text-gray-600 dark:text-gray-300 text-center">Sort, tag, and browse your dog's best moments anytime.</span>
          </li>
          <li className="flex flex-col items-center gap-2 bg-pink-100 dark:bg-pink-900 rounded-xl p-6 shadow-md w-full md:w-1/3">
            <span className="text-3xl">3️⃣</span>
            <span className="font-semibold text-lg">Share the Joy</span>
            <span className="text-gray-600 dark:text-gray-300 text-center">Share albums with friends, family, or the whole dog park!</span>
          </li>
        </ol>
      </section>

      {/* Testimonials & Reviews */}
      <section className="flex flex-col items-center px-6 md:px-12 lg:px-24 py-12 gap-8 bg-gradient-to-r from-pink-50 via-yellow-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-2">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {testimonials.map((t, i) => (
            <div key={t.name} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4 border-2 border-pink-100 dark:border-pink-900">
              <Avatar className="w-16 h-16 border-2 border-yellow-300 dark:border-yellow-600 shadow-md">
                <img src={t.avatar} alt={`Avatar of ${t.name}`} />
              </Avatar>
              <p className="text-base text-gray-700 dark:text-gray-200 text-center italic">“{t.text}”</p>
              <span className="font-semibold text-pink-500 dark:text-pink-300">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* App Download Section (CTA) */}
      <section className="flex flex-col items-center px-6 md:px-12 lg:px-24 py-12 gap-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-500 dark:text-yellow-300 mb-2">Ready to Wag & Organize?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 text-center max-w-2xl">Join thousands of dog lovers making memories with Tgiy. Start for free—your pups will thank you!</p>
        <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-10 py-4 rounded-full shadow-xl transition-all focus:ring-2 focus:ring-blue-400 animate-bounce-slow">
          <Link href="/signup" aria-label="Get Started Free">Get Started Free</Link>
        </Button>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col items-center px-6 md:px-12 lg:px-24 py-12 gap-8 bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-2">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-lg font-semibold text-pink-500 dark:text-pink-300">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 dark:text-gray-200">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-8 gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 mt-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-blue-500">🐶 tgiy</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">© {new Date().getFullYear()} All wags reserved.</span>
        </div>
        <div className="flex gap-4">
          <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:underline">Features</Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Contact</Link>
          <Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:underline">Privacy</Link>
        </div>
      </footer>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float0 { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
        @keyframes float1 { 0% { transform: translateY(0); } 50% { transform: translateY(12px); } 100% { transform: translateY(0); } }
        @keyframes float2 { 0% { transform: translateX(0); } 50% { transform: translateX(-10px); } 100% { transform: translateX(0); } }
        .animate-float0 { animation: float0 4s ease-in-out infinite; }
        .animate-float1 { animation: float1 5s ease-in-out infinite; }
        .animate-float2 { animation: float2 6s ease-in-out infinite; }
        @keyframes wiggle { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
        .group-hover\:animate-wiggle:hover { animation: wiggle 0.4s; }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
      `}</style>
    </main>
  );
}
