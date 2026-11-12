/* ============================================================
   pets.js  — Centralized Pet Data for PetSphere
   ============================================================ */

/* --- Unsplash image URLs (stable CDN links) --- */
const FALLBACKS = {
  dogs:    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
  cats:    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80',
  rabbits: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&q=80',
  parrots: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&q=80',
  fish:    'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=600&q=80',
  turtles: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&q=80'
};

function getImg(localPath, category) {
  /* We use local images for our 6 "hero" pets, 
     Unsplash for the rest (all working direct CDN URLs). */
  return localPath;
}

const PETS = [
  /* ===== DOGS ===== */
  {
    id: 'd1',
    name: 'Buddy',
    category: 'dogs',
    breed: 'Golden Retriever',
    age: 2,
    ageLabel: '2 years',
    gender: 'Male',
    location: 'Mumbai, Maharashtra',
    image: 'images/dogs/dog1_golden.jpg',
    fallback: FALLBACKS.dogs,
    status: 'Available',
    description: 'Buddy is a cheerful, friendly Golden Retriever who lights up every room he enters. He was rescued from a local shelter at 6 months old and has blossomed into a well-mannered, affectionate companion. He adores fetch, long walks, and cuddle sessions on the couch.',
    personality: ['Playful', 'Affectionate', 'Loyal', 'Gentle', 'Social'],
    careRequirements: [
      'Daily walks of at least 45–60 minutes',
      'Regular brushing (3×/week) to manage shedding',
      'High-quality protein-rich dog food, twice daily',
      'Regular vet check-ups and dental care',
      'Mental stimulation through training or puzzle toys'
    ],
    vaccinationStatus: 'Fully Vaccinated',
    suitableFor: 'Families, singles, seniors; home with a yard preferred',
    adoptionRequirements: 'Adopter must have a secure outdoor space and experience with medium–large dogs.',
    featured: true
  },
  {
    id: 'd2',
    name: 'Shadow',
    category: 'dogs',
    breed: 'Labrador Retriever',
    age: 1,
    ageLabel: '1 year',
    gender: 'Male',
    location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80',
    fallback: FALLBACKS.dogs,
    status: 'Available',
    description: 'Shadow is an energetic black Labrador puppy full of curiosity and love. He is already house-trained and knows basic commands. Shadow forms deep bonds quickly and thrives in active households. He is great with children and other dogs.',
    personality: ['Energetic', 'Smart', 'Curious', 'Friendly', 'Eager-to-Please'],
    careRequirements: [
      'High-energy exercise — two walks per day plus playtime',
      'Consistent positive reinforcement training',
      'Puppy diet with age-appropriate nutrition',
      'Socialization with other dogs and people',
      'Regular grooming and ear cleaning'
    ],
    vaccinationStatus: 'Fully Vaccinated',
    suitableFor: 'Active families, young adults with outdoor lifestyle',
    adoptionRequirements: 'First-time dog owners welcome; training commitment required.',
    featured: false
  },
  {
    id: 'd3',
    name: 'Daisy',
    category: 'dogs',
    breed: 'Beagle',
    age: 3,
    ageLabel: '3 years',
    gender: 'Female',
    location: 'Bengaluru, Karnataka',
    image: 'https://images.unsplash.com/photo-1647097298829-e41dd4d8f92f?w=600&q=80',
    fallback: FALLBACKS.dogs,
    status: 'Available',
    description: 'Daisy is a sweet, compact Beagle with a nose for adventure and a heart full of love. She is calm indoors but loves exploring outdoors. Daisy is great with children and has lived harmoniously with cats. She is fully trained and responds well to commands.',
    personality: ['Curious', 'Gentle', 'Calm', 'Sociable', 'Determined'],
    careRequirements: [
      'Moderate daily exercise — at least 30 minutes',
      'Secure fencing as Beagles are escape artists',
      'Regular ear cleaning to prevent infections',
      'High-quality diet to maintain healthy weight',
      'Routine deworming and flea prevention'
    ],
    vaccinationStatus: 'Fully Vaccinated',
    suitableFor: 'Families, apartment dwellers with access to a park',
    adoptionRequirements: 'Secure garden or access to open spaces required.',
    featured: true
  },
  {
    id: 'd4',
    name: 'Thor',
    category: 'dogs',
    breed: 'Siberian Husky',
    age: 4,
    ageLabel: '4 years',
    gender: 'Male',
    location: 'Delhi, NCR',
    image: 'https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3',
    fallback: FALLBACKS.dogs,
    status: 'Pending',
    description: 'Thor is a majestic Siberian Husky with striking blue eyes and a playful personality. He is well-socialized, loves running, and has a gentle temperament despite his impressive appearance. Thor is looking for an active family who can match his adventurous spirit.',
    personality: ['Adventurous', 'Independent', 'Intelligent', 'Friendly', 'Vocal'],
    careRequirements: [
      'Vigorous daily exercise — jogging or long hikes',
      'Brushing twice weekly; heavy seasonal shedding',
      'Mental stimulation to prevent boredom',
      'Cool environment; not suited for very hot climates',
      'Strong leash — Huskies have high prey drive'
    ],
    vaccinationStatus: 'Fully Vaccinated',
    suitableFor: 'Experienced dog owners, active individuals or families',
    adoptionRequirements: 'Experience with large or working breeds strongly preferred.',
    featured: false
  },

  /* ===== CATS ===== */
  {
    id: 'c1',
    name: 'Mango',
    category: 'cats',
    breed: 'Domestic Shorthair (Tabby)',
    age: 2,
    ageLabel: '2 years',
    gender: 'Male',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1625060241508-22488e1e9264?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.cats,
    status: 'Available',
    description: 'Mango is a vibrant orange tabby with a personality as warm as his colour. He is playful, talkative, and loves basking in sunny spots. Mango gets along well with gentle children and other cats. He will greet you at the door every single day.',
    personality: ['Playful', 'Talkative', 'Affectionate', 'Curious', 'Bold'],
    careRequirements: [
      'Daily interactive play sessions with wand toys',
      'Weekly brushing to reduce shedding',
      'High-protein wet food plus fresh water always available',
      'Litter box cleaned daily',
      'Annual vet check-up and dental health monitoring'
    ],
    vaccinationStatus: 'Fully Vaccinated',
    suitableFor: 'Singles, families, apartment living',
    adoptionRequirements: 'Indoor-only home required.',
    featured: true
  },
  {
    id: 'c2',
    name: 'Luna',
    category: 'cats',
    breed: 'Persian',
    age: 3,
    ageLabel: '3 years',
    gender: 'Female',
    location: 'Hyderabad, Telangana',
    image: 'https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.cats,
    status: 'Available',
    description: 'Luna is a regal, long-haired Persian cat with a calm, serene demeanour. She enjoys quiet evenings, lap cuddles, and gazing out of windows. Luna is best suited for a peaceful household and gets along with gentle, patient owners.',
    personality: ['Calm', 'Gentle', 'Regal', 'Affectionate', 'Quiet'],
    careRequirements: [
      'Daily brushing to prevent matting',
      'Regular eye-area cleaning',
      'Indoor-only to protect her coat',
      'Premium cat food appropriate for long-haired breeds',
      'Regular grooming appointments every 6–8 weeks'
    ],
    vaccinationStatus: 'Fully Vaccinated',
    suitableFor: 'Quiet households, seniors, calm families',
    adoptionRequirements: 'Low-noise, indoor-only home required. No young toddlers.',
    featured: false
  },
  {
    id: 'c3',
    name: 'Simba',
    category: 'cats',
    breed: 'Maine Coon',
    age: 1,
    ageLabel: '1 year',
    gender: 'Male',
    location: 'Kolkata, West Bengal',
    image: 'https://images.unsplash.com/photo-1787129351543-5e9b42e7df6e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.cats,
    status: 'Available',
    description: 'Simba is a giant, fluffy Maine Coon kitten with a dog-like personality. He loves following people around, playing fetch, and learning tricks. Despite his large size, he is incredibly gentle and adores cuddles. He is sociable with everyone he meets.',
    personality: ['Dog-like', 'Intelligent', 'Gentle Giant', 'Social', 'Playful'],
    careRequirements: [
      'Interactive play twice daily to keep him mentally stimulated',
      'Biweekly brushing for his semi-long coat',
      'Large litter box appropriate for bigger cats',
      'Large scratching posts and climbing trees',
      'Nutritious diet to support healthy joint development'
    ],
    vaccinationStatus: 'Partially Vaccinated',
    suitableFor: 'Families, singles, homes with other pets',
    adoptionRequirements: 'Spacious home preferred due to large eventual size.',
    featured: false
  },
  {
    id: 'c4',
    name: 'Bella',
    category: 'cats',
    breed: 'Siamese',
    age: 4,
    ageLabel: '4 years',
    gender: 'Female',
    location: 'Ahmedabad, Gujarat',
    image: 'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.cats,
    status: 'Available',
    description: 'Bella is an elegant Siamese cat known for her striking blue eyes and talkative nature. She loves being the centre of attention and is deeply loyal to her humans. Bella thrives on interaction and will happily chat with you throughout the day.',
    personality: ['Vocal', 'Loyal', 'Elegant', 'Affectionate', 'Intelligent'],
    careRequirements: [
      'Daily social interaction and companionship',
      'Weekly brushing — short coat is easy to maintain',
      'Puzzle feeders or interactive toys for mental stimulation',
      'Regular vet check-ups for dental and respiratory health',
      'Tall cat tree for climbing and perching'
    ],
    vaccinationStatus: 'Fully Vaccinated',
    suitableFor: 'Individuals or families who spend a lot of time at home',
    adoptionRequirements: 'Cannot be left alone for long periods. Companion pet recommended.',
    featured: true
  },

  /* ===== RABBITS ===== */
  {
    id: 'r1',
    name: 'Cotton',
    category: 'rabbits',
    breed: 'Holland Lop',
    age: 1,
    ageLabel: '1 year',
    gender: 'Female',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.openai.com/static-rsc-4/Vbh64xOHmelAnAth7hKpzH9o-otvOzSNvmZQnHcHGQ3KYuY8e7Nyb3O3dTjisF5A6L9mGcoe_LTxD3IpO_NQveXWpTfuR4Z13RtrHbJqDPcnTs2Vuv3TUbhb08ORwKxsDzr1d20Lzos_6dD63UB-7rfQFpeLxP561haVIbx560II0glfZPn5v_JrG3riBRZV?purpose=fullsize',
    fallback: FALLBACKS.rabbits,
    status: 'Available',
    description: 'Cotton is an adorable white Holland Lop with floppy ears and the softest fur imaginable. She is gentle, curious, and loves exploring. Cotton enjoys being held and will happily binky around the room when she is happy. She is litter-trained and easy to care for.',
    personality: ['Gentle', 'Curious', 'Playful', 'Affectionate', 'Quiet'],
    careRequirements: [
      'Large hutch or free-roam indoor space',
      'Unlimited fresh hay (Timothy) as main diet',
      'Fresh leafy greens and limited pellets daily',
      'Daily handling and socialization',
      'Annual vet check-up; rabbits are delicate'
    ],
    vaccinationStatus: 'Vaccinated (RHD & Myxomatosis)',
    suitableFor: 'Families with children 8+, calm households',
    adoptionRequirements: 'No dogs or cats unless well-separated. Indoor housing required.',
    featured: true
  },
  {
    id: 'r2',
    name: 'Caramel',
    category: 'rabbits',
    breed: 'Mini Rex',
    age: 2,
    ageLabel: '2 years',
    gender: 'Male',
    location: 'Surat, Gujarat',
    image: 'https://images.openai.com/static-rsc-4/wYaXIBaw3d4VS7XKa5X8EN-A14TN8wRRCY4dfchY96a53A8QTZHLjwQ94iRyUlV4HzDsWmp7QM0BrSp1c1sWbDX1xQElb_0SrOiV6mQZqmqo92V0RHCqk3z07noC752vYZCJBDRsDrbci4lEeYf1FQuL8YfQKww9Jv24rno7y_cKTF6p3oBK9Edt4OYipAEE?purpose=fullsize',
    fallback: FALLBACKS.rabbits,
    status: 'Available',
    description: 'Caramel is a velvety-smooth Mini Rex with a rich caramel coat. He is bold, confident, and enjoys exploring every corner of the house. Caramel loves treats, agility games, and will eagerly come to you for head rubs. He is fully litter-trained.',
    personality: ['Bold', 'Confident', 'Curious', 'Friendly', 'Active'],
    careRequirements: [
      'Free-roam time outside the hutch daily (at least 3 hours)',
      'Hay-based diet with fresh greens',
      'Bunny-proofed room or safe playpen',
      'Foraging toys and cardboard boxes to chew',
      'Gentle nail trimming monthly'
    ],
    vaccinationStatus: 'Vaccinated (RHD)',
    suitableFor: 'Singles, couples, families; indoor home',
    adoptionRequirements: 'Must rabbit-proof the home before adoption.',
    featured: false
  },
  {
    id: 'r3',
    name: 'Pebble',
    category: 'rabbits',
    breed: 'Lionhead',
    age: 1,
    ageLabel: '8 months',
    gender: 'Female',
    location: 'Lucknow, UP',
    image: 'https://images.unsplash.com/photo-1513303562411-8b5ed62bccf2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.rabbits,
    status: 'Available',
    description: 'Pebble is a tiny Lionhead bunny with a magnificent mane and big personality. She is spirited and entertaining, always making people smile. She is getting more comfortable being held and would blossom with a patient, gentle owner.',
    personality: ['Spirited', 'Entertaining', 'Inquisitive', 'Lovable', 'Energetic'],
    careRequirements: [
      'Mane brushing 2–3 times weekly',
      'Unlimited Timothy hay and fresh water',
      'Safe indoor space with enrichment',
      'Gentle daily interaction to build trust',
      'Regular health checks'
    ],
    vaccinationStatus: 'Vaccinated (RHD & Myxomatosis)',
    suitableFor: 'Patient owners, adults or older children',
    adoptionRequirements: 'Requires a calm, quiet household. No young children.',
    featured: false
  },
  {
    id: 'r4',
    name: 'Oreo',
    category: 'rabbits',
    breed: 'Dutch Rabbit',
    age: 3,
    ageLabel: '3 years',
    gender: 'Male',
    location: 'Nagpur, Maharashtra',
    image: 'https://images.openai.com/static-rsc-4/VlzK6AA-j5JlNb8WepOqc2cXgd57vX8UbkRJyhlSyadJ2QDLy_cz3HvA1f0ANkq2fm1fJ2YCvacuEbpKbjoqkn7gQmKYoZ3zXKpt_8R6MNkuzzwIEa1eux2g4QQCZowZEcmgKgCsmhQfDFVkmUTAlqdrv-POS2UwJmVLleZTzKIgJxkDGutiaRBLg65w-0uz?purpose=fullsize',
    fallback: FALLBACKS.rabbits,
    status: 'Available',
    description: 'Oreo is a striking black-and-white Dutch rabbit with a calm, sociable temperament. He is one of the most affectionate rabbits at the shelter and loves sitting beside you while you watch TV. Oreo gets along with other rabbits and is extremely well-mannered.',
    personality: ['Calm', 'Sociable', 'Affectionate', 'Gentle', 'Well-mannered'],
    careRequirements: [
      'Companion rabbit recommended for bonding',
      'Hay as primary diet with daily fresh vegetables',
      'Spacious enclosure with bedding',
      'Regular grooming — weekly brushing',
      'Exercise outside cage daily'
    ],
    vaccinationStatus: 'Fully Vaccinated',
    suitableFor: 'Families, seniors, anyone wanting a calm companion',
    adoptionRequirements: 'Prefers to be adopted with a bonded companion if possible.',
    featured: false
  },

  /* ===== PARROTS ===== */
  {
    id: 'p1',
    name: 'Rio',
    category: 'parrots',
    breed: 'Blue-and-Gold Macaw',
    age: 5,
    ageLabel: '5 years',
    gender: 'Male',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1612024782955-49fae79e42bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.parrots,
    status: 'Available',
    description: 'Rio is a magnificent Blue-and-Gold Macaw with a brilliant vocabulary and a charming personality. He can mimic over 30 phrases and loves interacting with humans. Rio enjoys music, solving puzzles, and showing off his vibrant feathers. He needs an experienced bird owner.',
    personality: ['Intelligent', 'Vocal', 'Charming', 'Affectionate', 'Playful'],
    careRequirements: [
      'Extra-large cage with room to spread wings fully',
      'Daily out-of-cage social interaction (3–4 hours)',
      'Fresh fruits, vegetables, and high-quality pellets',
      'Regular beak and nail trimming by avian vet',
      'Mental enrichment: foraging toys and puzzles daily'
    ],
    vaccinationStatus: 'Avian Health Certified',
    suitableFor: 'Experienced bird owners; spacious home',
    adoptionRequirements: 'Must have prior experience with large parrots. Long-term commitment (30+ year lifespan).',
    featured: true
  },
  {
    id: 'p2',
    name: 'Kiwi',
    category: 'parrots',
    breed: 'Green Budgerigar',
    age: 1,
    ageLabel: '1 year',
    gender: 'Female',
    location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1689534155845-4939038ef26b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.parrots,
    status: 'Available',
    description: 'Kiwi is a lively green Budgerigar who loves to sing, whistle, and interact. She is learning to talk and already says a few words. Kiwi is the perfect starter bird — social, manageable in size, and full of personality. She will brighten any home with her cheerful chirping.',
    personality: ['Cheerful', 'Social', 'Curious', 'Energetic', 'Musical'],
    careRequirements: [
      'Spacious cage with horizontal bars for climbing',
      'Daily seed, millet, and fresh greens',
      'Daily interaction and socialization',
      'Toys for mental stimulation — mirrors, bells, swings',
      'Fresh water daily and weekly cage cleaning'
    ],
    vaccinationStatus: 'Health Checked',
    suitableFor: 'First-time bird owners, families, apartment living',
    adoptionRequirements: 'Quiet, smoke-free home. No toxic cooking fumes (Teflon pans).',
    featured: false
  },
  {
    id: 'p3',
    name: 'Coco',
    category: 'parrots',
    breed: 'African Grey Parrot',
    age: 7,
    ageLabel: '7 years',
    gender: 'Male',
    location: 'Bengaluru, Karnataka',
    image: 'https://images.unsplash.com/photo-1557001232-8b87133123dc?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.parrots,
    status: 'Available',
    description: 'Coco is a highly intelligent African Grey known for his extraordinary mimicry and problem-solving ability. He has a vocabulary of over 60 words and phrases. Coco forms deep bonds with his owner and requires a committed, experienced caretaker who has time to engage with him daily.',
    personality: ['Highly Intelligent', 'Sensitive', 'Loyal', 'Talkative', 'Problem-Solver'],
    careRequirements: [
      'Large stainless-steel cage with space for enrichment',
      'Diet of pellets, fresh fruits, nuts, and vegetables',
      '4+ hours of daily interaction and out-of-cage time',
      'Consistent routine — dislikes sudden changes',
      'Annual avian veterinary examination'
    ],
    vaccinationStatus: 'Avian Health Certified',
    suitableFor: 'Highly experienced bird owners with ample time',
    adoptionRequirements: 'Experience with African Greys required. Cannot be re-homed frequently.',
    featured: false
  },
  {
    id: 'p4',
    name: 'Sunny',
    category: 'parrots',
    breed: 'Sun Conure',
    age: 2,
    ageLabel: '2 years',
    gender: 'Female',
    location: 'Hyderabad, Telangana',
    image: 'https://images.unsplash.com/photo-1709025219993-7fd23d69c8ce?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.parrots,
    status: 'Available',
    description: 'Sunny is a brilliant orange-and-yellow Sun Conure bursting with personality. She is extremely affectionate, loves cuddling with her owner, and is quite vocal. Sunny has been hand-raised and is comfortable with gentle handling. She is the life of the party!',
    personality: ['Affectionate', 'Loud', 'Playful', 'Cuddly', 'Vibrant'],
    careRequirements: [
      'Daily out-of-cage interaction — minimum 3 hours',
      'Balanced diet: pellets, fresh fruits, and vegetables',
      'Noise tolerance required — Sun Conures are very loud',
      'Foraging toys and shredding materials',
      'Routine beak and nail care by avian vet'
    ],
    vaccinationStatus: 'Health Checked',
    suitableFor: 'Experienced bird owners; homes that can tolerate noise',
    adoptionRequirements: 'Not suitable for apartments with thin walls. Noise level consideration essential.',
    featured: false
  },

  /* ===== FISH ===== */
  {
    id: 'f1',
    name: 'Neptune',
    category: 'fish',
    breed: 'Betta Splendens',
    age: 1,
    ageLabel: '1 year',
    gender: 'Male',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1769006604234-8f6e32bb0d77?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.fish,
    status: 'Available',
    description: 'Neptune is a stunning Crown-tail Betta with flowing blue and red fins that look like an underwater ballet. He is a hardy, low-maintenance fish perfect for beginners. Neptune is territorial with other male Bettas but can coexist peacefully with compatible tank mates.',
    personality: ['Majestic', 'Territorial', 'Active', 'Striking', 'Hardy'],
    careRequirements: [
      'Minimum 10-litre tank with a gentle filter',
      'Water temperature 24–28°C, stable pH 6.5–7.5',
      'Betta-specific pellets + occasional brine shrimp treats',
      '25% water change weekly',
      'No other male Bettas; compatible with snails or corydoras'
    ],
    vaccinationStatus: 'N/A',
    suitableFor: 'All ages; beginner to experienced aquarists',
    adoptionRequirements: 'Must have a cycled tank ready before adoption.',
    featured: true
  },
  {
    id: 'f2',
    name: 'Nemo',
    category: 'fish',
    breed: 'Ocellaris Clownfish',
    age: 1,
    ageLabel: '1 year',
    gender: 'Male',
    location: 'Kochi, Kerala',
    image: 'https://images.unsplash.com/photo-1595503240812-7286dafaddc1?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.fish,
    status: 'Available',
    description: 'Nemo is a vibrant Clownfish with a bold orange-and-white pattern. He is active, curious, and loves exploring his anemone. Nemo thrives in a saltwater reef tank and is a joy to watch. He is perfect for aquarists interested in marine fishkeeping.',
    personality: ['Lively', 'Bold', 'Curious', 'Colourful', 'Hardy'],
    careRequirements: [
      'Saltwater reef tank with stable salinity 1.023–1.025',
      'Host anemone or suitable coral for shelter',
      'Marine pellets and varied frozen foods',
      'Regular water testing and protein skimmer',
      'Temperature 24–27°C; excellent lighting for coral'
    ],
    vaccinationStatus: 'N/A',
    suitableFor: 'Experienced marine aquarists',
    adoptionRequirements: 'Established saltwater reef tank required.',
    featured: false
  },
  {
    id: 'f3',
    name: 'Aurora',
    category: 'fish',
    breed: 'Fancy Goldfish (Oranda)',
    age: 2,
    ageLabel: '2 years',
    gender: 'Female',
    location: 'Delhi, NCR',
    image: 'https://images.unsplash.com/photo-1606136025851-3c3d10b29137?q=80&w=1052&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.fish,
    status: 'Available',
    description: 'Aurora is an elegant Oranda Goldfish with a beautiful red-and-white pattern and a distinctive wen (head growth). She is a peaceful community fish, social with other fancy goldfish. Aurora is a stunning centerpiece fish for a large, well-maintained aquarium.',
    personality: ['Peaceful', 'Social', 'Elegant', 'Slow-moving', 'Curious'],
    careRequirements: [
      'Minimum 100-litre tank with strong filtration',
      'Cold freshwater 18–22°C — no heater needed',
      'Goldfish pellets and blanched vegetables',
      'Weekly 30% water changes essential',
      'Sandy substrate (gravel can injure delicate fins)'
    ],
    vaccinationStatus: 'N/A',
    suitableFor: 'Intermediate to experienced fishkeepers',
    adoptionRequirements: 'Large, filtered freshwater aquarium required.',
    featured: false
  },
  {
    id: 'f4',
    name: 'Ziggy',
    category: 'fish',
    breed: 'Zebra Danio',
    age: 1,
    ageLabel: '8 months',
    gender: 'Male',
    location: 'Jaipur, Rajasthan',
    image: 'https://media.istockphoto.com/id/866995028/photo/zebrafish-in-aquarium.jpg?s=1024x1024&w=is&k=20&c=1zA0yTWhL8w6Niwn0ST3iB4bm_1l4jSy18Wr3kksc2k=',
    fallback: FALLBACKS.fish,
    status: 'Available',
    description: 'Ziggy is one of four Zebra Danios available as a school. These fast, active little fish are incredibly hardy and perfect for beginners. They add lively movement and striking blue-and-silver striping to any community tank. They should be kept in groups of 6 or more.',
    personality: ['Active', 'Hardy', 'Schooling', 'Energetic', 'Peaceful'],
    careRequirements: [
      'Minimum 40-litre tank with good water movement',
      'Temperature 18–26°C, very adaptable',
      'Small tropical flake food or micro pellets',
      'Weekly partial water changes',
      'Group of 6+ recommended for healthy schooling behaviour'
    ],
    vaccinationStatus: 'N/A',
    suitableFor: 'Beginner fishkeepers, community aquariums',
    adoptionRequirements: 'Must adopt in a group of at least 4. Community tank with peaceful fish.',
    featured: false
  },

  /* ===== TURTLES ===== */
  {
    id: 't1',
    name: 'Sheldon',
    category: 'turtles',
    breed: 'Red-Eared Slider',
    age: 3,
    ageLabel: '3 years',
    gender: 'Male',
    location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1684105556265-0b53170afc79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.turtles,
    status: 'Available',
    description: 'Sheldon is a healthy Red-Eared Slider with a beautiful patterned shell and a curious personality. He loves basking under his heat lamp and swimming in his tank. Sheldon is very responsive to his owner and will swim up to greet you at feeding time. A wonderful, long-lived companion.',
    personality: ['Curious', 'Active', 'Responsive', 'Peaceful', 'Hardy'],
    careRequirements: [
      'Large aquarium (150+ litres) with land basking area',
      'UVB lamp and basking lamp (30–35°C basking spot)',
      'Commercial turtle pellets plus leafy greens and live insects',
      'Water filtration system — turtles are heavy waste producers',
      'Annual reptile vet check-up'
    ],
    vaccinationStatus: 'N/A',
    suitableFor: 'All ages; responsible owners prepared for long-term care',
    adoptionRequirements: 'Proper aquatic turtle setup required before adoption. 20–30 year commitment.',
    featured: true
  },
  {
    id: 't2',
    name: 'Yoshi',
    category: 'turtles',
    breed: 'Indian Star Tortoise',
    age: 5,
    ageLabel: '5 years',
    gender: 'Female',
    location: 'Ahmedabad, Gujarat',
    image: 'https://media.istockphoto.com/id/587215462/photo/pet-indian-star-tortoise-roaming-on-a-home-lawn.jpg?s=1024x1024&w=is&k=20&c=ay6rCVUBNbnUNKWWEC-wAZ4kY6WcLykOe6HABYvR8wI=',
    fallback: FALLBACKS.turtles,
    status: 'Available',
    description: 'Yoshi is a gorgeous Indian Star Tortoise with a beautifully patterned high-domed shell. She is calm, slow-moving, and utterly fascinating to observe. Yoshi is a protected species; her adoption requires legal documentation confirming she was bred in captivity.',
    personality: ['Calm', 'Patient', 'Gentle', 'Observant', 'Long-lived'],
    careRequirements: [
      'Large outdoor enclosure or indoor tortoise table',
      'UVB lighting and warm basking spot (30–35°C)',
      'Fresh grass, hay, leafy greens, and occasional fruit',
      'High humidity environment — misting required',
      'Reptile vet experienced with tortoises'
    ],
    vaccinationStatus: 'N/A',
    suitableFor: 'Committed adult owners; no young children',
    adoptionRequirements: 'Legal CITES documentation required. Protected species regulations apply.',
    featured: false
  },
  {
    id: 't3',
    name: 'Turbo',
    category: 'turtles',
    breed: 'Box Turtle',
    age: 4,
    ageLabel: '4 years',
    gender: 'Male',
    location: 'Kolkata, West Bengal',
    image: 'https://images.unsplash.com/photo-1779382223905-a693a04a3445?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.turtles,
    status: 'Available',
    description: 'Turbo is a charming Box Turtle with a high-domed colourful shell. Despite his name, he takes life at a leisurely pace! Turbo is inquisitive and will investigate everything in his enclosure. He enjoys burrowing, soaking in his water dish, and hunting for earthworms.',
    personality: ['Inquisitive', 'Leisurely', 'Independent', 'Hardy', 'Fascinating'],
    careRequirements: [
      'Large indoor enclosure or secure outdoor pen',
      'Moist substrate for burrowing (coconut coir or topsoil)',
      'Omnivorous diet: earthworms, berries, leafy greens',
      'UVB lighting if kept indoors',
      'Water dish for soaking — shallow and easy to access'
    ],
    vaccinationStatus: 'N/A',
    suitableFor: 'Patient, committed owners; educational pet for older children',
    adoptionRequirements: 'Must not be released into the wild. Secure outdoor enclosure a plus.',
    featured: false
  },
  {
    id: 't4',
    name: 'Marina',
    category: 'turtles',
    breed: 'Painted Turtle',
    age: 2,
    ageLabel: '2 years',
    gender: 'Female',
    location: 'Bengaluru, Karnataka',
    image: 'https://images.unsplash.com/photo-1783606030011-a9f59b2fd5a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: FALLBACKS.turtles,
    status: 'Available',
    description: 'Marina is a young Painted Turtle with vivid red-and-yellow markings on her shell edges. She is an active swimmer and basker, and loves showing off for her audience. Marina is very adaptable and one of the hardiest aquatic turtle species — great for dedicated beginners.',
    personality: ['Active', 'Vibrant', 'Adaptable', 'Hardy', 'Entertaining'],
    careRequirements: [
      'Aquarium with both swimming area and dry basking platform',
      'UVB and basking lamps for thermoregulation',
      'Commercial turtle pellets, feeder fish, and aquatic plants',
      'Strong aquarium filter — weekly water changes',
      'Temperature 21–26°C water; basking spot 30–35°C'
    ],
    vaccinationStatus: 'N/A',
    suitableFor: 'Committed beginners and intermediate reptile keepers',
    adoptionRequirements: 'Proper aquatic setup required. Long-term commitment (25+ years).',
    featured: false
  }
];

/* ── Utility Functions ────────────────────────────────────── */

/** Return all pets or filter by category */
function getPets(category = 'all') {
  if (category === 'all') return PETS;
  return PETS.filter(p => p.category === category);
}

/** Find a pet by ID */
function getPetById(id) {
  return PETS.find(p => p.id === id) || null;
}

/** Get similar pets (same category, different id) */
function getSimilarPets(pet, limit = 3) {
  return PETS.filter(p => p.category === pet.category && p.id !== pet.id).slice(0, limit);
}

/** Count by category */
function getCategoryCounts() {
  return {
    all:     PETS.length,
    dogs:    PETS.filter(p => p.category === 'dogs').length,
    cats:    PETS.filter(p => p.category === 'cats').length,
    rabbits: PETS.filter(p => p.category === 'rabbits').length,
    parrots: PETS.filter(p => p.category === 'parrots').length,
    fish:    PETS.filter(p => p.category === 'fish').length,
    turtles: PETS.filter(p => p.category === 'turtles').length
  };
}

/** Fix broken images using the fallback URL */
function setupImgFallback(imgEl, category) {
  imgEl.onerror = function () {
    this.onerror = null;
    this.src = FALLBACKS[category] || FALLBACKS.dogs;
  };
}
