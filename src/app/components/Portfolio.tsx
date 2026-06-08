"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Calendar, MapPin, Award, Users, Zap, Target, Shield, Bot, Cloud, Database, ArrowRight, Play, X, Check } from 'lucide-react';
import { FaChevronRight } from 'react-icons/fa';

interface Experience { title: string; company: string; date: string; location: string; points: string[]; metrics?: string[]; }
interface Project { title: string; impact: string; description: string; tech: string[]; github: string; category: string; metrics?: string; }
interface SkillCategory { name: string; icon: React.ReactNode; skills: string[]; }
interface RedTeamResult { score: number; detections: string[]; suggestions: string[]; severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; }

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [prompt, setPrompt] = useState('');
  const [selectedAttacks, setSelectedAttacks] = useState<string[]>([]);
  const [simResult, setSimResult] = useState<RedTeamResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [copied, setCopied] = useState(false);

  const navItems = [{ id: 'about', label: 'About' }, { id: 'experience', label: 'Experience' }, { id: 'skills', label: 'Skills' }, { id: 'projects', label: 'Projects' }, { id: 'simulator', label: 'Red Team Demo' }, { id: 'contact', label: 'Contact' }];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }), { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); };