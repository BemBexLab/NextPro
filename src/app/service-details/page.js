"use client"; // Mark the whole page as a client component!

import React, { useEffect, useState } from 'react';
import PageTitle from '@/components/sections/pageTitle';
import ServiceArtical from '@/components/sections/services/serviceArtical';
// import ContactForm from '@/components/sections/contactForm'; // Uncomment if needed

const ServicesDetails = () => {
  // If you need to fetch WordPress or other CMS data, do it here.
  // For now, I'm not fetching posts since your ServiceArtical uses local data (serviceDetailsData).
  // If you want to fetch posts, see commented section below.

  // Example: Fetch WordPress posts here (optional)
  /*
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/posts", { cache: "no-store" });
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts", err);
        setPosts([]);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);
  */

  return (
    <main>
      <PageTitle
        pageName="Services"
        breadcrumbLink="Services"
        breadcrumbCurrent=""
        bgImage="/images/servicebanner/services-image.jpg"
      />

      {/* If you want to pass fetched posts: */}
      {/* {loading ? (
        <div className="py-20 text-center text-lg text-primary">Loading service details...</div>
      ) : (
        <ServiceArtical posts={posts} />
      )} */}

      {/* Your local-data version: */}
      <ServiceArtical />

      {/* 
      <ContactForm 
        color={"text-white"} 
        inputColor={"bg-transparent border-white border text-white placeholder:text-white"} 
      />
      <div className='lg:pb-15 pb-9'></div>
      */}
    </main>
  );
};

export default ServicesDetails;
