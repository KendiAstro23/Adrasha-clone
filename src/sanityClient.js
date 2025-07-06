// src/sanityClient.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'xeo3275o',  
  dataset: 'production',
  useCdn: true,
});
