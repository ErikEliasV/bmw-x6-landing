interface Props {
  className?: string;
}

export default function BmwLogo({ className = "w-12 h-12" }: Props) {
  return (
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
      alt="BMW Logo"
      className={className}
      draggable={false}
    />
  );
}
