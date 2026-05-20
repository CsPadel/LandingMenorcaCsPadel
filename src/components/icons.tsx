import React from 'react';

interface P { className?: string }

const svg = (paths: React.ReactNode, cls?: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cls}
    aria-hidden="true"
  >{paths}</svg>
);

export const X = ({ className }: P) => svg(<><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>, className);
export const Menu = ({ className }: P) => svg(<><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></>, className);
export const ArrowRight = ({ className }: P) => svg(<><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>, className);
export const ChevronDown = ({ className }: P) => svg(<path d="m6 9 6 6 6-6"/>, className);
export const ChevronLeft = ({ className }: P) => svg(<path d="m15 18-6-6 6-6"/>, className);
export const ChevronRight = ({ className }: P) => svg(<path d="m9 18 6-6-6-6"/>, className);
export const Users = ({ className }: P) => svg(<>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
  <path d="M16 3.128a4 4 0 0 1 0 7.744"/>
  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
  <circle cx="9" cy="7" r="4"/>
</>, className);
export const Sparkles = ({ className }: P) => svg(<>
  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>
  <path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>
</>, className);
