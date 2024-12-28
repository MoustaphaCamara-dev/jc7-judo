import { useState } from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données à votre backend
    console.log('Données du formulaire:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="relative isolate bg-jc7-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <motion.div 
          variants={item}
          className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-jc7-black">Contactez-nous</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Une question ? N'hésitez pas à nous contacter. Notre équipe vous répondra dans les plus brefs délais.
            </p>
            <motion.div 
              variants={container}
              className="mt-10 space-y-4 text-base leading-7 text-gray-600"
            >
              <motion.div 
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="flex gap-x-4"
              >
                <dt className="flex-none">
                  <span className="sr-only">Adresse</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  123 Avenue du Judo
                  <br />
                  93120 La Courneuve
                  <br />
                  France
                </dd>
              </motion.div>
              <motion.div 
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="flex gap-x-4"
              >
                <dt className="flex-none">
                  <span className="sr-only">Téléphone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-jc7-red" href="tel:+33123456789">
                    +33 1 23 45 67 89
                  </a>
                </dd>
              </motion.div>
              <motion.div 
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="flex gap-x-4"
              >
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-jc7-red" href="mailto:contact@jc7judo.fr">
                    contact@jc7judo.fr
                  </a>
                </dd>
              </motion.div>
            </motion.div>

            {/* Google Maps */}
            <motion.div 
              variants={item}
              className="mt-10 h-[300px] w-full rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5762506484386!2d2.3899799999999997!3d48.9307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c7c1c0f0001%3A0x0!2s123%20Avenue%20du%20Judo%2C%2093120%20La%20Courneuve!5e0!3m2!1sfr!2sfr!4v1703743500000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          variants={item}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg">
              <motion.div 
                variants={container}
                className="px-6 py-8"
              >
                <motion.div 
                  variants={item}
                  className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
                >
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                      Prénom
                    </label>
                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      className="mt-2.5"
                    >
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                      Nom
                    </label>
                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      className="mt-2.5"
                    >
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                      />
                    </motion.div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      className="mt-2.5"
                    >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                      />
                    </motion.div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                      Téléphone
                    </label>
                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      className="mt-2.5"
                    >
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                      />
                    </motion.div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      className="mt-2.5"
                    >
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                      />
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div 
                  variants={item}
                  className="mt-8 flex justify-end"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="rounded-md bg-jc7-red px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Envoyer le message
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
