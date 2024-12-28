import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const values = [
  {
    name: "Respect",
    description: "Le respect mutuel est au cœur de notre pratique, tant sur le tatami qu'en dehors."
  },
  {
    name: "Discipline",
    description: "La discipline forge le caractère et permet une progression constante."
  },
  {
    name: "Excellence",
    description: "Nous visons l'excellence dans chaque aspect de notre enseignement."
  },
  {
    name: "Communauté",
    description: "Notre club est une famille où chacun trouve sa place et progresse ensemble."
  }
];

const team = [
  {
    name: "Baba GAYE",
    role: "Professeur principal",
    grade: "6ème Dan",
    qualifications: [
      "Champion d'Afrique",
      "Multiple champion du Sénégal",
      "Ancien membre de l'équipe nationale du Sénégal",
      "Professeur diplômé d'État (BEES 2ème degré)"
    ]
  },
  {
    name: "Camara Baba JUNIOR",
    role: "Assistant professeur",
    grade: "2ème Dan",
    qualifications: [
      "Membre de l'équipe de France de Jujitsu",
      "Professeur de Judo-Jujitsu"
    ]
  },
  {
    name: "Supimme BABA",
    role: "Assistant professeur",
    grade: "1er Dan",
    qualifications: [
      "Professeur de Judo",
      "Assistant instructeur"
    ]
  }
];

export default function About() {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="bg-jc7-white"
    >
      {/* Hero section */}
      <motion.div
        variants={item}
        className="relative isolate overflow-hidden py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={item}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <motion.h2 
              variants={item}
              className="text-4xl font-bold tracking-tight text-jc7-black sm:text-6xl"
            >
              Notre Histoire
            </motion.h2>
            <motion.p 
              variants={item}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Depuis sa création, le JC7 Judo s'engage à transmettre les valeurs traditionnelles du judo
              tout en adoptant des méthodes d'enseignement modernes. Notre club a formé des générations
              de judokas, du débutant au champion.
            </motion.p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/registration"
                className="rounded-md bg-jc7-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Se préinscrire
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold leading-6 text-jc7-black"
              >
                Nous contacter <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </motion.div>

      {/* Values section */}
      <motion.div 
        variants={item}
        className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2 
            variants={item}
            className="text-3xl font-bold tracking-tight text-jc7-black sm:text-4xl"
          >
            Nos Valeurs
          </motion.h2>
          <motion.p 
            variants={item}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Le judo est plus qu'un sport, c'est une école de vie.
          </motion.p>
        </div>
        <motion.dl 
          variants={container}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {values.map((value) => (
            <motion.div 
              key={value.name}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative pl-9"
            >
              <dt className="inline font-semibold text-jc7-black">
                <div className="absolute left-1 top-1 h-5 w-5 text-jc7-red">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                {value.name}
              </dt>
              <dd className="inline">{" " + value.description}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Team section */}
      <motion.div className="bg-white py-24">
        <div className="container px-6 mx-auto">
          <motion.h2 
            variants={item}
            className="text-3xl font-semibold text-gray-800 lg:text-4xl mb-16"
          >
            Notre Équipe
          </motion.h2>

          <motion.div 
            variants={item}
            className="max-w-3xl"
          >
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Camara Baba JUNIOR
              </h3>
              <p className="text-lg text-jc7-red mb-2">
                2ème Dan • Professeur de Judo-Jujitsu
              </p>
              <p className="text-gray-600">
                Membre de l'équipe de France de Jujitsu
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
