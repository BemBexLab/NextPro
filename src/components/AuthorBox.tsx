import Image from "next/image";

export default function AuthorBox() {
  return (
    <section className="wp-post-author-box" aria-label="About the author">
      <div className="wp-post-author-portrait">
        <Image
          src="/images/blog/single-post-author.webp"
          alt="Danielle Caplain"
          width={138}
          height={150}
          className="wp-post-author-image"
        />
      </div>
      <div className="wp-post-author-copy">
        <p className="wp-post-author-eyebrow">About the author</p>
        <h2>Danielle Caplain</h2>
        <p className="wp-post-author-role">Copywriter at My Social Practice</p>
        <p className="wp-post-author-description">
          Danielle Caplain is a copywriter at My Social Practice, where she
          crafts compelling, SEO-friendly content that helps dental practices
          grow their online presence and connect with patients. My Social
          Practice is a dental marketing company that provides comprehensive
          dental marketing services to thousands of practices across the United
          States and Canada.
        </p>
      </div>
    </section>
  );
}
