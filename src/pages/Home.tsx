import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1 },
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

const features = [
  {
    name: 'Expertise professionnelle',
    description: 'Des instructeurs qualifiés et passionnés pour vous accompagner dans votre progression.',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    name: 'Installations modernes',
    description: 'Un dojo spacieux et bien équipé pour une pratique optimale du judo.',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
  {
    name: 'Esprit communautaire',
    description: 'Une ambiance familiale et chaleureuse pour progresser ensemble.',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative h-screen">
        <div className="mx-auto max-w-7xl h-full">
          <div className="grid lg:grid-cols-2 gap-8 h-full items-center px-6">
            {/* Left column */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={container}
              className="max-w-xl"
            >
              <motion.h1
                variants={item}
                className="text-6xl font-bold tracking-tight text-gray-900 mb-8"
              >
                JC7 Judo
              </motion.h1>
              <motion.p
                variants={item}
                className="text-lg leading-8 text-gray-600 mb-12"
              >
                Découvrez l'art du judo dans un environnement familial et professionnel. 
                Notre club accueille tous les niveaux, des débutants aux compétiteurs.
              </motion.p>
              <motion.div
                variants={item}
                className="flex gap-4"
              >
                <Link
                  to="/registration"
                  className="rounded-md bg-jc7-red px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
                >
                  Commencer maintenant
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-semibold leading-6 text-gray-900 flex items-center hover:text-jc7-red transition-colors"
                >
                  En savoir plus <span aria-hidden="true" className="ml-1">→</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right column */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl bg-gray-900 shadow-xl">
                <div className="p-6">
                  <div className="h-[400px] w-full bg-gradient-to-b from-jc7-red to-black rounded-lg flex items-center justify-center text-white">
                    Image de judokas en action
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="relative bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <motion.h2
              variants={item}
              className="text-base font-semibold leading-7 text-jc7-red"
            >
              Pourquoi nous choisir ?
            </motion.h2>
            <motion.p
              variants={item}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900"
            >
              Une expérience unique d'apprentissage
            </motion.p>
            <motion.p
              variants={item}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Découvrez ce qui fait la différence au JC7 Judo
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-7xl"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  variants={item}
                  className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-x-3">
                    <feature.icon
                      className="h-6 w-6 text-jc7-red"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
