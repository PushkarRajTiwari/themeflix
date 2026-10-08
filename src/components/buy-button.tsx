type Props = {
  /** A template slug or an All-Access plan id. */
  item: string;
  label: string;
  className?: string;
};

/** Posts to the checkout route, which redirects to Stripe Checkout. */
export function BuyButton({ item, label, className = "" }: Props) {
  return (
    <form action="/api/checkout" method="POST">
      <input type="hidden" name="item" value={item} />
      <button
        type="submit"
        className={`rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground transition hover:opacity-90 ${className}`}
      >
        {label}
      </button>
    </form>
  );
}
