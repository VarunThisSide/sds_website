import { useState } from "react";
import { motion } from "framer-motion";

// WorkshopCard remains same but includes onClick handler
const WorkshopCard = ({ title, description, image, reverse, onLearnMore, detail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center my-10 gap-10`}
    >
      <div className="md:w-1/2 w-full">
        <img
          src={image}
          alt={title}
          className="rounded-xl shadow-xl w-full object-cover max-h-[300px]"
        />
      </div>
      <div className="md:w-1/2 w-full text-white text-center md:text-left">
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-xl text-gray-300">{description}</p>
        <button
          onClick={() => onLearnMore({ title, description, image, detail })}
          className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl rounded-full hover:scale-105 transition-transform"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

const WorkshopSection = () => {
  const [modalData, setModalData] = useState(null);

  const closeModal = () => setModalData(null);

  const workshops = [
    {
      title: "Intro to Machine Learning",
      description:
        "Kickstart your ML journey with this beginner-friendly workshop covering basic concepts and practical use-cases.",
      image: "../../../workshop/slide-1.png",
      detail: "Detailed description of ML"
    },
    {
      title: "Deep Learning & Neural Nets",
      description:
        "Dive deeper into neural networks, backpropagation, and more through hands-on sessions.",
      image: "../../../workshop/slide-1.png",
      detail: "Detailed description of DL and CNN"
    },
    {
      title: "Data Visualization with Python",
      description:
        "Learn how to turn raw data into compelling visuals using libraries like Matplotlib and Seaborn.",
      image: "../../../workshop/slide-1.png",
      detail: "Detailed description of DV using Python"
    },
  ];

  return (
    <section id="workshops" className="px-6 md:px-20 py-16 bg-black relative">
      
      {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Academic Workshops and Sessions
      </h2> */}

      {workshops.map((workshop, idx) => (
        <WorkshopCard
          key={idx}
          {...workshop}
          reverse={idx % 2 !== 0}
          onLearnMore={setModalData}
        />
      ))}

      {/* Modal */}
      {modalData && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-black rounded-xl p-6 max-w-lg w-[90%] relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-black text-xl font-bold hover:text-red-600"
            >
              ×
            </button>
            <img
              src={modalData.image}
              alt={modalData.title}
              className="rounded-lg mb-4 w-full max-h-[250px] object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">{modalData.title}</h3>
            <p className="text-gray-700">{modalData.detail}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkshopSection;
