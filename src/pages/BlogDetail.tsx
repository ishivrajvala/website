
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/components/BlogsSection';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const blog = blogPosts.find(post => {
    const postSlug = post.link.split('/').pop();
    return postSlug === slug;
  });

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
            <button 
              onClick={() => navigate('/blogs')}
              className="btn btn-outline px-6 py-3 rounded-lg inline-flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Blogs
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gradient-to-b from-tech-dark to-tech-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <button 
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center text-tech-blue hover:underline mb-8"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to all articles
          </button>
          
          <div className="bg-black/40 rounded-xl overflow-hidden glass-card">
            <div className="h-64 md:h-96 overflow-hidden">
              <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center text-sm text-foreground/60 mb-4">
                <Calendar size={14} className="mr-1" />
                <span>{blog.date}</span>
                <div className="mx-2 h-1 w-1 rounded-full bg-foreground/40"></div>
                <Clock size={14} className="mr-1" />
                <span>{blog.readTime}</span>
                <div className="mx-2 h-1 w-1 rounded-full bg-foreground/40"></div>
                <Tag size={14} className="mr-1" />
                <span>{blog.category}</span>
              </div>
              
              <h1 className="text-2xl md:text-4xl font-bold mb-6">{blog.title}</h1>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-6">{blog.excerpt}</p>
                
                {/* This would be actual blog content in a real app */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, 
                  nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia,
                  nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h2>
                <ul>
                  <li>First important point from the article</li>
                  <li>Second key consideration for developers</li>
                  <li>Practical implementation tips</li>
                  <li>Future trends and developments</li>
                </ul>
                
                <p className="mt-6">
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, 
                  id dignissim quam. Aliquam erat volutpat. Donec id eleifend ex. Fusce non volutpat mi. 
                  Maecenas nec sodales nulla. Nullam posuere eros non libero semper imperdiet.
                </p>

                <blockquote className="border-l-4 border-tech-blue pl-4 my-6">
                  <p className="italic">
                    "The future of mobile development lies in creating seamless, 
                    performant experiences across all devices and platforms."
                  </p>
                </blockquote>
                
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                  Mauris nec ante vel eros scelerisque faucibus. Fusce facilisis erat ut odio convallis, 
                  eget vestibulum nisl lacinia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
