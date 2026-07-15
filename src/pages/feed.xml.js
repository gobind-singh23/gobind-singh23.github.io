import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('writing')).sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
  return rss({ title: 'Gobind Singh — Writing', description: 'Notes from Gobind Singh’s learning process.', site: context.site, customData: '<language>en-us</language>', items: posts.map((post) => ({ title: post.data.title, description: post.data.description ?? '', pubDate: post.data.date, link: `/blog/${post.id}/` })) });
}
