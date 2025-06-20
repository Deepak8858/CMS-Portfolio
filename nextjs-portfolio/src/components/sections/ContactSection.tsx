'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../../features/ContactForm';
import { sanity } from '../../lib/sanityClient';

export default function ContactSection() {
  const [contact, setContact] = useState<any>(null);

  useEffect(() => {
    const fetchContact = async () => {
      const data = await sanity.fetch(`*[_type == "contact"][0]`);
      setContact(data);
    };
    fetchContact();
  }, []);

  return (
    <motion.section
      id="contact"
      className="w-full py-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold mb-8 text-[#18181B]">Contact</h2>
      <ContactForm />
      {contact && (
        <div className="w-full max-w-lg bg-white border border-[#E4E4E7] rounded-2xl shadow p-8 flex flex-col gap-6 mt-8 text-black">
          <div className="text-[#71717A] text-lg mb-4">
            <div>
              Email:{' '}
              <a
                href={`mailto:${contact.email}`}
                className="text-blue-500 hover:underline"
              >
                {contact.email}
              </a>
            </div>
            <div>
              Phone: <span>{contact.phone}</span>
            </div>
            <div>
              Location: <span>{contact.location}</span>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            {contact.socialLinks?.map((link: any, i: number) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
}
