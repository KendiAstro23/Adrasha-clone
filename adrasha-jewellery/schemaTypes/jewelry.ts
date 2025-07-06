import { defineType, defineField } from 'sanity';
import { TagIcon } from '@sanity/icons';

export default defineType({
  name: 'jewelry',
  title: 'Jewelry',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'price',
      title: 'Base Price (KES)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
        name: 'stock',
        title: 'Stock (Default)',
        type: 'number',
        validation: (Rule) => Rule.required().min(0),
      }),
      
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Necklace', 'Bracelet', 'Earrings', 'Ring', 'Anklet'],
        layout: 'dropdown',
      },
    }),

    // ✅ Root-level images (new)
    defineField({
      name: 'images',
      title: 'Main Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.min(1),
    }),

    // ✅ Variant field
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        defineType({
          name: 'variant',
          title: 'Variant',
          type: 'object',
          fields: [
            defineField({
              name: 'color',
              title: 'Color',
              type: 'string',
            }),
            defineField({
              name: 'stock',
              title: 'Stock Count',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              name: 'images',
              title: 'Variant Images',
              type: 'array',
              of: [{ type: 'image', options: { hotspot: true } }],
              validation: (Rule) => Rule.min(1),
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Mark this item as featured on the shop page',
    }),
    defineField({
      name: 'onSale',
      title: 'On Sale',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle if this item is currently on sale',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'variants.0.images.0', // fallback will be handled in prepare
      price: 'price',
      featured: 'featured',
      mainImage: 'images.0',
    },
    prepare({ title, media, mainImage, price, featured }) {
      return {
        title: `${title} ${featured ? '⭐' : ''}`,
        subtitle: `KES ${price}`,
        media: media || mainImage, // fallback if variant image is missing
      };
    },
  },
});
