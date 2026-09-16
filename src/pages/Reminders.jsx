import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ReminderCard from "../components/ReminderCard";
import { mealOptions } from "../data/recipes";

const defaultReminders = {
  "Café da manhã": { time: "08:00", enabled: true },
  "Almoço": { time: "12:30", enabled: true },
  "Lanche": { time: "15:30", enabled: false },
  "Jantar": { time: "19:00", enabled: true }
};

function loadReminders() {
  try {
    const saved = JSON.parse(localStorage.getItem("rd-reminders"));
    return saved || defaultReminders;
  } catch {
    return defaultReminders;
  }
}

export default function RemindersPage() {
  const [reminders, setReminders] = useState(() => loadReminders());

  useEffect(() => {
    localStorage.setItem("rd-reminders", JSON.stringify(reminders));
  }, [reminders]);

  const updateReminder = (label, value, key) => {
    setReminders((previous) => ({
      ...previous,
      [label]: {
        ...previous[label],
        [key]: value
      }
    }));
  };

  return (
    <div className="page-shell">
      <Header title="Lembretes" subtitle="Configure os avisos para cada refeição." />

      <div className="reminder-list">
        {mealOptions.map((meal) => (
          <ReminderCard
            key={meal}
            label={meal}
            time={reminders[meal]?.time || "08:00"}
            enabled={Boolean(reminders[meal]?.enabled)}
            onToggle={() => updateReminder(meal, !reminders[meal]?.enabled, "enabled")}
            onChange={(time) => updateReminder(meal, time, "time")}
          />
        ))}
      </div>
    </div>
  );
}
