import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_486zc2i";
const TEMPLATE_ID = "template_uyh6rc5";
const PUBLIC_KEY = "LQJSc3U3yvRVwjeKF";

type EmailFormData = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = async (formData: EmailFormData) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
};
