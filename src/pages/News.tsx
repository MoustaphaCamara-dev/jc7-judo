// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NewsImage {
  src: string;
  alt: string;
}

interface NewsSection {
  subtitle: string;
  items: string[];
}

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  images?: NewsImage[];
  content: NewsSection[];
  footer?: string;
}

const news: NewsArticle[] = [
  {
    id: 1,
    title: "Championnats IDF Jujitsu 2024",
    date: "27 Décembre 2023",
    images: [
      {
        src: "/images/news/championnat-idf-2024.jpg",
        alt: "Championnats IDF Jujitsu 2024"
      }
    ],
    content: [
      {
        subtitle: "Fighting seniors",
        items: [
          "-77kg Djesy. N/C",
          "-85kg Adam. 3ème 🥉"
        ]
      },
      {
        subtitle: "Fighting cadets",
        items: [
          "-69kg Syfax. 3ème 🥉"
        ]
      },
      {
        subtitle: "Qualifications",
        items: [
          "Syfax se qualifie pour les championnats de France cadets jujitsu fighting",
          "Adam se qualifie pour les championnats de France jujitsu fighting seniors",
          "Notre professeur Junior Camara (ESBM Judo) devient champion IDF en -77kg 🥇"
        ]
      }
    ],
    footer: "Un bel esprit d'équipe a animé nos combattants tout au long de cette journée. Merci aux supporters venus encourager nos athlètes !"
  },
  {
    id: 2,
    title: "Porte Ouverte du JC7",
    date: "20 Décembre 2023",
    images: [
      {
        src: "/images/news/porte-ouverte-2023.jpg",
        alt: "Porte ouverte du JC7"
      }
    ],
    content: [
      {
        subtitle: "Une belle journée de partage",
        items: [
          "Rassemblement de toutes les tranches d'âge du club sur les tatamis",
          "Entraînement convivial en présence des familles",
          "Distribution de chocolats dans la bonne humeur"
        ]
      }
    ],
    footer: "Dernier rendez-vous de l'année 2024. On se retrouve en janvier 2025. Bonnes fêtes de fin d'année ! 🥳🥋"
  }
];

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

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function News() {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="bg-jc7-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <motion.h2 
            variants={item}
            className="text-3xl font-bold tracking-tight text-jc7-black sm:text-4xl text-center mb-12"
          >
            Actualités
          </motion.h2>

          <motion.div 
            variants={container}
            className="space-y-12"
          >
            {news.map((article) => (
              <motion.article 
                key={article.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                {article.images && article.images.length > 0 && (
                  <motion.div 
                    variants={imageVariants}
                    className="aspect-w-16 aspect-h-9 relative overflow-hidden"
                  >
                    <motion.img
                      src={article.images[0].src}
                      alt={article.images[0].alt}
                      className="object-cover w-full h-full transform"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                )}

                <div className="p-6">
                  <div className="flex justify-between items-baseline mb-4">
                    <motion.h3 
                      variants={item}
                      className="text-xl font-semibold text-jc7-black"
                    >
                      {article.title}
                    </motion.h3>
                    <motion.time 
                      variants={item}
                      className="text-sm text-gray-500"
                    >
                      {article.date}
                    </motion.time>
                  </div>

                  <motion.div 
                    variants={container}
                    className="space-y-6"
                  >
                    {article.content.map((section, index) => (
                      <motion.div 
                        key={index} 
                        variants={item}
                        className="space-y-2"
                      >
                        <h4 className="font-medium text-jc7-red">
                          {section.subtitle}
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                          {section.items.map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: itemIndex * 0.1 }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>

                  {article.footer && (
                    <motion.p 
                      variants={item}
                      className="mt-6 text-gray-600 border-t border-gray-100 pt-4"
                    >
                      {article.footer}
                    </motion.p>
                  )}

                  {article.images && article.images.length > 1 && (
                    <motion.div 
                      variants={container}
                      className="mt-6 grid grid-cols-2 gap-4"
                    >
                      {article.images.slice(1).map((image, index) => (
                        <motion.div 
                          key={index} 
                          variants={imageVariants}
                          className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded"
                        >
                          <motion.img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full transform"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">
              Suivez-nous sur les réseaux sociaux pour ne rien manquer
            </p>
            <div className="mt-4 space-x-6">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-jc7-red"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Facebook
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-jc7-red"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Instagram
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
