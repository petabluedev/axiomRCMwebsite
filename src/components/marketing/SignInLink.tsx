import type { ComponentProps } from "react";
import Link from "next/link";
import { getLoginUrl } from "@/lib/appOrigin";

type Props = Omit<ComponentProps<typeof Link>, "href">;

/**
 * Sign-in target: local /login, or NEXT_PUBLIC_APP_ORIGIN/login when the app is hosted separately.
 */
export function SignInLink({ children, ...props }: Props) {
  return (
    <Link href={getLoginUrl()} {...props}>
      {children}
    </Link>
  );
}
