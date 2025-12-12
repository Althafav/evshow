import React from 'react';
import Section from '@/components/UI/Section';
import CTAButton from '@/components/UI/CTAButton';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function thankyou() {
  const router = useRouter();
  const user = router.query.user as string;

  return (
    <Section className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-white mb-4">
        Thank You for Registering Your Interest{user ? `, ${user}` : ''}!
      </h1>
      <p className="text-lg text-slate-200/90 mb-8 max-w-2xl">
        We appreciate your interest in EV World 2026. Our team will be in touch soon with more details about the event, including updates on exhibitors, speakers, and how you can participate.
      </p>
      <CTAButton buttonname="Back to Home" buttonlink="/" />
    </Section>
  );
}