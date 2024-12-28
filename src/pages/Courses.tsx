import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/20/solid';

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

const courses = [
  {
    id: 'baby',
    name: 'Baby Judo',
    description: 'Pour les 4-5 ans',
    price: '180€',
    features: [
      'Licence FFJDA incluse',
      'Approche ludique et éducative',
      'Développement moteur',
      'Apprentissage des valeurs du judo',
      '1 cours par semaine',
      'Mercredi 16h00-17h00'
    ],
  },
  {
    id: 'youth',
    name: 'Cours Jeunes',
    description: 'Pour les 6-14 ans',
    price: '200€',
    features: [
      'Licence FFJDA incluse',
      'Préparation aux compétitions',
      'Passage de grades',
      'Développement physique et mental',
      '2 cours par semaine',
      'Horaires adaptés selon les âges'
    ],
  },
  {
    id: 'adult',
    name: 'Cours Adultes',
    description: 'À partir de 15 ans',
    price: '250€',
    features: [
      'Licence FFJDA incluse',
      'Préparation technique',
      'Perfectionnement',
      'Compétition possible',
      '3 cours par semaine',
      'Horaires flexibles'
    ],
  },
];

export default function Courses() {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="bg-jc7-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          variants={item}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-jc7-red">Préinscriptions 2024-2025</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-jc7-black sm:text-5xl">
            Choisissez votre formule
          </p>
        </motion.div>
        <motion.p 
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
        >
          Des cours adaptés à tous les niveaux et tous les âges, encadrés par des professeurs diplômés d'État.
          La préinscription vous permet de réserver votre place pour la prochaine saison.
        </motion.p>

        <motion.div 
          variants={container}
          className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl bg-white p-8 ring-1 ring-gray-200 hover:shadow-lg transition-shadow xl:p-10"
            >
              <motion.div 
                variants={item}
                className="flex items-center justify-between gap-x-4"
              >
                <h3 
                  id={course.id}
                  className="text-lg font-semibold leading-8 text-jc7-black"
                >
                  {course.name}
                </h3>
              </motion.div>
              <motion.p 
                variants={item}
                className="mt-4 text-sm leading-6 text-gray-600"
              >
                {course.description}
              </motion.p>
              <motion.p 
                variants={item}
                className="mt-6 flex items-baseline gap-x-1"
              >
                <span className="text-4xl font-bold tracking-tight text-jc7-black">{course.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/an</span>
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/registration"
                  aria-describedby={course.id}
                  className="mt-6 block rounded-md bg-jc7-red px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Se préinscrire
                </Link>
              </motion.div>
              <motion.ul 
                variants={container}
                role="list" 
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {course.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    variants={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-x-3"
                  >
                    <CheckIcon className="h-6 w-5 flex-none text-jc7-red" aria-hidden="true" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
