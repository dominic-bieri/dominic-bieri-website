import Image from "next/image";
import { useTranslations } from "next-intl";

export default function DescriptionComponent() {
  const t = useTranslations();

  return (
    <div>
      <Image
        width={300}
        height={300}
        className="w-40 h-40 rounded-full"
        src="/profile_picture.jpg"
        alt="Dominic Bieri"
      />
      <h1 className="mt-8 text-4xl font-bold">Dominic Bieri</h1>
      <h2 className="text-3xl font-semibold">Software Engineer</h2>
      <p className="mt-6 w-auto text-lg">{t("description")}</p>
    </div>
  );
}
