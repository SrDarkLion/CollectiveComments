"use client"; 

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="flex items-center flex-col gap-8 p-3">
      <Image
        src={"/assets/logo.svg"}
        alt="Logo"
        width={235}
        height={101}
        priority
      />

      <nav>
        <ul className="flex gap-5">
          <li>
            <Link
              href="/"
              className={`text-lg font-medium ${isActive("/")
                ? "text-indigo-600 underline"
                : "text-gray-700 hover:text-indigo-500"
                }`}
            >
              Criar Código
            </Link>
          </li>
          <li>
            <Link
              href="/send-feedback"
              className={`text-lg font-medium ${isActive("/send-feedback")
                ? "text-indigo-600 underline"
                : "text-gray-700 hover:text-indigo-500"
                }`}
            >
              Enviar Feedback
            </Link>
          </li>
          <li>
            <Link
              href="/list-feedbacks"
              className={`text-lg font-medium ${isActive("/list-feedbacks")
                ? "text-indigo-600 underline"
                : "text-gray-700 hover:text-indigo-500"
                }`}
            >
              Listar Feedback
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}