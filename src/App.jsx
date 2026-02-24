import useHabits from './hooks/useHabits';
import useTheme from './hooks/useTheme';
import HabitForm from './components/HabitForm';
import HabitCard from './components/HabitCard';
import BadgeShowcase from './components/BadgeShowcase';
import WeeklyChart from './components/WeeklyChart';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  const {
    habits,
    addHabit,
    deleteHabit,
    toggleComplete,
    getStreak,
    getWeeklyPercent,
    getBadge,
    getWeeklyData,
  } = useHabits();

  const { theme, toggleTheme } = useTheme();
  const weeklyData = getWeeklyData();

  const totalCompleted = habits.filter(
    (h) => h.completions[new Date().toISOString().slice(0, 10)]
  ).length;

  return (
    <div className="app">
      {/* Ambient glow */}
      <div className="ambient-glow" />

      <header className="header">
        <div className="header-left">
          <h1 className="logo">
            <span className="logo-icon">🎯</span>
            Habit Tracker
          </h1>
          <p className="subtitle">Build better habits, one day at a time</p>
        </div>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main className="main">
        {/* Stats banner */}
        <div className="stats-banner">
          <div className="stat-card">
            <span className="stat-card-value">{habits.length}</span>
            <span className="stat-card-label">Total Habits</span>
          </div>
          <div className="stat-card accent">
            <span className="stat-card-value">{totalCompleted}</span>
            <span className="stat-card-label">Done Today</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">
              {habits.length > 0
                ? Math.round((totalCompleted / habits.length) * 100)
                : 0}
              %
            </span>
            <span className="stat-card-label">Today's Rate</span>
          </div>
        </div>

        {/* Add Habit */}
        <section className="section">
          <HabitForm onAdd={addHabit} />
        </section>

        {/* Habits List */}
        <section className="section">
          <h2 className="section-title">
            <span className="section-icon">✨</span>
            Your Habits
          </h2>
          {habits.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🌱</span>
              <p>No habits yet. Add your first habit above!</p>
            </div>
          ) : (
            <div className="habit-list">
              {habits.map((habit) => {
                const streak = getStreak(habit);
                return (
                  <HabitCard
                    key={habit.id}
                    habit={habit}
                    streak={streak}
                    weeklyPercent={getWeeklyPercent(habit)}
                    badge={getBadge(streak)}
                    onToggle={toggleComplete}
                    onDelete={deleteHabit}
                  />
                );
              })}
            </div>
          )}
        </section>

        {/* Badges Showcase */}
        {habits.length > 0 && (
          <section className="section">
            <BadgeShowcase habits={habits} getStreak={getStreak} getBadge={getBadge} />
          </section>
        )}

        {/* Weekly Chart */}
        <section className="section">
          <WeeklyChart data={weeklyData} totalHabits={habits.length} />
        </section>
      </main>

      <footer className="footer">
        <p>Built with ❤️ — Your habits, your journey</p>
      </footer>
    </div>
  );
}
