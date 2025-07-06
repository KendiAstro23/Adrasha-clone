import { motion } from 'framer-motion';

const artisans = [
  {
    name: 'Amina Mwangi',
    company: 'Amina Adornments',
    image: '/images/fd3-removebg-preview.png',
    story: [
      'Amina began her jewelry journey using basic materials she found in her rural town. As she explored her creativity, she discovered a talent for blending African tradition with contemporary design.',
      'Today, Amina leads a growing team of women artisans who craft unique accessories that celebrate heritage and empower local communities. Her work is now showcased internationally, but she remains rooted in her mission of storytelling through craft.',
    ],
  },
  {
    name: 'Lilian Otieno',
    company: 'Urban Beads',
    image: '/images/fd1-removebg-preview.png',
    story: [
      'Brian began experimenting with bead designs in his university dorm room. What started as a side hustle soon became a full-time passion.',
      'He now collaborates with young artists across Kenya to create bold, expressive beadwork that reflects urban African identity. Urban Beads has been featured in fashion shows and concept stores around the world.',
    ],
  },
  {
    name: 'Cynthia Wambui',
    company: 'Shanga Luxe',
    image: '/images/fd2-removebg-preview.png',
    story: [
      'With a background in architecture, Cynthia approached jewelry design through the lens of structure and form. She began by repurposing scrap metal into wearable art.',
      'Her brand, Shanga Luxe, is now synonymous with bold elegance and eco-conscious design. Cynthia trains aspiring artisans, helping them turn creativity into sustainable income.',
    ],
  },
  {
    name: 'Azari Kipkoech',
    company: 'Azaris Roots',
    image: '/images/fd4-removebg-preview.png',
    story: [
      'Growing up in a family of metalworkers, Daniel was always drawn to the forge. He revived old brass-working techniques and combined them with minimalist design.',
      'Roots & Brass now exports timeless statement pieces that honor his Kalenjin heritage. Daniel is committed to keeping traditional techniques alive through mentorship and workshops.',
    ],
  },
  {
    name: 'Eunice Njeri',
    company: 'EuniWear',
    image: '/images/fd5-removebg-preview.png',
    story: [
      'Inspired by her grandmother’s handmade necklaces, Eunice launched EuniWear to bring traditional Kenyan designs to the modern wardrobe.',
      'Her pieces are known for their intricate detail and storytelling. Eunice partners with women’s groups in rural areas to create jewelry that empowers both the wearer and the maker.',
    ],
  },
];

const MeetArtisans = () => {
  return (
    <section className="py-28 px-6 bg-white space-y-28">
      <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">Meet the Artisans</h2>
      {artisans.map((artisan, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              !isEven ? 'md:flex-row-reverse' : ''
            } gap-16`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Image */}
            <div className="flex-1 text-center">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="mx-auto w-[400px] md:w-[520px] object-contain"
              />
              <div className="mt-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">{artisan.name}</h3>
                <p className="text-lg text-gray-500">{artisan.company}</p>
              </div>
            </div>

            {/* Story */}
            <div className="flex-1 text-left">
              {artisan.story.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default MeetArtisans;
