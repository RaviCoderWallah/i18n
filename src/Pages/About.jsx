import { useTranslation } from "react-i18next";

const cards = [
  { titleKey: "mission_title", bodyKey: "mission_body", emoji: "🎯" },
  { titleKey: "team_title", bodyKey: "team_body", emoji: "👩‍💻" },
  { titleKey: "vision_title", bodyKey: "vision_body", emoji: "🌍" },
];

const About = () => {
  const { t } = useTranslation("about"); // loads /locales/{lang}/about.json

  return (
    <div style={{ maxWidth: "760px", margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #4285f4, #1a73e8)", borderRadius: "16px", padding: "48px 36px", color: "#fff", textAlign: "center", marginBottom: "36px" }}>
        <h1 style={{ fontSize: "2.2rem", margin: "0 0 12px" }}>{t("title")}</h1>
        <p style={{ fontSize: "1.1rem", opacity: 0.9, margin: 0 }}>{t("subtitle")}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
        {cards.map((card) => (
          <div key={card.titleKey} style={{ background: "#f9f9f9", borderRadius: "12px", padding: "24px 28px", border: "1px solid #e0e0e0", display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "2rem" }}>{card.emoji}</span>
            <div>
              <h2 style={{ fontSize: "1.2rem", margin: "0 0 8px", color: "#1a73e8" }}>{t(card.titleKey)}</h2>
              <p style={{ margin: 0, color: "#555", lineHeight: "1.7" }}>{t(card.bodyKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
