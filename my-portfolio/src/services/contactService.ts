const emailAddress = "ofekshp2821@gmail.com";
const whatsappNumber = "972528643377";

export const getGmailComposeLink = () => {
  const subject = encodeURIComponent("Portfolio Contact");
  const body = encodeURIComponent(
    "Hi Ofek,\nI just visited your portfolio and would love to connect!"
  );

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
};

export const getWhatsAppLink = () => {
  const message = encodeURIComponent(
    "Hi Ofek, I just checked out your portfolio and wanted to reach out!"
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};
