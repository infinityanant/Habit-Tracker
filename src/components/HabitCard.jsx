export default function HabitCard({
    habit,
    streak,
    weeklyPercent,
    badge,
    onToggle,
    onDelete,
}) {
    const today = new Date().toISOString().slice(0, 10);
    const isCompletedToday = !!habit.completions[today];

    return (
        <div className={`habit-card ${isCompletedToday ? 'completed' : ''}`}>
            <div className="habit-card-main">
                <button
                    id={`check-${habit.id}`}
                    className={`check-btn ${isCompletedToday ? 'checked' : ''}`}
                    onClick={() => onToggle(habit.id)}
                    aria-label={isCompletedToday ? 'Unmark habit' : 'Mark habit complete'}
                >
                    {isCompletedToday ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    ) : (
                        <div className="check-circle" />
                    )}
                </button>

                <div className="habit-info">
                    <div className="habit-name-row">
                        <h3 className="habit-name">{habit.name}</h3>
                        {badge && (
                            <span className={`badge badge-tier-${badge.tier}`} title={`${badge.name} — ${streak}-day streak!`}>
                                <span className="badge-icon">{badge.icon}</span>
                                <span className="badge-name">{badge.name}</span>
                            </span>
                        )}
                    </div>
                    <div className="habit-stats">
                        <span className="stat streak" title="Current streak">
                            <span className="stat-icon">🔥</span>
                            <span className="stat-value">{streak}</span>
                            <span className="stat-label">day{streak !== 1 ? 's' : ''}</span>
                        </span>
                        <span className="stat weekly" title="Weekly completion">
                            <span className="stat-icon">📊</span>
                            <span className="stat-value">{weeklyPercent}%</span>
                        </span>
                    </div>
                </div>

                <button
                    id={`delete-${habit.id}`}
                    className="delete-btn"
                    onClick={() => onDelete(habit.id)}
                    aria-label="Delete habit"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                </button>
            </div>

            {/* Weekly mini-progress bar */}
            <div className="habit-progress-bar">
                <div
                    className="habit-progress-fill"
                    style={{ width: `${weeklyPercent}%` }}
                />
            </div>
        </div>
    );
}
