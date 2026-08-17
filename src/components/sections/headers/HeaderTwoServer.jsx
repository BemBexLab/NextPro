import { services } from "@/data/services";
import { services as seoServices } from "@/app/service/seo-services/components/subservices";
import HeaderTwo from "./headerTwo";

function getServiceLinks() {
  return services.map((service) => ({
    id: service.id,
    title: service.title,
    path: `/service/${service.id}/`,
  }));
}

function getSeoServiceLinks() {
  const seoService = seoServices.find(
    (service) => service.id === "seo-services",
  );

  return (seoService?.sub_categories || []).map((service) => ({
    id: service.id,
    title: service.title,
    path: `/service/seo-services/${service.slug || service.id}/`,
  }));
}

export default function HeaderTwoServer(props) {
  return (
    <HeaderTwo
      {...props}
      serviceLinks={getServiceLinks()}
      seoSubServices={getSeoServiceLinks()}
    />
  );
}
