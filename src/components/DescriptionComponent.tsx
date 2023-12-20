import Image from "next/image";

export default function DescriptionComponent() {
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
      <p className="mt-6 w-auto text-lg">
        As a Full Stack Developer I create seamless solutions for web and backend.
      </p>
    </div>
  );
}
