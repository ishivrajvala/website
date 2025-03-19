
import React from 'react';
import { BookOpen, Calendar, ArrowRight, BookText, Clock } from 'lucide-react';

// Sample blog data - in a real application, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: 'Optimizing Flutter Performance for Complex UIs',
    excerpt: 'Learn advanced techniques to improve rendering performance in Flutter applications with complex, animated user interfaces.',
    date: 'June 15, 2023',
    readTime: '8 min read',
    category: 'Flutter',
    imageUrl: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Flutter',
    link: '/blog/flutter-performance'
  },
  {
    id: 2,
    title: 'Implementing AR Features with ARCore and Flutter',
    excerpt: 'A comprehensive guide to integrating ARCore with Flutter to create immersive augmented reality experiences in your mobile applications.',
    date: 'August 22, 2023',
    readTime: '12 min read',
    category: 'AR Development',
    imageUrl: 'https://placehold.co/600x400/ec4899/ffffff?text=AR',
    link: '/blog/arcore-flutter'
  },
  {
    id: 3,
    title: 'Jetpack Compose vs Flutter: A Developer\'s Perspective',
    excerpt: 'An in-depth comparison of Jetpack Compose and Flutter, exploring the strengths and weaknesses of each framework for modern app development.',
    date: 'October 5, 2023',
    readTime: '10 min read',
    category: 'Mobile Development',
    imageUrl: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Compose',
    link: '/blog/compose-vs-flutter'
  },
  {
    id: 4,
    title: 'Integrating AI Models in Mobile Apps: Best Practices',
    excerpt: 'Discover how to effectively incorporate AI capabilities into your mobile applications while maintaining performance and user experience.',
    date: 'December 12, 2023',
    readTime: '14 min read',
    category: 'AI Integration',
    imageUrl: 'https://placehold.co/600x400/0ea5e9/ffffff?text=AI',
    link: '/blog/ai-mobile-integration'
  }
];

const BlogCard = ({ blog }: { blog: typeof blogPosts[0] }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-tech-blue/30 hover:blue-glow group h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-foreground/60 mb-2">
          <Calendar size={14} className="mr-1" />
          <span>{blog.date}</span>
          <div className="mx-2 h-1 w-1 rounded-full bg-foreground/40"></div>
          <Clock size={14} className="mr-1" />
          <span>{blog.readTime}</span>
        </div>
        
        <span className="inline-block px-2 py-1 rounded-md bg-tech-blue/10 text-tech-blue text-xs font-medium mb-2">
          {blog.category}
        </span>
        
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
        <p className="text-foreground/70 mb-4 flex-grow line-clamp-3">{blog.excerpt}</p>
        
        <a 
          href={blog.link} 
          className="inline-flex items-center text-tech-blue hover:underline mt-auto"
        >
          Read more <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-16 bg-gradient-to-b from-tech-dark to-tech-darker">
      <div className="section-container">
        <div className="text-center mb-10 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Articles & Insights</h2>
          <div className="mx-auto w-20 h-1 bg-tech-gradient rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            Sharing knowledge and experiences about mobile development, emerging technologies, and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-slide-up animate-delay-200">
          {blogPosts.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        
        <div className="mt-10 text-center opacity-0 animate-slide-up animate-delay-300">
          <a 
            href="https://medium.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline px-6 py-3 rounded-lg inline-flex items-center"
          >
            <BookOpen size={18} className="mr-2" />
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
