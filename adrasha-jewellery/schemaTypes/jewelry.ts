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
      title: 'Price (KES)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
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
      media: 'images.0',
      price: 'price',
      featured: 'featured',
    },
    prepare({ title, media, price, featured }) {
      return {
        title: `${title} ${featured ? '⭐' : ''}`,
        subtitle: `KES ${price}`,
        media,
      };
    },
  },
});
