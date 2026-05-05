import { useTranslation } from "react-i18next";
import { useState } from "react";

const questions = [
  { key: "q1", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
  { key: "q2", options: ["Venus", "Mercury", "Mars", "Earth"], answer: "Mercury" },
  { key: "q3", options: ["124", "144", "132", "148"], answer: "144" },
];

const Quiz = () => {
  const { t } = useTranslation("quiz"); // loads /locales/{lang}/quiz.json
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIndex, option) => {
    if (submitted) return;
    setSelected((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => setSubmitted(true);
  const score = questions.filter((q, i) => selected[i] === q.answer).length;

  return (
    <div style={{ maxWidth: "680px", margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "8px" }}>{t("title")}</h1>
      <p style={{ color: "#666", marginBottom: "32px" }}>{t("subtitle")}</p>

      {questions.map((q, i) => (
        <div key={i} style={{ background: "#f9f9f9", borderRadius: "12px", padding: "20px 24px", marginBottom: "20px", border: "1px solid #e0e0e0" }}>
          <p style={{ fontWeight: "600", marginBottom: "12px" }}>Q{i + 1}. {t(q.key)}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {q.options.map((opt) => {
              const isSelected = selected[i] === opt;
              const isCorrect = submitted && opt === q.answer;
              const isWrong = submitted && isSelected && opt !== q.answer;
              return (
                <button key={opt} onClick={() => handleSelect(i, opt)}
                  style={{
                    padding: "10px 14px", borderRadius: "8px", border: "2px solid",
                    cursor: submitted ? "default" : "pointer",
                    fontWeight: isSelected ? "600" : "400",
                    background: isCorrect ? "#d4edda" : isWrong ? "#f8d7da" : isSelected ? "#e8f0fe" : "#fff",
                    borderColor: isCorrect ? "#28a745" : isWrong ? "#dc3545" : isSelected ? "#4285f4" : "#ddd",
                    color: isCorrect ? "#155724" : isWrong ? "#721c24" : "#333",
                  }}>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button onClick={handleSubmit} disabled={Object.keys(selected).length < questions.length}
          style={{ padding: "12px 28px", background: "#4285f4", color: "#fff", border: "none", borderRadius: "8px", fontSize: "1rem", cursor: Object.keys(selected).length < questions.length ? "not-allowed" : "pointer", opacity: Object.keys(selected).length < questions.length ? 0.5 : 1 }}>
          {t("btn_submit")}
        </button>
      ) : (
        <div style={{ background: "#e8f0fe", borderRadius: "12px", padding: "20px 24px", textAlign: "center", fontWeight: "600", fontSize: "1.2rem", color: "#1a73e8" }}>
          🎉 {t("score_label")}: {score} / {questions.length}
        </div>
      )}
    </div>
  );
};

export default Quiz;
