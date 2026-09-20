const stats = [
  { value: "15+", label: "Years of Expeditions" },
  { value: "1,200+", label: "Happy Adventurers" },
  { value: "40+", label: "Curated Routes" },
  { value: "100%", label: "Local Guides" },
]

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
