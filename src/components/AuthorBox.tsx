import Image from "next/image";

export default function AuthorBox() {
  return (
    <section className="wp-post-author-box" aria-label="About the author">
      <div className="wp-post-author-portrait">
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=276&h=300&q=80"
          alt="Penelope Scott"
          width={138}
          height={150}
          className="wp-post-author-image"
        />
      </div>
      <div className="wp-post-author-copy">
        <p className="wp-post-author-eyebrow">About the author</p>
        <h2>Penelope Scott</h2>
        {/* <p className="wp-post-author-role">Copywriter at My Social Practice</p> */}
        <p className="wp-post-author-description">
          Hi, I’m Penelope Scott. I have over 25 years of
          experience in digital marketing and have worked with well-known U.S.
          companies, including McDonald's, Walgreens, American Airlines,
          Healthline Media, and Entrepreneur. Over the years, I’ve gained
          experience in SEO, content marketing, brand growth, and other areas of
          digital marketing. I write these blogs based on what I’ve learned
          through my work and experience. My aim is to share clear, useful
          insights and practical information that can help you better understand
          digital marketing and make informed decisions for your business.
        </p>
      </div>
    </section>
  );
}
