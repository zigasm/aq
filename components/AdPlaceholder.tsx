type AdPlaceholderProps = {
  label?: string;
  className?: string;
};

export function AdPlaceholder({ label = "Advertisement", className = "" }: AdPlaceholderProps) {
  return (
    <aside className={`border border-dashed border-ocean-700 bg-ocean-50 p-4 text-center text-sm text-ocean-800 ${className}`}>
      <p className="font-semibold uppercase tracking-wide">{label}</p>
      <p className="mt-1 text-xs">Demo ad block for monetization-ready layout</p>
    </aside>
  );
}
