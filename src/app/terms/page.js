import TermsAndConditions from "@/components/termsandprivacy/terms"
import ContactFormTwo from "@/components/sections/ContactFormTwo";

export const metadata = {
    title: "Terms & Condition - Web Founders USA",
    description: "These Terms & Conditions outline the rules, responsibilities, and usage guidelines for services, content, and interactions on Web Founders USA.",

    alternates: {
    canonical: "https://www.webfoundersusa.com/terms",
    
  },

};

const Terms = () => {
    return (
        <main>
            <TermsAndConditions />
            <ContactFormTwo />
        </main>
    )
}

export default Terms