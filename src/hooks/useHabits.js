import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'habit-tracker-habits';

function loadHabits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function dateStr(d) {
  return d.toISOString().slice(0, 10);
}

export default function useHabits() {
  const [habits, setHabits] = useState(loadHabits);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  }, [habits]);

  const addHabit = useCallback((name) => {
    if (!name.trim()) return;
    setHabits((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: name.trim(),
        createdAt: todayStr(),
        completions: {},
      },
    ]);
  }, []);

  const deleteHabit = useCallback((id) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  }, []);

  const toggleComplete = useCallback((id, date = todayStr()) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const completions = { ...h.completions };
        if (completions[date]) {
          delete completions[date];
        } else {
          completions[date] = true;
        }
        return { ...h, completions };
      })
    );
  }, []);

  const getStreak = useCallback((habit) => {
    let streak = 0;
    const d = new Date();
    while (true) {
      const key = dateStr(d);
      if (habit.completions[key]) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }, []);

  const getWeeklyPercent = useCallback((habit) => {
    let count = 0;
    const d = new Date();
    for (let i = 0; i < 7; i++) {
      if (habit.completions[dateStr(d)]) count++;
      d.setDate(d.getDate() - 1);
    }
    return Math.round((count / 7) * 100);
  }, []);

  // Badge system: returns the highest badge earned based on streak
  const getBadge = useCallback((streak) => {
    if (streak >= 60) return { icon: '⚔️', name: 'Warrior', tier: 3 };
    if (streak >= 30) return { icon: '🏆', name: 'Champion', tier: 2 };
    if (streak >= 7) return { icon: '🛡️', name: 'Knight', tier: 1 };
    return null;
  }, []);

  // Returns an array of { label, count } for the last 7 days across all habits
  const getWeeklyData = useCallback(() => {
    const days = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = dateStr(d);
      const count = habits.filter((h) => h.completions[key]).length;
      days.push({ label: dayNames[d.getDay()], date: key, count });
    }
    return days;
  }, [habits]);

  return {
    habits,
    addHabit,
    deleteHabit,
    toggleComplete,
    getStreak,
    getWeeklyPercent,
    getBadge,
    getWeeklyData,
  };
}
