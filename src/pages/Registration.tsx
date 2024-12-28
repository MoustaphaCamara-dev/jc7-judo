import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
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

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    category: 'enfants',
    level: 'debutant',
    address: '',
    city: '',
    postalCode: '',
    medicalCertificate: null,
    photoIdentity: null,
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données à votre backend
    console.log('Données du formulaire:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: file,
      }));
    }
  };

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
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-jc7-black sm:text-4xl">Inscription au club</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Remplissez ce formulaire pour vous inscrire au JC7 Judo. Tous les champs marqués d'un * sont obligatoires.
          </p>
        </motion.div>

        <motion.form 
          variants={container}
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-2xl space-y-8"
        >
          {/* Informations personnelles */}
          <motion.div 
            variants={item}
            className="border-b border-gray-900/10 pb-12"
          >
            <h2 className="text-base font-semibold leading-7 text-jc7-black">Informations personnelles</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Ces informations sont nécessaires pour votre inscription.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <motion.div 
                variants={item}
                className="sm:col-span-3"
              >
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                  Prénom *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="sm:col-span-3"
              >
                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                  Nom *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="sm:col-span-3"
              >
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email *
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="sm:col-span-3"
              >
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Téléphone *
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="sm:col-span-3"
              >
                <label htmlFor="birthDate" className="block text-sm font-medium leading-6 text-gray-900">
                  Date de naissance *
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    required
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="sm:col-span-3"
              >
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Catégorie *
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                  >
                    <option value="enfants">Enfants (4-12 ans)</option>
                    <option value="ados">Adolescents (13-17 ans)</option>
                    <option value="adultes">Adultes (18+ ans)</option>
                  </select>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Adresse */}
          <motion.div 
            variants={item}
            className="border-b border-gray-900/10 pb-12"
          >
            <h2 className="text-base font-semibold leading-7 text-jc7-black">Adresse</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Votre adresse est nécessaire pour la licence FFJDA.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <motion.div 
                variants={item}
                className="col-span-full"
              >
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                  Adresse *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="sm:col-span-2 sm:col-start-1"
              >
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Ville *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="sm:col-span-2"
              >
                <label htmlFor="postalCode" className="block text-sm font-medium leading-6 text-gray-900">
                  Code postal *
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jc7-red sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Documents */}
          <motion.div 
            variants={item}
            className="border-b border-gray-900/10 pb-12"
          >
            <h2 className="text-base font-semibold leading-7 text-jc7-black">Documents requis</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Ces documents sont nécessaires pour finaliser votre inscription.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <motion.div 
                variants={item}
                className="col-span-full"
              >
                <label htmlFor="medical-certificate" className="block text-sm font-medium leading-6 text-gray-900">
                  Certificat médical *
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="medical-certificate-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-jc7-red focus-within:outline-none focus-within:ring-2 focus-within:ring-jc7-red focus-within:ring-offset-2 hover:text-red-700"
                      >
                        <span>Télécharger un fichier</span>
                        <input
                          id="medical-certificate-upload"
                          name="medical-certificate-upload"
                          type="file"
                          className="sr-only"
                          required
                          onChange={(e) => handleFileChange(e, 'medicalCertificate')}
                        />
                      </label>
                      <p className="pl-1">ou glisser-déposer</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PDF, PNG, JPG jusqu'à 10MB</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="col-span-full"
              >
                <label htmlFor="photo-identity" className="block text-sm font-medium leading-6 text-gray-900">
                  Photo d'identité *
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="photo-identity-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-jc7-red focus-within:outline-none focus-within:ring-2 focus-within:ring-jc7-red focus-within:ring-offset-2 hover:text-red-700"
                      >
                        <span>Télécharger un fichier</span>
                        <input
                          id="photo-identity-upload"
                          name="photo-identity-upload"
                          type="file"
                          className="sr-only"
                          required
                          onChange={(e) => handleFileChange(e, 'photoIdentity')}
                        />
                      </label>
                      <p className="pl-1">ou glisser-déposer</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG jusqu'à 10MB</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Conditions */}
          <motion.div 
            variants={item}
            className="border-b border-gray-900/10 pb-12"
          >
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  required
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300 text-jc7-red focus:ring-jc7-red"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="acceptTerms" className="font-medium text-gray-900">
                  J'accepte les conditions *
                </label>
                <p className="text-gray-500">
                  En cochant cette case, j'accepte les conditions générales et le règlement intérieur du club.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-6 flex items-center justify-end gap-x-6"
          >
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => window.history.back()}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="rounded-md bg-jc7-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jc7-red"
            >
              Envoyer l'inscription
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
}
