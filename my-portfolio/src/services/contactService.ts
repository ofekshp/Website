const whatsappNumber = "972528643377";

export const getWhatsAppLink = () => {
  const message = encodeURIComponent(
    "Hi Ofek, I just checked out your portfolio and wanted to reach out!"
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};
