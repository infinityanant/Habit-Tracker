export default function WeeklyChart({ data, totalHabits }) {
    if (!data || data.length === 0 || totalHabits === 0) {
        return (
            <div className="chart-container">
                <h2 className="section-title">
                    <span className="section-icon">📈</span>
                    Weekly Progress
                </h2>
                <p className="chart-empty">Add some habits to see your weekly progress!</p>
            </div>
        );
    }

    const maxCount = Math.max(...data.map((d) => d.count), 1);

    return (
        <div className="chart-container">
            <h2 className="section-title">
                <span className="section-icon">📈</span>
                Weekly Progress
            </h2>
            <div className="chart">
                {data.map((day) => {
                    const heightPercent = (day.count / maxCount) * 100;
                    const today = new Date().toISOString().slice(0, 10);
                    const isToday = day.date === today;
                    return (
                        <div key={day.date} className={`chart-bar-wrapper ${isToday ? 'today' : ''}`}>
                            <span className="chart-count">{day.count}</span>
                            <div className="chart-bar-track">
                                <div
                                    className="chart-bar"
                                    style={{ height: `${heightPercent}%` }}
                                />
                            </div>
                            <span className="chart-label">{day.label}</span>
                        </div>
                    );
                })}
            </div>
            <div className="chart-legend">
                <span>Habits completed per day (last 7 days)</span>
            </div>
        </div>
    );
}
