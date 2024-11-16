import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getProducts() {
  try {
    const entries = await client.getEntries({
      content_type: 'pageProduct',
      select: 'fields.name, fields.price, fields.slug, fields.featuredProductImage, fields.icon'
    });
    console.log(entries.items)
    return entries.items;
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error);
    return [];
  }
}

export async function getProjects() {
  try {
    const entries = await client.getEntries({
      content_type: 'project',
      select: 'fields.projectName, fields.projectBrief, fields.slug, fields.projectImage, fields.tags'
    });
    console.log(entries.items)
    return entries.items;
  } catch (error) {
    console.error('Error fetching projects:', error.response ? error.response.data : error);
    return [];
  }
}

export async function getProductBySlug(slug) {
  try {
    const res = await client.getEntries({
      content_type: 'pageProduct', // Ensure this matches your Contentful content type
      'fields.slug': slug, // Adjust this if slug is stored differently
    });
    
    return res.items[0] || null;
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error);
    return null;
  }
}

export async function getProjectBySlug(slug) {
  try {
    const res = await client.getEntries({
      content_type: 'project', // Ensure this matches your Contentful content type
      'fields.slug': slug, // Adjust this if slug is stored differently
    });
    
    return res.items[0] || null;
  } catch (error) {
    console.error('Error fetching Projects:', error.response ? error.response.data : error);
    return null;
  }
}


export async function getAllCategories() {
  try {
    console.log('Fetching all categories...');
    const response = await client.getEntries({
      content_type: 'category', // Update this to the correct content type ID
      include: 2,               // Resolves references to the featured product
    });
    console.log('Fetched category response:', response);
    return response.items.map(category => {
      // Extract category name and featured product image if available
      const categoryName = category.fields.name;
      const featuredProductImage = category.fields.featuredProject?.fields?.featuredProductImage?.fields?.file?.url;
      const slug = category.fields.slug;
      const categoryId = category.sys.id;

      return {
        name: categoryName,
        featuredProductImage: featuredProductImage ? `https:${featuredProductImage}` : null,
        slug,
        id: categoryId,
      };
    });
  } catch (error) {
    console.error('Error fetching project categories:', error.response ? error.response.data : error);
    return [];
  }
}


export async function getCategoryEntries(categoryId) {
  try {
    console.log('Fetching category entries for category ID:', categoryId);
    const entries = await client.getEntries({
      content_type: 'pageProduct',
      select: 'fields.name, fields.price, fields.slug, fields.featuredProductImage',
      'fields.category.sys.id': categoryId,
    });
    console.log('Fetched category entries:', entries);
    return entries.items;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}