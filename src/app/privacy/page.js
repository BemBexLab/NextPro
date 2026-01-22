import Privacy from "@/components/termsandprivacy/privacy"
import ContactFormTwo from "@/components/sections/ContactFormTwo";

export const metadata = {
    title: "PrivacyPolicy  | Web Founders USA",
    description: "Our Privacy Policy details how information is collected, stored, and used, ensuring transparency, security, and protection of user data.",
};
const PrivacyPolicy = () => {
    return (
        <main>
            <Privacy />
            <ContactFormTwo />
        </main>
    )
}

export default PrivacyPolicy