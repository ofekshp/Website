import { useEffect } from "react";

const sectionIds = ["hero", "about", "projects", "skills", "contact"];

const ScrollSpy = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          history.replaceState(null, "", `#${id}`);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollSpy;
