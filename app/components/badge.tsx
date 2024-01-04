interface BadgeProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function Badge({ ...props }: BadgeProps) {
  return (
    <a
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline hover:bg-neutral-100 hover:text-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-50"
      target="_blank"
      {...props}
    />
  );
}
