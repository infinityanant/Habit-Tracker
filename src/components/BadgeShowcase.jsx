export default function BadgeShowcase({ habits, getStreak, getBadge }) {
    // Collect earned badges per habit
    const earnedBadges = habits
        .map((habit) => {
            const streak = getStreak(habit);
            const badge = getBadge(streak);
            return badge ? { habit: habit.name, streak, ...badge } : null;
        })
        .filter(Boolean);

    // All possible badges for reference
    const allBadges = [
        { icon: '🛡️', name: 'Knight', tier: 1, requirement: '7-day streak', days: 7 },
        { icon: '🏆', name: 'Champion', tier: 2, requirement: '30-day streak', days: 30 },
        { icon: '⚔️', name: 'Warrior', tier: 3, requirement: '60-day streak', days: 60 },
    ];

    // Which tiers have been unlocked (across any habit)
    const unlockedTiers = new Set(earnedBadges.map((b) => b.tier));

    return (
        <div className="badge-showcase">
            <h2 className="section-title">
                <span className="section-icon">🎖️</span>
                Your Badges
            </h2>

            <div className="badge-grid">
                {allBadges.map((b) => {
                    const unlocked = unlockedTiers.has(b.tier);
                    const habitsWithBadge = earnedBadges.filter((e) => e.tier === b.tier);

                    return (
                        <div
                            key={b.tier}
                            className={`badge-card ${unlocked ? `unlocked tier-${b.tier}` : 'locked'}`}
                        >
                            <span className="badge-card-icon">{b.icon}</span>
                            <span className="badge-card-name">{b.name}</span>
                            <span className="badge-card-req">{b.requirement}</span>
                            {unlocked ? (
                                <span className="badge-card-status earned">
                                    ✅ Earned by {habitsWithBadge.length} habit{habitsWithBadge.length > 1 ? 's' : ''}
                                </span>
                            ) : (
                                <span className="badge-card-status">🔒 Locked</span>
                            )}
                        </div>
                    );
                })}
            </div>

            {earnedBadges.length > 0 && (
                <div className="badge-earned-list">
                    {earnedBadges.map((b, i) => (
                        <div key={i} className={`badge-earned-item tier-${b.tier}`}>
                            <span className="badge-earned-icon">{b.icon}</span>
                            <span className="badge-earned-habit">{b.habit}</span>
                            <span className="badge-earned-streak">🔥 {b.streak} days</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
